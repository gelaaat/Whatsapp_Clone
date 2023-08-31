import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const sendRequestFriend = createAsyncThunk(
  'user/addFriend',
  async ({ username }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/addChat`,
        { username },
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

export const acceptRequestFriend = createAsyncThunk(
  'user/acceptRequest',
  async ({ chatName }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/acceptChatRequest`,
        { chatName },
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
