import { useState,useCallback } from "react";



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charactersAllowed ,setCharAllowed] = useState(false)
  const[password,setPassword] = useState("")


  


  const passwordGenerator = useCallback( () => 
    {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str += "0123456789"
      if(charactersAllowed) str += "!£$%^&*()@:~}{"

      for (let i = 1; i <= array.length; i++){
        let char = Math.floor(Math.random() * str.length + 1)
        
        pass = str.charAt(char)
       
      }
      setPassword(pass)
    },[length,numberAllowed,charactersAllowed,setPassword])



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3"> Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

         <input type="text"
         value={password}
         className="outline-none w-full py-1 px-3"
         placeholder="password"
         readOnly
         />

         <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text">
          
        </div>
      </div>
    </>
  );
}

export default App;
