import { createSlice } from '@reduxjs/toolkit'
import { acceptRequestFriend, sendRequestFriend } from './userActions'

const initialState = {
  loadingSendRequestFriend: null,
  sendRequestFriendError: null,
  infoRequestFriend: null,
  loadingacceptRequestFriend: null,
  acceptRequestFriend: null,
  infoAcceptRequestFriend: null,
  acceptRequestFriendError: false
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
    },
    [acceptRequestFriend.pending]: state => {
      state.loadingacceptRequestFriend = true
      state.acceptRequestFriendError = false
    },
    [acceptRequestFriend.fulfilled]: (state, { payload }) => {
      state.infoAcceptRequestFriend = payload
      state.acceptRequestFriendError = false
      state.loadingacceptRequestFriend = false
    },
    [acceptRequestFriend.error]: (state, { payload }) => {
      state.acceptRequestFriendError = payload
      state.loadingacceptRequestFriend = false
    }

  }
})

export default userSlice.reducer
