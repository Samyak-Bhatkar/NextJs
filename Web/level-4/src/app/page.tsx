import React, { useRef } from 'react'

const page = () => {
  const input = useRef<HTMLInputElement>(null)
const handleSubmit=(e:React.SyntheticEvent)=>{
  e.preventDefault();
}
const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault(); 
   
}
const handleChange = (e:React.ChangeEvent)=>{
  e.preventDefault(); 
   
}
  return (
    <div>

<form action="" onSubmit={handleSubmit}>
<input type="text" ref={input}/>
<button onClick={handleClick} onChange={handleChange}>button</button>

</form>



    </div>
  )
}

export default page