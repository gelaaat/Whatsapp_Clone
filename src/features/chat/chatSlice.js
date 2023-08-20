import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  actualChat: null,
  listOfChats: null,
  loadingListOfChats: false,
  errorListOfChats: null
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setActualChat: (state, { payload }) => {
      state.actualChat = payload.actualChat
      console.log(payload)
    }
  },
  extraReducers: {

  }
})

export const { setActualChat } = chatSlice.actions

export default chatSlice.reducer
