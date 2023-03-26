import React from 'react'

import Logo from '../../assets/images/Logo.svg'

import style from './Header.module.scss'
const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <img src={Logo} alt="" className="header__image" />
    </header>
  )
}

export default Header
