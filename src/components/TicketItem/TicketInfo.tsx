import React from 'react'
import { format, addMinutes } from 'date-fns'

import { durationView, stopsView } from '../../helpers/viewHelper'

import style from './TicketItem.module.scss'

const TicketInfo: React.FC<any> = ({ info }): JSX.Element => {
  const { origin, destination, date, duration, stops } = info
  return (
    <li className={style.ticket__inner}>
      <p className={style['ticket__info-paragraph']}>
        <span className={style['ticket__info-title']}>
          {origin} - {destination}
        </span>
        <span>
          {format(new Date(date), 'HH\':\'mm')} - {format(addMinutes(new Date(date), duration), "HH':'mm")}
        </span>
      </p>
      <p className={style['ticket__info-paragraph']}>
        <span className={style['ticket__info-title']}>В пути</span>
        <span>{durationView(duration)}</span>
      </p>
      <p className={style['ticket__info-paragraph']}>
        <span className={style['ticket__info-title']}>{stopsView(stops)}</span>
        <span>{stops.join(', ')}</span>
      </p>
    </li>
  )
}

export default TicketInfo
