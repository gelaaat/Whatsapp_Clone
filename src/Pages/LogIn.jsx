import React, { useState, useEffect } from 'react'
import { Card, Input, Button, Spacer, CardHeader, Divider, CardBody } from '@nextui-org/react'
import { EyeFilledIcon } from '../Components/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../Components/EyeSlashIcon'

const LogIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleSubmit = (e) => {

  }

  const handleChangeUser = ({ target }) => {
    setUsername(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  return (

    <form action='' className='w-2/4'>
      <Card className='max-w-md p-4'>
        <CardHeader>
          <h1 className='text-2xl font-bold'>
            Log In
          </h1>
        </CardHeader>
        <Divider />
        <CardBody>
          <Input
            clearable
            bordered
            fullWidth
            size='lg'
            placeholder='Username'
            aria-label='Username'
            pattern='^[a-zA-Z0-9_.-]*$'
            required
            onChange={handleChangeUser}
          />
          <Spacer y={2} />
          <Input
            label='Password'
            variant='bordered'
            placeholder='Enter your password'
            endContent={
              <button className='focus:outline-none' type='button' onClick={toggleVisibility}>
                {isVisible
                  ? (
                    <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                    )
                  : (
                    <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                    )}
              </button>
              }
            type={isVisible ? 'text' : 'password'}
            className='max-w-md'
          />
          <Spacer y={2} />
        </CardBody>
        <Spacer y={2} />
        <Button type='submit' color='primary'>Log In</Button>
      </Card>
    </form>

  )
}

export default LogIn
