import { Button, Input, Spacer } from '@nextui-org/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessage } from '../features/chat/chatActions'
import { setLastChats } from '../features/auth/authActions'

const InputMessage = () => {
  const [message, setMessage] = useState('')
  const globalStoreChat = useSelector(state => state.chat)
  const dispatch = useDispatch()

  const handleChangeMessage = ({ target }) => {
    const message = target.value
    console.log(message)
    setMessage(message)
  }

  const handleSubmitSendMessage = async (e) => {
    e.preventDefault()
    console.log(message)
    console.log('enviant missatgess')
    if (message.length > 0) {
      await dispatch(sendMessage({
        message,
        chatId: globalStoreChat.actualChat
      }))
      dispatch(setLastChats({
        lastChatId: globalStoreChat.actualChat
      }))
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmitSendMessage} className='flex grow shrink items-center m-1'>
      <Input
        className='flex grow shrink basis-9/12'
        isDisabled={globalStoreChat.loadingConversationMessages || globalStoreChat.errorMessages}
        placeholder='Enter your message'
        onChange={handleChangeMessage}
        value={message}
      />

      <Spacer x={3} />
      <Button
        isDisabled={globalStoreChat.loadingConversationMessages || globalStoreChat.errorMessages}
        color='primary' variant='solid' type='submit'
      >
        Send
      </Button>
    </form>
  )
}

export default InputMessage
