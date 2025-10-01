import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

  const anotherElement = (
    <h1 style="color:red">AnotherElement</h1>
  )

  const anotherUser="Hitesh Chaudhari"
  const element = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank' },
    "Click me",
    anotherUser
  )

createRoot(document.getElementById('root')).render(
  // <StrictMode>
     <App />,
    element
  /* </StrictMode>, */
)
