import React, { useEffect, useState } from 'react'
import { Card, CardBody } from '@nextui-org/react'
import MainBanner from '../svg/mainBanner'

const Home = () => {
  const [title, setTitle] = useState('')
  const [countAnimation, setCountAnimation] = useState(0)
  const [countAux, setCountAux] = useState(0)

  const textsForTitle = [
    'Chat with your friends!',
    'Around the world!'
  ]

  useEffect(() => {
    setInterval(() => {
      setTitle(textsForTitle[countAux].slice(0, countAnimation))
      setCountAnimation(prev => prev + 1)
    }, 500)
    console.log(title)
  }, [])

  return (
    <Card className='w-full h-full'>
      <CardBody className='flex flex-row grow shrink justify-between'>
        <Card className='w-2/4 m-2 p-2'>
          <CardBody>

            <p>{title}</p>

          </CardBody>
        </Card>
        <Card className='w-2/4 m-2 p-2'>
          <CardBody>
            <MainBanner />
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
}

export default Home
