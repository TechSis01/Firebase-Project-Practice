import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './assets/Components/Login'
import Questions from './assets/Components/Questions'
// imported createContext from react,and created the context variable that will hold all my global states
export const globalVariable = createContext()
function App() {
  const [display, setDisplay] = useState('queen')
  console.log(display)
  return (
    // the Provider is a keyword that will provide your global states to all the components
    // I set the the global states in the App components because I want the state to be available
    // to all my components easily without any form of nesting
    
      <div>
         <Login firstname = {display}/> 
          <Questions />
      </div>
  )
}

export default App
