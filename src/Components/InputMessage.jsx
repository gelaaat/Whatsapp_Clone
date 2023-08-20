import { Button, Input, Spacer } from '@nextui-org/react'
import React from 'react'
import { useSelector } from 'react-redux'

const InputMessage = () => {
  const globalStoreMessages = useSelector(state => state.messages)

  const handleChangeMessage = ({ target }) => {
    const message = target.value
  }

  return (
    <form className='flex grow shrink'>
      <Input
        className='flex grow shrink basis-9/12'
        isDisabled={globalStoreMessages.loadingConversationMessages || globalStoreMessages.error}
        placeholder='Enter your message'
        onChange={handleChangeMessage}
      />

      <Spacer x={3} />
      <Button
        isDisabled={globalStoreMessages.loadingConversationMessages || globalStoreMessages.error}
        color='primary' variant='solid'
      >
        Send
      </Button>
    </form>
  )
}

export default InputMessage
