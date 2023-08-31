import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser, logout, setLastChats } from './authActions'

// Implementar localstorage en el initial state

const initialStateOnLocalStorage = JSON.parse(window.localStorage.getItem('userInfo'))

const initialState = {
  loadingUser: false,
  userInfo: initialStateOnLocalStorage || null,
  userSessionId: null,
  errorUser: null,
  successUserSignUp: false,
  successUserLogIn: false,
  loadingSetLastChats: false,
  errorSettingLastChats: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loadingUser = true
      state.errorUser = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loadingUser = false
      state.successUserSignUp = true
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loadingUser = false
      state.errorUser = payload
    },
    [loginUser.pending]: (state) => {
      state.loadingUser = true
      state.errorUser = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loadingUser = false
      state.successUserLogIn = true
      state.userInfo = payload
      window.localStorage.setItem('userInfo', JSON.stringify(payload))
    },
    [loginUser.rejected]: (state, action) => {
      state.loadingUser = false
      state.errorUser = action
    },
    [logout.pending]: (state) => {
      state.loadingUser = true
      state.errorUser = null
    },
    [logout.fulfilled]: (state, { payload }) => {
      state.loadingUser = false
      state.userInfo = null
      state.successUserLogIn = false
      state.userSessionId = false
      state.successUserSignUp = false
      window.localStorage.removeItem('userInfo')
    },
    [logout.rejected]: (state, action) => {
      state.loadingUser = false
      state.errorUser = action
    },
    [setLastChats.pending]: (state) => {
      state.loadingSetLastChats = true
    },
    [setLastChats.fulfilled]: (state, { payload }) => {
      state.loadingSetLastChats = false
      state.userInfo.lastChats = payload
    },
    [setLastChats.rejected]: (state, { payload }) => {
      setLastChats.loadingSetLastChats = false
      setLastChats.errorSettingLastChats = payload
    }
  }
})

export default authSlice.reducer
