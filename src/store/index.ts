import { combineReducers, configureStore } from '@reduxjs/toolkit'

import sideBarFilterSlice from './sideBarFilterSlice'
import tabBarFilterSlice from './tabBarFilterSlice'
import ticketSlice from './ticketSlice'
import searchIdSlice from './searchIdSlice'

const rootReducer = combineReducers({
  sideBarFilter: sideBarFilterSlice,
  tabBarFilter: tabBarFilterSlice,
  ticket: ticketSlice,
  searchId: searchIdSlice,
})
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

export default store
