import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState(15)

  //let counter = 15

  const addValue = () => 
  {
   
   console.log("cliecked " + counter);
   setCounter(counter + 1)
   
  }

  const reduceValue = () =>
  {
    setCounter(counter != 0 ? counter -1 : 1)
    
  }
  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={reduceValue}>Remove value</button>
    </>
  )
}

export default App
