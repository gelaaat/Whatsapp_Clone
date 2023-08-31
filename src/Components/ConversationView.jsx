import React from 'react'
import { Divider, CardHeader, CardFooter } from '@nextui-org/react'
import Conversation from './Conversation'
import InputMessage from './InputMessage'
import ConversationHeader from './ConversationHeader'
import { useSelector } from 'react-redux'

const ConversationView = () => {
  const globalStoreChat = useSelector(state => state.chat)

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
