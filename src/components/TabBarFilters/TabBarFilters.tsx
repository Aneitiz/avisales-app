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
  const TabBarList = TabBarFilterItems.map((element: any) => {
    let selectedTab = tabBarFilter.currentTab
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
      <li
        className={`${style.filters__block} ${selectedTab === element.name ? style.filters__blockSelected : ''}`}
        key={element.name}
        onClick={() => dispath(selectTab(element.name))}
      >
        {element.label}
      </li>
    )
  })

  return <ul className={style.filters}>{TabBarList}</ul>
}

export default TabBarFilters
