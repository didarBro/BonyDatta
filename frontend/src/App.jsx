import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home'
import Portfolio from './pages/portfolio/Portfolio'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <Portfolio/>

    </>
  )
}

export default App
