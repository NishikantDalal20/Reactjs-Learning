import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color , setColor]=useState("white")

  return (
      <div className='w-full h-screen duration-100'
      style={{backgroundColor:color}}>
        
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'red'}}
            onClick={()=>setColor('red')}
            >Red</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'green'}}
            onClick={()=>setColor('green')}
            >Green</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'blue'}}
            onClick={()=>setColor('blue')}
            >Blue</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'olive'}}
            onClick={()=>setColor('olive')}
            >Olive</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'gray'}}
            onClick={()=>setColor('gray')}
            >Gray</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'yellow',color:'black'}}
            onClick={()=>setColor('yellow')}
            >Yellow</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'pink'}}
            onClick={()=>setColor('pink')}
            >Pink</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'purple'}}
            onClick={()=>setColor('purple')}
            >Purple</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'lavender'  ,color:'black'}}
            onClick={()=>setColor('lavender')}
            >Lavender</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'white',color:'black'}}
            onClick={()=>setColor('white')}
            >White</button>
            <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer'
            style={{backgroundColor:'black'}}
            onClick={()=>setColor('black')}
            >Black</button>
            
            
          </div>
        </div>
      </div>
  )
}

export default App
