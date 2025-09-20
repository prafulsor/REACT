import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const [counter,setCounter] = useState(15)
  

   //let counter = 15;


   const AddValue = () => 
   {
    setCounter(counter + 1)
   }

   const removeValue = () => 
   {
    setCounter(counter - 1)
   }

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={AddValue}>Add Value {counter}</button>
          <br />
       <button onClick={removeValue}>Remove Value {counter}</button>
   </>
  )
}

export default App
