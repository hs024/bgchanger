import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
 const[color,setColor]=useState("olive")
  return (
    <>
      {/* <h1 className="text-5xl font-bold underline text-center">Hello world!</h1> */}
    <div  className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >

<div className='flex flex-wrap  text-2xl font-bold  fixed justify-center inset-x-2 px-2 py-40'>
  {/* mai hu color change karne wala
   */}
   <div className='flex flex-wrap bg-white gap-4 px-3 py-2 rounded-2xl justify-center m-2'>
    <button className='outline-none px-4  text-white shadow-sm'
    style={{backgroundColor:"red"}}
    onClick={()=>setColor("red")}>Red</button>
    
   </div>
   <div className='flex flex-wrap bg-white gap-4 px-3 py-2 rounded-2xl justify-center m-2'>
    <button className='outline-none px-4  text-white shadow-sm'
    style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
    
   </div>
   <div className='flex flex-wrap bg-white gap-4 px-3 py-2 rounded-2xl justify-center m-2'>
    <button className='outline-none px-4  text-white shadow-sm'
    style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
    
   </div>
</div>
    </div>
    
    
    
    
    </>
  )
}

export default App
