import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardFooter } from '@nextui-org/react'

const Message = ({ receiverUser, transmitterUser, date, message }) => {
  const globalStoreAuth = useSelector(state => state.auth)

  useEffect(() => {
    console.log(transmitterUser, receiverUser)
  }, [])

  return (

    <article className={transmitterUser === globalStoreAuth.userInfo.username ? 'flex justify-end items-end my-2' : 'flex items-start my-2'}>
      <Card className='max-w-xs py-2 px-2 bg-blue-500 sm:max-w-md'>
        {message}
        <CardFooter className={transmitterUser === globalStoreAuth.userInfo.username ? 'flex justify-end items-end py-1 px-1' : 'flex items-start py-1 px-1'}>
          <p className='decoration-white text-xs'>
            {date.slice(0, 5)}
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
