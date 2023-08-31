import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getListOfUserChats = createAsyncThunk(
  'chat/getListOfUserChats',
  async ({ actualChat }, { rejectedWithValue }) => {
    const config = {

    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/getListOfUserChats`,
      config
    )
  }
)

export const getMessages = createAsyncThunk(
  'chat/getMessages',
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

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  async ({ message, chatId }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }

      console.log('enviant missatge', message)

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sendMessage`,
        { message, chatId },
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
