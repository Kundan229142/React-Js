import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Props from './Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Props message = "tech"/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>


    </>
  )
}

export default App
