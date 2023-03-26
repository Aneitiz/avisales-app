import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as createKey } from 'uuid'

import { fetchSearchId } from '../../store/searchIdSlice'
import { ticketsFetch } from '../../store/ticketSlice'
import TicketItem from '../TicketItem'
import { sortCurrentTab, sortSideFilters } from '../../helpers/listSortFunctions'
import { ErrorNotification, LoadingSpinner, NoTicketsFounded } from '../UserMessages/UserMessages'
import { Ticket, State } from '../../types/types'

import style from './TicketList.module.scss'
const TicketList: React.FC = () => {
  const dispath = useDispatch()
  const ticketState = (state: State) => state.ticket
  const sideBarFilterState = (state: State) => state.sideBarFilter
  const tabBarFilterState = (state: State) => state.tabBarFilter
  const { ticketData, loading, error, status } = useSelector(ticketState)
  const currentSideFilter = useSelector(sideBarFilterState)
  const currentTabFilter = useSelector(tabBarFilterState)
  const [ticketCount, setTicketCount] = useState(5)
  useEffect(() => {
    const prepareData = async () => {
      // @ts-ignore
      return dispath(fetchSearchId())
    }
    prepareData()
      .then((res) => {
        // @ts-ignore
        dispath(ticketsFetch(res.payload))
      })
      .catch((e) => e.message)
  }, [])
  const onMoreTicketsButton = () => {
    setTicketCount(ticketCount + 5)
  }

  if (loading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorNotification />
  }

  const tabSort = sortCurrentTab(currentTabFilter, ticketData.slice())
  const ticketsToRender = sortSideFilters(currentSideFilter, tabSort, status)
  const ticketsContent = () => {
    if (ticketsToRender.length === 0) {
      return <NoTicketsFounded />
    }
    if (ticketsToRender.length > ticketCount) {
      ticketsToRender.length = ticketCount
    }
    return ticketsToRender.map((element: Ticket) => {
      return <TicketItem ticketItems={element} key={createKey()} />
    })
  }
  return (
    <ul className={style['ticket-list']}>
      {ticketsContent()}
      <button className={style['ticket-list__button']} type="button" onClick={onMoreTicketsButton}>
        Показать ещё 5 билетов!
      </button>
    </ul>
  )
}

export default TicketList
