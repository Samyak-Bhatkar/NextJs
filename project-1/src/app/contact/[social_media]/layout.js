import React from 'react'

const citylayout = ({children , info}) => {
  return (
    <div className = 'flex '>
        <div className='w-1/2'>{children}</div>
        <div className='w-1/2 border-2'>{info}</div>
    </div>
  )
}

export default citylayout