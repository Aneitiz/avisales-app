import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as createKey } from 'uuid'

import TicketItem from '../TicketItem'
import { sortCurrentTab, sortSideFilters } from '../../helpers/listSortFunctions'
import { ErrorNotification, LoadingSpinner, NoTicketsFounded } from '../UserMessages/UserMessages'
import { Ticket, State } from '../../types/types'
import { fetchSearchId } from '../../store/searchIdSlice'
import { ticketsFetch } from '../../store/ticketSlice'
import { startId, startTicketsFetch } from '../../helpers/startFetchFunc'

import style from './TicketList.module.scss'

const TicketList: React.FC = () => {
  const idState = (state: State) => state.searchId

  const ticketState = (state: State) => state.ticket

  const sideBarFilterState = (state: State) => state.sideBarFilter

  const dispatch = useDispatch<any>()
  const tabBarFilterState = (state: State) => state.tabBarFilter
  const { ticketData, stop } = useSelector(ticketState)
  const currentSideFilter = useSelector(sideBarFilterState)
  const { searchId } = useSelector(idState)
  const currentTabFilter = useSelector(tabBarFilterState)
  const [ticketCount, setTicketCount] = useState(5)
  const [data, setData] = useState([])
  const [errorStartData, setErrorStartData] = useState(false)
  const ref: any = useRef()
  ref.current = ticketData
  useEffect(() => {
    startId()
      .then((res: string) => {
        startTicketsFetch(res)
          .then((res: any) => {
            setData(res)
          })
          .catch(() => setErrorStartData(true))
      })
      .catch(() => ErrorNotification())
  }, [])
  useEffect(() => {
    if (errorStartData) {
      return
    }
    if (!searchId) {
      dispatch(fetchSearchId(null))
    }
    let timer: any
    if (!errorStartData && searchId && !stop) {
      timer = setInterval(() => {
        dispatch(ticketsFetch(searchId))
      }, 800)
      return () => clearInterval(timer)
    }
    if (stop) {
      setData(ref.current)
      return
    }
  }, [searchId, ticketData, stop, data, errorStartData])
  const onMoreTicketsButton = () => {
    setTicketCount(ticketCount + 5)
  }
  if (data) {
    const tabSort = sortCurrentTab(currentTabFilter, data)
    const sortSide = sortSideFilters(currentSideFilter, tabSort, 'fulfilled')
    const ticketsContent = () => {
      if (data.length !== 0 && sortSide.length === 0) {
        return <NoTicketsFounded />
      }
      if (errorStartData) {
        return ErrorNotification()
      }
      if (sortSide.length > ticketCount) {
        sortSide.length = ticketCount
      }
      return sortSide.map((element: Ticket) => {
        return (
          <li key={createKey()}>
            <TicketItem info={element} />
          </li>
        )
      })
    }
    if (!stop && errorStartData) {
      return (
        <ul className={style['ticket-list']}>
          {ticketsContent()}
          <button className={style['ticket-list__button']} type="button" onClick={onMoreTicketsButton}>
            Показать ещё 5 билетов!
          </button>
        </ul>
      )
    }
    return (
      <ul className={style['ticket-list']}>
        <li>{!stop ? LoadingSpinner() : null}</li>
        {ticketsContent()}
        <button className={style['ticket-list__button']} type="button" onClick={onMoreTicketsButton}>
          Показать ещё 5 билетов!
        </button>
      </ul>
    )
  }
  return (
    <ul className={style['ticket-list']}>
      <li>{!stop ? LoadingSpinner() : null}</li>
    </ul>
  )
}

export default TicketList
