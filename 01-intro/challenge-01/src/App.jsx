import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Challenge 01</h1>
      <button className='customClass' onClick={() => open("https://google.com")}>
        Google it!
      </button>
    </>
  )
}

export default App
