import { Button, Input, Spacer } from '@nextui-org/react'
import React from 'react'

const InputMessage = () => {
  const handleChangeMessage = ({ target }) => {
    const message = target.value
  }

  return (
    <form className='flex grow shrink'>
      <Input className='flex grow shrink basis-9/12' placeholder='Enter your message' onChange={handleChangeMessage} />
      <Spacer x={3} />
      <Button color='primary' variant='solid'>
        Send
      </Button>
    </form>
  )
}

export default InputMessage
