import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentTab: 'cheapest',
}

const tabBarFilterSlice = createSlice({
  name: 'tabBarFilterSlice',
  initialState,
  reducers: {
    selectTab(state, action) {
      state.currentTab = action.payload
    },
  },
})

export const { selectTab } = tabBarFilterSlice.actions
export default tabBarFilterSlice.reducer
