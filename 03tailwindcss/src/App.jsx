import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-600 text-black rounded-xl p-4'>What i Learnt Today?
        <p>1.Installing Tailwind css</p>
        <p>2.We went on Dev UI Library</p>
        <p>3.What is props , How to pass it ,use it</p>
        <p>4.How to set default value when no props is passed</p>
      </h1>
     

     <div className='flex gap-4'>
      <Card cardName='First Card' views='1K'/>
      <Card cardName='Second Card' views='2K'/>
      <Card card/>
     </div>
     
  


  
    
 

    </>
  )
}

export default App
