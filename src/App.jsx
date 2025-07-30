import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar></Navbar>
      <main className='max-w-7xl mx-auto p-4'>
        <Outlet></Outlet>
      </main>
   
    </div>
  )
}

export default App
