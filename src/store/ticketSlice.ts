import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const ticketsFetch = createAsyncThunk('ticketFetch', async function (searchId: string, { rejectWithValue }) {
  try {
    const request = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    if (!request.ok) {
      throw new Error('Could not fetch tickets')
    }
    const res = await request.json()
    return { tickets: res.tickets, stop: res.stop }
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})

const initialState = {
  ticketData: [],
  stop: false,
  error: false,
  loading: true,
  status: 'pending',
}

const ticketSlice = createSlice({
  name: 'ticketSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ticketsFetch.pending, (state) => {
        state.error = false
        state.loading = true
      })
      .addCase(ticketsFetch.fulfilled, (state, action) => {
        const { tickets, stop } = action.payload
        state.loading = false
        state.stop = stop
        state.ticketData = tickets
        state.status = 'fulfilled'
      })
      .addCase(ticketsFetch.rejected, (state) => {
        state.error = true
        state.loading = false
      })
  },
})

export default ticketSlice.reducer
