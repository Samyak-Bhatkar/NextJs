import React from 'react'

const page = () => {
  return (
    <div>
        <form action="/submit" method = "POST">
            <input type="text" placeholder = "Enter Your Name"/>
            <button type="submit">Send</button>


        </form>
    </div>
  )
}

export default page