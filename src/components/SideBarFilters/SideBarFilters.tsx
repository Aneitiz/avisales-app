import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sideBarFiltersItems } from '../../constans/constans'
import { selectFilter } from '../../store/sideBarFilterSlice'

import style from './SideBarFilters.module.scss'
const SideBarFilters: React.FC = () => {
  const state = (state: any) => state.sideBarFilter
  const dispath = useDispatch()
  const sideBarFilter = useSelector(state)
  const filterList = sideBarFiltersItems.map(({ name, label }) => {
    return (
      <label className={style.aside__label} key={name} htmlFor={name}>
        <input id={name} type="checkbox" onChange={() => dispath(selectFilter(name))} checked={sideBarFilter[name]} />
        {label}
      </label>
    )
  })
  return (
    <aside className={style.aside}>
      <div className={style.aside__title}>Количество пересадок</div>
      <div className={style.aside__filters}>{filterList}</div>
    </aside>
  )
}

export default SideBarFilters
