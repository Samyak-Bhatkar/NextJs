'use client'
import React from 'react'
import {useParams} from 'next/navigation'
const page = () => {
  const {social_media} = useParams();
  return (
    <div className='text-8xl text-center'>Parallel Route for {social_media} </div>
  )
}

export default page