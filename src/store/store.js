import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/authSlice'
import messagesSlice from '../features/messages/messagesSlice'
import chatSlice from '../features/chat/chatSlice'
import userSlice from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    messages: messagesSlice,
    chat: chatSlice,
    user: userSlice
  },
  devTools: true // Canviar quan estem a producció, mirar-se lo de .env.local
})

export default store
