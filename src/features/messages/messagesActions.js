import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
/*
export const getMessages = createAsyncThunk(
  'messages/getMessages',
  async ({ actualChat }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      console.log('enviant getMessages amb id', actualChat)

      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/getChatMessages/${actualChat}`,
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
*/
