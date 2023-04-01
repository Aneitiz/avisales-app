import React from 'react'

import TicketInfo from './TicketInfo'
import style from './TicketItem.module.scss'

const TicketItem: React.FC<any> = ({ info }: any) => {
  const { price, carrier, segments } = info
  const [to, back] = segments
  const ticketLogo = `//pics.avs.io/99/36/${carrier}.png`
  return (
    <div className={style.ticket}>
      <div className={style.ticket__header}>
        <p className={style.ticket__price}>{price}</p>
        <img src={ticketLogo} alt="Логотип авиакомпании" />
      </div>
      <ul className={style.ticket__info}>
        <TicketInfo info={to} />
        <TicketInfo info={back} />
      </ul>
    </div>
  )
}

export default TicketItem
