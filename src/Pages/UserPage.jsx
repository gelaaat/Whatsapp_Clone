import React, { useState, useEffect } from 'react'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import UserHeader from '../Components/UserHeader'
import ChatButton from '../Components/ChatButton'
import ConversationView from '../Components/ConversationView'
import { useDispatch, useSelector } from 'react-redux'
import { setActualChat } from '../features/chat/chatSlice'
import { useNavigate } from 'react-router-dom'

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
  const dispatch = useDispatch()
  const globalStoreUser = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    if (!globalStoreUser.userInfo) {
      navigate('/LogIn')
    }
    console.log(globalStoreUser?.userInfo)
  }, [globalStoreUser, navigate])

  const handleChatView = ({ target }) => {
    console.log(target.id)
    const actualChat = target.id
    dispatch(setActualChat({ actualChat }))
    setActualChat(target.id)
    setOpenConversation(true)
  }

  return (

    <Card className='w-full h-full flex flex-wrap flex-row space-x-10 justify-center p-4 place-content-between'>

      {
        !openConversation
          ? <Card className='w-full md:w-6/12 h-full '>
            <CardHeader>
              <UserHeader />
            </CardHeader>
            <Divider />
            <CardBody className='pt-0'>
              {

                /* globalStoreUser.lastChats?.map(chat => {
                  return (

                    <ChatButton
                      key={chat.id}
                      idChat={chat.id}
                      name={chat.name}
                      lastMessage={chat.lastMessage}
                      handleChatView={handleChatView}
                    />

                  )
                }) */
              }
            </CardBody>
          </Card>
          : <>
            <Card className='max-w-lg h-full hidden lg:flex'>
              <CardHeader>
                <UserHeader />
              </CardHeader>
              <Divider />
              <CardBody className='pt-0'>
                {jsonExemple.map(chat => {
                  return (

                    <ChatButton
                      key={chat.id}
                      idChat={chat.id}
                      name={chat.name}
                      lastMessage={chat.lastMessage}
                      handleChatView={handleChatView}
                    />

                  )
                })}
              </CardBody>
            </Card>
            <Card className='basis-32 shrink grow h-full'>
              <ConversationView />
            </Card>
          </>

      }
    </Card>

  )
}

export default UserPage
