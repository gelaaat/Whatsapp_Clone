import React, { useEffect } from 'react'
import { CardBody, Spinner } from '@nextui-org/react'
import PropTypes from 'prop-types'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../features/messages/messagesActions'
import LoadingConversation from './LoadingConversation'

const Conversation = ({ actualChat }) => {
  const dispatch = useDispatch()
  const globalStoreMessages = useSelector(state => state.messages)
  console.log(globalStoreMessages)

  useEffect(() => {
    dispatch(getMessages({
      actualChat: actualChat.id
    }))
    console.log('renderitzo conversa', actualChat)

    // Per començar el scroll a baix de tot
    const conversationView = document.getElementById('conversationView')
    conversationView.scrollTop = conversationView.scrollHeight
  }, [actualChat?.id, dispatch])

  const missatges = [
    {
      id: 1,
      receiverUser: 'Arnau',
      transmitterUser: 'Paula',
      date: '01-08-2001 00:01',
      message: 'Hola que tal'
    },
    {
      id: 2,
      receiverUser: 'Paula',
      transmitterUser: 'Arnau',
      date: '01-08-2001 00:02',
      message: 'Estic molt be pero bueno he de remplenar el text i tu com estas?'
    },
    {
      id: 3,
      receiverUser: 'Paula',
      transmitterUser: 'Arnau',
      date: '01-08-2001 00:02',
      message: 'Estic molt be pero bueno he de remplenar el text i tu com estas?'
    },
    {
      id: 4,
      receiverUser: 'Paula',
      transmitterUser: 'Arnau',
      date: '01-08-2001 00:02',
      message: 'Estic molt be pero bueno he de remplenar el text i tu com estas?'
    },
    {
      id: 5,
      receiverUser: 'Paula',
      transmitterUser: 'Arnau',
      date: '01-08-2001 00:02',
      message: 'Estic molt be pero bueno he de remplenar el text i tu com estas?'
    },
    {
      id: 6,
      receiverUser: 'Paula',
      transmitterUser: 'Arnau',
      date: '01-08-2001 00:02',
      message: 'Estic molt be pero bueno he de remplenar el text i tu com estas?'
    },
    {
      id: 7,
      receiverUser: 'Paula',
      transmitterUser: 'Arnau',
      date: '01-08-2001 00:02',
      message: 'Estic molt be pero bueno he de remplenar el text i tu com estas?'
    },
    {
      id: 8,
      receiverUser: 'Paula',
      transmitterUser: 'Arnau',
      date: '01-08-2001 00:02',
      message: 'Estic molt be pero bueno he de remplenar el text i tu com estas?'
    }
  ]

  return (
    <CardBody id='conversationContainer' className=''>
      {
        globalStoreMessages.loadingConversationMessages
          ? <LoadingConversation />
          : <section id='conversationView' className='overflow-y-auto h-full justify-end'>
            {missatges.map(missatge => {
              return (
                <Message key={missatge.id} date={missatge.date} receiverUser={missatge.receiverUser} transmitterUser={missatge.transmitterUser} message={missatge.message} />
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
