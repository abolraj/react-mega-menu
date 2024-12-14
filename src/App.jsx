import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MegaMenu from './MegaMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <MegaMenu/>
      </header>
    </>
  )
}

export default App
