import React, { useEffect } from 'react'
import { Divider, User, Spacer, Button } from '@nextui-org/react'
import PropTypes from 'prop-types'

const ChatButton = ({ name, lastMessage, handleChatView, idChat }) => {
  useEffect(() => {
    console.log(idChat)
  }, [])

  return (
    <button className='text-left' id={idChat} onClick={handleChatView}>
      <User
        name={name}
        description={lastMessage}
        avatarProps={{
          src: ''
        }}
        className='h-14'
      />
      <Divider />
    </button>
  )
}

ChatButton.propTypes = {
  name: PropTypes.string,
  lastMessage: PropTypes.string,
  handleChatView: PropTypes.func,
  idChat: PropTypes.string
}

export default ChatButton
