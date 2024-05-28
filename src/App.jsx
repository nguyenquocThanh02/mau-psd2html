import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import image from './assets/The_Playground.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={image} alt="" style={{width: '100%'}}/>
    </>
  )
}

export default App
