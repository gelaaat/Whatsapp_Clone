import { createSlice } from '@reduxjs/toolkit'
// import { getMessages } from './messagesActions'

const initialState = {
  actualChat: null,
  loadingConversationMessages: false,
  error: null,
  messages: null
}

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {

  },
  extraReducers: {
    /* [getMessages.pending]: state => {
      state.loadingConversationMessages = true
      state.error = false
    },
    [getMessages.fulfilled]: (state, { payload }) => {
      state.loadingConversationMessages = false
      state.messages = payload
    },
    [getMessages.rejected]: (state, { payload }) => {
      state.loadingConversationMessages = false
      state.error = payload
    } */
  }
})

export default messagesSlice.reducer
