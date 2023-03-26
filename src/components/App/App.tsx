import React from 'react'

import Header from '../Header'
import SideBarFilters from '../SideBarFilters'
import TabBarFilters from '../TabBarFilters'
import TicketList from '../TicketList'

import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <main className={style.main}>
      <Header />
      <section className={style.container}>
        <SideBarFilters />
        <div className="container__tickets">
          <TabBarFilters />
          <TicketList />
        </div>
      </section>
    </main>
  )
}

export default App
