import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: false,
  nonStop: true,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
}

const sideBarFilterSlice = createSlice({
  name: 'sideBarFilterSlice',
  initialState: initialState,
  reducers: {
    selectFilter(state: any, action) {
      const filterName = action.payload
      if (filterName === 'all') {
        const all = !state.all
        state.all = all
        for (let filter in state) {
          state[filter] = all
        }
      } else {
        state[filterName] = !state[filterName]
        const onAllFiltersSelected = Object.entries(state)
          .filter((element: any) => element[0] !== 'all')
          .filter((element: any) => element[1]).length
        state.all = onAllFiltersSelected >= 4
      }
    },
  },
})

export const { selectFilter } = sideBarFilterSlice.actions
export default sideBarFilterSlice.reducer
