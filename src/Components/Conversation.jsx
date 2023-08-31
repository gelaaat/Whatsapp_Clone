import React, { useEffect } from 'react'
import { CardBody, Spinner } from '@nextui-org/react'
import PropTypes from 'prop-types'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../features/chat/chatActions'
import LoadingConversation from './LoadingConversation'

const Conversation = () => {
  const dispatch = useDispatch()
  // const globalStoreMessages = useSelector(state => state.messages)
  const globalStoreChat = useSelector(state => state.chat)

  useEffect(() => {
    dispatch(getMessages({
      actualChat: globalStoreChat.actualChat
    }))

    // Per començar el scroll a baix de tot
    const conversationView = document.getElementById('conversationView')
    conversationView.scrollTop = conversationView.scrollHeight
  }, [globalStoreChat.actualChat, dispatch])

  return (
    <CardBody id='conversationContainer' className=''>
      {
        globalStoreChat.loadingConversationMessages
          ? <LoadingConversation />
          : <section id='conversationView' className='overflow-y-auto h-full justify-end'>
            {globalStoreChat?.infoActualChat?.messages.map(missatge => {
              return (
                <Message key={missatge._id} date={missatge.date} receiverUser={missatge.receiverUser} transmitterUser={missatge.transmitterUser.username} message={missatge.message} />
              )
            })}
            </section>
      }

    </CardBody>
  )
}

Conversation.propTypes = {
  actualChat: PropTypes.string
}

export default Conversation
