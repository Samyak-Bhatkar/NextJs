import React from 'react'

interface ButtonProps{
data:string,
action:()=>void;
}
const Button=({data,action}:ButtonProps) => {
  return (
    <div className='text-5xl bg-red-400 justify-center items-center h-screen flex'>Button {data}</div>
  )
}

export default Button