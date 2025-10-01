import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const [message, setMessage] = useState("")

  const increment=()=>{ 
    if(counter>=20){
      setMessage("You can not increment more than 20")
    }
    else{
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      setCounter((counter)=>counter+1)
      setCounter((counter)=>counter+1)
      setCounter((counter)=>counter+1)
      setCounter((counter)=>counter+1)
      setMessage("")
    }
  }

  const decrement=()=>{ 
    if(counter<=0){
      setMessage("You can not decrement less than 0")
    }
    else{
      setCounter(counter-1)
      setMessage("")
    }
  }

  return (
    <>
      <div>
        <h1>Counter value is {counter}</h1>
        <button onClick={increment}>Increment</button>
        <br />
        <button onClick={decrement}>Decrement</button>
      </div>
      {message && <p style={{color: "red"}}>{message}</p>}


      <div>
        <h1>What I Learnt today?</h1>
        <p>Why hooks in JS</p>
        <p>If there is a changes in UI React will handle it</p>
        <p>✅ What is Babel in JavaScript?</p>
        <p>useState Hook</p>
        <h1>One interview Question
          <p>What will happen when we write setCounter function 4 times , will it increment 4 times when we click once?</p>
          <p>Answer  is No ,because setCounter ka jo last statement hai only wahi run hota hai ye or sab ko overwrite kar deta ha</p>
          <p>But to make when click once increase 4 times , we will use call back function in setCounter</p>
        </h1>
      </div>
    </>
  )
}

export default App
