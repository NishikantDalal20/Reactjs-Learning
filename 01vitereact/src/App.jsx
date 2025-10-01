
import Chai from "./chai"
function MyApp(){
  return(
    <>
      <h1>Custom React function that we written in App.jsx</h1>
    </>
  )
}

function App() {
  

  const name="Nishikant"
  return (
    <>
    <h1>Day -01</h1>
      <p>1st Day of React | Nishikant Dalal |
        1. react , react-dom and react native
        2. npx create-react-app basic   VS  npm create vite@latest
        3. What is Vite and why we need it
        4. What is npm 
        5.Installation
        = a.npm create vite@latest
          b.select react,js
          c.npm i=- to install node modules
          d.npm run dev
      </p>
      <br/>
      <h1>Day -02</h1>
      <h5>React core = 1.React DOM - Implementation of React for Web 2.React Native - Implementation of React for Mobile</h5>
      <p>Difference between create-react-app and vite , In create-react-app we can create component .js and .jsx also and we have to use function name starts with capital letter , but in vite we have to use function name starts with captial letter and we have to write .jsx only , And Note that in both cases we have to return function in single element for that we can use div tag or we can wrap it in fragments</p>
      <h5>React create its own DOM and compare it with browser DOM</h5>
      <h5>It is called SPA(Single Page Application) bcoz in index.html it has only one tag that it div with id root</h5>
      <h5>At the end Browser only knows HTML,CSS,JSS so browser converts Reactjs in to these things.</h5>
      <h5>JSX is way of writing HTML in JS</h5>
      <h5>Rules
        <ul>
          <li>Function name should starts with capital letter</li>
          <li>File name extension is allowed only .jsx</li>
          <li>Return function only in single element</li>
        </ul>

      </h5>
      <h5>In this lecture we created one component and tried to add it in another component</h5>
      <h5>We understood folder structure
        <p>What is package.json? , What is index.html? , </p>
      </h5>

      <Chai/>







      <h1>Day -03</h1>
      <p>We can create function in App.jsx also</p>
      <p>Variable creation </p>
      <p>Evaluted Expression </p>
      <p>React convert into tree structure and then inject it</p>
      <p>React.createElement is used to create element</p>
      <p>Babble inject it</p>
      <p>✔️ Inside {} in JSX, you can only write expressions (which return a value), not statements.</p>
      
       <p>Evaluated Expression</p>
        <p>We can write function and can access using App tag or using App then parenthesis</p>
        <p>We can create variable</p>
        <p>React.createElement</p>

      <MyApp/>
      {/* MyApp()
      anotherElement */}
      <h1>My name is {name}</h1>
    </>
  )
}

export default App
