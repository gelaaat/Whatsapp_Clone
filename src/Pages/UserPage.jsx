import React, { useState, useEffect } from 'react'
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import UserHeader from '../Components/UserHeader'
import Conversation from '../Components/Conversation'
import ConversationHeader from '../Components/ConversationHeader'
import InputMessage from '../Components/InputMessage'
import ChatButton from '../Components/ChatButton'
import SkeletonConversation from '../Components/SkeletonConversation'

const UserPage = () => {
  const jsonExemple = [
    {
      id: 1,
      name: 'Paula',
      lastMessage: 'Hola'
    },
    {
      id: 2,
      name: 'Kairo',
      lastMessage: 'Ei que tal'
    }
  ]

  const [openConversation, setOpenConversation] = useState(false)
  const [actualChat, setActualChat] = useState(0)

  useEffect(() => {
    console.log('renderitzo userPage')
  }, [actualChat])

  const handleChatView = ({ target }) => {
    console.log(target.id)
    setActualChat(target.id)
    setOpenConversation(true)
  }

  return (

    <Card className='w-full h-full flex flex-wrap flex-row space-x-10 justify-center p-4 place-content-between'>
      <Card className='max-w-md h-full hidden lg:flex'>
        <CardHeader>
          <UserHeader />
        </CardHeader>
        <Divider />
        <CardBody className='pt-0'>
          {jsonExemple.map(chat => {
            return (

              <ChatButton key={chat.id} idChat={chat.id} name={chat.name} lastMessage={chat.lastMessage} handleChatView={handleChatView} />

            )
          })}
        </CardBody>
      </Card>

      <Card className='basis-32 shrink grow h-full'>
        <CardHeader>
          <ConversationHeader />
        </CardHeader>
        <Divider />
        {
          openConversation ? <Conversation actualChat={actualChat} /> : <SkeletonConversation />
        }
        <Divider />
        <CardFooter>
          <InputMessage />
        </CardFooter>
      </Card>

    </Card>

  )
}

export default UserPage
