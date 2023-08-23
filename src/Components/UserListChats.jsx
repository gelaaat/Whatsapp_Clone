import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { CardBody } from '@nextui-org/react'

const UserListChats = () => {
  const globalStoreChats = useSelector(state => state.chat)
  const globalStoreAuth = useSelector(state => state.auth)

  return (
    <CardBody className='pt-0'>
      {
        !globalStoreChats.searchActive ?
          globalStoreUser.lastChats?.map(chat => {
            return (

              <ChatButton
                key={chat.id}
                idChat={chat.id}
                name={chat.name}
                lastMessage={chat.lastMessage}
                handleChatView={handleChatView}
              />

            )
          })
          :
          globalStoreAuth?.chats?.filter(chat => {
            return (
              
            )
          })
      }
    </CardBody>
  )
}

export default UserListChats
