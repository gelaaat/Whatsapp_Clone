import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  actualChat: null,
  listOfChats: null,
  loadingListOfChats: false,
  errorListOfChats: null,
  searchActive: false,
  searchChat: null
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActualChat: (state, { payload }) => {
      state.actualChat = payload.actualChat
      console.log(payload)
    },
    setSearchChat: (state, { payload }) => {
      state.searchChat = payload.searchChat
      state.searchActive = true
    },
    setDownSearchChat: (state) => {
      state.searchActive = false
    }
  },
  extraReducers: {

  }
})

export const { setActualChat, setSearchChat, setDownSearchChat } = chatSlice.actions

export default chatSlice.reducer
