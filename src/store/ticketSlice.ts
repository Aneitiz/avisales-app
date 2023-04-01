import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { Ticket } from '../types/types'

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

interface TicketSliceState {
  ticketData: Ticket[]
  stop: boolean
  error: boolean
  loading: boolean
  status: string
}

const initialState: TicketSliceState = {
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
        state.status = 'pending'
      })
      .addCase(ticketsFetch.fulfilled, (state, action) => {
        const { tickets, stop } = action.payload
        state.ticketData.push(...tickets)
        if (stop) {
          state.stop = true
          state.status = 'fulfilled'
        } else {
          state.status = 'fulfilled'
        }
      })
      .addCase(ticketsFetch.rejected, (state) => {
        state.error = true
        state.loading = false
        state.status = 'rejected'
      })
  },
})

export default ticketSlice.reducer
