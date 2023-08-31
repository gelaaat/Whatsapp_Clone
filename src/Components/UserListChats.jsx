import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { CardBody } from '@nextui-org/react'
import ChatButton from './ChatButton'

const UserListChats = ({ handleChatView }) => {
  const globalStoreChats = useSelector(state => state.chat)
  const globalStoreAuth = useSelector(state => state.auth)

  useEffect(() => {
    console.log('renderitzo llista de chats')
    console.log(globalStoreAuth?.userInfo?.lastChats)
  }, [globalStoreAuth?.userInfo?.lastChats])

  return (
    <CardBody className='pt-0'>
      {
        !globalStoreChats.searchActive
          ? globalStoreAuth?.userInfo?.lastChats?.map(chat => {
            return (
              <ChatButton
                key={chat._id}
                idChat={chat._id}
                name={chat?.users[0]?.username === globalStoreAuth.userInfo.username ? chat.users[1].username : chat.users[0].username}
                // lastMessage={chat.lastMessage}
                handleChatView={handleChatView}
              />

            )
          })
          : globalStoreAuth?.userInfo?.chats.map(chat => {
            return (
              <ChatButton
                key={`${chat.users[0]} + ${chat.users[1]}`}
                idChat={chat._id}
                name={chat.users[0].username === globalStoreAuth.userInfo.username ? chat.users[1].username : chat.users[0].username}
                // lastMessage={chat.lastMessage}
                handleChatView={handleChatView}
              />
            )
          })

      }
    </CardBody>
  )
}

export default UserListChats
