import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Login/Signup/Signup'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Signup></Signup>
    </>
  )
}

export default App
