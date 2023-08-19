import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardFooter, Spacer } from '@nextui-org/react'

const Message = ({ receiverUser, transmitterUser, date, message }) => {
  const currentUser = {
    name: 'Arnau'
  }

  return (

    <article className={transmitterUser === currentUser.name ? 'flex justify-end items-end my-2' : 'flex items-start my-2'}>
      <Card className='max-w-fit py-1 px-2 bg-blue-500'>
        {message}
        <CardFooter className={transmitterUser === currentUser.name ? 'flex justify-end items-end py-1 px-1' : 'flex items-start py-1 px-1'}>
          <p className='decoration-white text-xs'>
            {date.slice(-4)}
          </p>
        </CardFooter>
      </Card>
    </article>

  )
}

Message.propTypes = {
  receiverUser: PropTypes.string,
  transmitterUser: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string
}

export default Message
