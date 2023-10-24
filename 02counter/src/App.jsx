import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter ,seCounter] = useState(15)
  const addValue =() =>{
    seCounter(counter+1)

  }
  
  const removeValue = () =>{
     seCounter(counter-1)
  }
 

  return (
    <>
      
       <h1>chai aur react</h1>
       <h2>counter value: {counter} </h2>

       <button
        onClick={addValue}
       >Add value
        </button>
       <br/>
       <button
       onClick ={removeValue}
       >remove value: {counter}</button>
       <p>fotter: {counter}</p>
    </>
  )
}

export default App
