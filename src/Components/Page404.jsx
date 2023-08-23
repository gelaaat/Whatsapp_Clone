import React from 'react'
import SvgPageNotFound from './svgPageNotFound'
import { Card } from '@nextui-org/react'

export const Page404 = () => {
  return (
    <Card className='flex items-center justify-center w-full h-full'>
      <h1 className='z-10 absolute top-10'>It seems that you have lost yourself in space</h1>
      <SvgPageNotFound className='z-0 relative !w-8/12 h-auto grow shrink max-w-md' />
    </Card>
  )
}
