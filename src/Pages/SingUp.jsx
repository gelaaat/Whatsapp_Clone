import React, { useState, useEffect } from 'react'
import { Card, Input, Button, Spacer, CardHeader, Divider, CardBody } from '@nextui-org/react'
import { EyeFilledIcon } from '../Components/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../Components/EyeSlashIcon'

const SingUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [secondPassword, setSecondPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)

  useEffect(() => {
    console.log('renderitzo SignIn')
  }, [])

  const handleSubmit = (e) => {

  }

  const handleChangeUser = ({ target }) => {
    setUsername(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handleChangeSecondPassword = ({ target }) => {
    setSecondPassword(target.value)
  }

  return (

    <form action='' className='w-2/4'>
      <Card className='max-w-md p-4'>
        <CardHeader>
          <h1 className='text-2xl font-bold'>
            Sign Up
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
            clearable
            bordered
            fullWidth
            size='lg'
            placeholder='you@example.com'
            aria-label='Email'
            required
            pattern='^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$'
            onChange={handleChangeEmail}

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
        </CardBody>
        <Spacer y={2} />
        <Button type='submit' color='primary'>Sign in</Button>
      </Card>
    </form>

  )
}

export default SingUp
