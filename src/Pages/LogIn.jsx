import React, { useState, useEffect } from 'react'
import { Card, Input, Button, Spacer, CardHeader, Divider, CardBody } from '@nextui-org/react'
import { EyeFilledIcon } from '../Components/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../Components/EyeSlashIcon'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/auth/authActions'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const dispatch = useDispatch()
  const globalStoreUser = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (globalStoreUser?.successUserLogIn) {
      navigate('/UserPage', { replace: true })
    }
  }, [globalStoreUser?.successUserLogIn, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await dispatch(loginUser({
      username,
      password
    }))

    console.log(data)
  }

  const handleChangeUser = ({ target }) => {
    setUsername(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  return (

    <form onSubmit={handleSubmit} className='w-2/4 felx justify-center items-center'>
      <Card className='w-full p-4'>
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
            className=''
            onChange={handleChangePassword}
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
