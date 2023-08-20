import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser, logout } from './authActions'

// Implementar localstorage en el initial state

const initialStateOnLocalStorage = JSON.parse(window.localStorage.getItem('userInfo'))

const initialState = {
  loadingUser: false,
  userInfo: initialStateOnLocalStorage || null,
  userSessionId: null,
  errorUser: null,
  successUserSingIn: false,
  successUserLogIn: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loadingUser = true
      state.errorUser = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loadingUser = false
      state.successUserSingIn = true
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
      state.successUserSingIn = false
      window.localStorage.removeItem('userInfo')
    },
    [logout.rejected]: (state, action) => {
      state.loadingUser = false
      state.errorUser = action
    }

  }
})

export default authSlice.reducer
