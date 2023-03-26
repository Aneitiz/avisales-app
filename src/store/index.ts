import { configureStore } from '@reduxjs/toolkit'

import sideBarFilterSlice from './sideBarFilterSlice'
import tabBarFilterSlice from './tabBarFilterSlice'
import ticketSlice from './ticketSlice'
import searchIdSlice from './searchIdSlice'

const store = configureStore({
  reducer: {
    sideBarFilter: sideBarFilterSlice,
    tabBarFilter: tabBarFilterSlice,
    ticket: ticketSlice,
    searchId: searchIdSlice,
  },
})

export default store
