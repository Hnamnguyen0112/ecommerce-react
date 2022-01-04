import { createSlice } from '@reduxjs/toolkit'
import { MessageState } from './message.types'

const messageTypes = {
  SUCCESS: 'alert-success',
  ERROR: 'alert-error',
}

const initialState: MessageState = {
  type: '',
  data: '',
}

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    success: (state, action) => {
      state.type = messageTypes.SUCCESS
      state.data = action.payload.data
    },
    error: (state, action) => {
      state.type = messageTypes.ERROR
      state.data = action.payload.data
    },
    clear: () => initialState,
  },
})

export const { success, error, clear } = messageSlice.actions
export default messageSlice.reducer
