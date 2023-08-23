import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      console.log('fent el dispatch de registerUser')
      console.log(`${import.meta.env.VITE_BACKEND_URL}/api/register-local`)
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/register-local`,
        { username, email, password },
        config
      )

      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        console.log(error, 'entro al error del else')
        return rejectWithValue(error.message)
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login-local`,
        { username, password },
        config
      )

      return data
    } catch (error) {
      console.log('entro al error del login')
      console.log(error)

      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async ({}, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/logout`,
        config
      )

      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
