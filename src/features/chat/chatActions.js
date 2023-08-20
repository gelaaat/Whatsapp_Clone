import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getListOfUserChats = createAsyncThunk(
  'chat/getListOfUserChats',
  async ({ actualChat }, { rejectedWithValue }) => {
    const config = {

    }

    const { data } = await axios.get(
      'http://localhost:8000/chat/getListOfUserChats',
      config
    )
  }
)
