import React, { useEffect } from 'react'
import { Divider, CardHeader, CardFooter } from '@nextui-org/react'
import Conversation from './Conversation'
import InputMessage from './InputMessage'
import ConversationHeader from './ConversationHeader'
import { useSelector } from 'react-redux'
import { socket } from '../socket'

const ConversationView = () => {
  const globalStoreChat = useSelector(state => state.chat)

  useEffect(() => {
    socket.on('connect', () => {
      console.log('socket connected')
    })

    socket.on('disconnect', () => {
      console.log('socket disconnected')
    })

    socket.on('message', (scoekt) => {
      console.log(socket)
    })

    socket.connect()

    return () => {
      socket.off('connect', () => {
        console.log('socket connected')
      })

      socket.off('disconnect', () => {
        console.log('socket disconnected')
      })
      socket.disconnect()
    }
  }, [])

  return (
    <>
      <CardHeader>
        <ConversationHeader />
      </CardHeader>
      <Divider />
      <Conversation />
      <Divider />
      <CardFooter className='flex items-center overflow-none'>
        <InputMessage />
      </CardFooter>
    </>
  )
}

export default ConversationView
