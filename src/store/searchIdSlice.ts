import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

type SearchIdState = {
  searchId: string | null
  error: boolean | null
}

const initialState = {
  searchId: '',
  error: false,
}

export const fetchSearchId = createAsyncThunk<SearchIdState, any, { rejectValue: string }>(
  'ticketSearchId',
  async function (_: any, { rejectWithValue }) {
    try {
      const request = await fetch('https://aviasales-test-api.kata.academy/search')
      if (!request.ok) {
        return rejectWithValue('Server search Id error')
      }
      const res = await request.json()
      return res.searchId
    } catch (e: any) {
      return rejectWithValue(e.message)
    }
  }
)

const searchIdSlice = createSlice({
  name: 'searchId',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.error = false
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        // @ts-ignore
        state.searchId = action.payload
      })
      .addCase(fetchSearchId.rejected, (state) => {
        state.error = true
      })
  },
})
export default searchIdSlice.reducer
