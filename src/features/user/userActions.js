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
        'http://localhost:8000/api/addChat',
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
  async ({ contactId }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      const { data } = await axios.post(
        'http://localhost:8000/api/acceptContactRequest',
        { contactId },
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
