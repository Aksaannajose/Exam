import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuctionApp from './components/crud/crud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AuctionApp />
     
    </>
  )
}

export default App
