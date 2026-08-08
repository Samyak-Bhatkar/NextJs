'use client';
import { useParams } from 'next/navigation';
import React from 'react'
import Image from 'next/image'
import goldmines from '@/assets/goldmines.png'
import wamida from '@/assets/wamida.png'
import shemaroo from '@/assets/shemaroo.png'

const page =  ({params}) => {

  const {social_media} = useParams();
  
  return (
    <div className='h-full  bg-amber-300'>
      <div className='text-8xl text-center '>{social_media}</div>
    <div className='text-center mt-10'>You can use this platform to contact us. Comment To Cinema To Chitrapat</div>
<div className='flex justify-center'>{social_media=="Youtube" && <Image src={goldmines} width={400} height={400} alt="Youtube Image"/>}</div>
<div className='flex justify-center'>{social_media=="Twitter" && <Image src={wamida} width={400} height={400} alt="Youtube Image"/>}</div>

<div className='flex justify-center'>{social_media=="Linkedin" && <Image src={shemaroo} width={400} height={400} alt="Youtube Image"/>}</div>


    </div>
  )
}

export default page