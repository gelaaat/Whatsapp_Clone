import React from 'react'
import { Card, CardHeader, CardFooter, Divider, CardBody, Spinner } from '@nextui-org/react'
import ConversationHeader from './ConversationHeader'

const LoadingConversation = () => {
  return (
    <section id='loadingMessages' className='h-full flex items-center justify-center'>
      <Spinner size='lg' label='Loading' />
    </section>
  )
}

export default LoadingConversation
