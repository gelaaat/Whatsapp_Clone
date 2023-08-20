import { createSlice } from '@reduxjs/toolkit'
import { sendRequestFriend } from './userActions'

const initialState = {
  loadingSendRequestFriend: null,
  sendRequestFriendError: null,
  infoRequestFriend: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: {
    [sendRequestFriend.pending]: state => {
      state.loadingSendRequestFriend = true
      state.sendRequestFriendError = false
    },
    [sendRequestFriend.fulfilled]: (state, { payload }) => {
      state.infoRequestFriend = payload
      state.sendRequestFriendError = false
      state.loadingSendRequestFriend = false
    },
    [sendRequestFriend.error]: (state, { payload }) => {
      state.sendRequestFriendError = payload
      state.loadingSendRequestFriend = false
    }
  }
})

export default userSlice.reducer
