import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'
import Home from './Pages/Home'
import data from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home data={data}></Home>
    </>
  )
}

export default App
