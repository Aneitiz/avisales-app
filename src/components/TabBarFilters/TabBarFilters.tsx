import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { TabBarFilterItems } from '../../constans/constans'
import { selectTab } from '../../store/tabBarFilterSlice'
import { State } from '../../types/types'

import style from './TabBarFilters.module.scss'
const TabBarFilters = () => {
  const dispath = useDispatch()
  const state = (state: State) => state.tabBarFilter
  const tabBarFilter = useSelector(state)
  const TabBarList = TabBarFilterItems.map(({ label, name }) => {
    let selectedTab = tabBarFilter.currentTab
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
      <li
        className={`${style.filters__block} ${selectedTab === name ? style.filters__blockSelected : ''}`}
        key={name}
        onClick={() => dispath(selectTab(name))}
      >
        {label}
      </li>
    )
  })

  return <ul className={style.filters}>{TabBarList}</ul>
}

export default TabBarFilters
