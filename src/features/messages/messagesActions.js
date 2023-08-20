import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async ({ actualChat }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
        params: {

        }
      }

      const { data } = await axios.get(
        'http://localhost:8000/api/messages/getMessages',
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
