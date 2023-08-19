import React, { useEffect } from 'react'
import { CardBody, Spacer } from '@nextui-org/react'
import PropTypes from 'prop-types'
import Message from './Message'

const Conversation = ({ actualChat }) => {
  useEffect(() => {
    /* fetch(`http://localhost:8000/${actualChat}`, {
      method: 'GET',
      body: {

      }
    }) */
    console.log('renderitzo conversa', actualChat)
  }, [actualChat])

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
    <CardBody className=''>
      <section className='overflow-y-auto h-full justify-end'>
        {missatges.map(missatge => {
          return (
            <Message key={missatge.id} date={missatge.date} receiverUser={missatge.receiverUser} transmitterUser={missatge.transmitterUser} message={missatge.message} />
          )
        })}
      </section>
    </CardBody>
  )
}

Conversation.propTypes = {
  actualChat: PropTypes.string
}

export default Conversation
