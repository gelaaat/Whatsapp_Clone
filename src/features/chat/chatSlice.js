import { createSlice } from '@reduxjs/toolkit'
import { getMessages, sendMessage } from './chatActions'
import { useSelector } from 'react-redux'

const initialState = {
  actualChat: null,
  listOfChats: null,
  loadingListOfChats: false,
  errorListOfChats: null,
  searchActive: false,
  searchKey: null,
  searchedChats: null,
  loadingConversationMessages: false,
  errorMessages: null,
  infoActualChat: null,
  loadingSendMessage: null,
  errorSendMessage: null

}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActualChat: (state, { payload }) => {
      state.actualChat = payload.actualChat
      console.log(payload)
    },
    setSearchKey: (state, { payload }) => {
      state.searchKey = payload.searchKey
      state.searchActive = true
    },
    setDownSearchChat: (state) => {
      state.searchActive = false
    },
    getSearchedChats: (state) => {

    }
  },
  extraReducers: {
    [getMessages.pending]: state => {
      state.loadingConversationMessages = true
      state.error = false
    },
    [getMessages.fulfilled]: (state, { payload }) => {
      state.loadingConversationMessages = false
      state.infoActualChat = payload
    },
    [getMessages.rejected]: (state, { payload }) => {
      state.loadingConversationMessages = false
      state.errorMessages = payload
    },
    [sendMessage.pending]: state => {
      state.loadingSendMessage = true
      state.errorSendMessage = false
    },
    [sendMessage.fulfilled]: (state, { payload }) => {
      state.loadingSendMessage = false
      state.infoActualChat = payload
    },
    [sendMessage.rejected]: state => {
      state.loadingSendMessage = false
      state.errorSendMessage = false
    }
  }
})

export const { setActualChat, setSearchKey, setDownSearchChat } = chatSlice.actions

export default chatSlice.reducer
