import React, { useState } from 'react'
import Page from './Components/Page'
import Decrement from './Components/Decrement'
import Increment from './Components/Increment'
import Result from './Components/Result'
import { Routes,Route, Link } from "react-router-dom";

const clickhere = () => {
  return <div>Button Clicked</div>
}




function App() {

  const [count, setCount] = useState(0)
  return (

    <>

      {/* how to pass values and functions */}
      {/* <Page val1 = {1} val2 = {2} val3 = {3} clickhere = {clickhere}/> */}
      {/* {Page(4,5,6,clickhere)} */}


      {/* Create counter using setstate */}
      {/* <Decrement count={count} setCount={setCount} />
      <Increment count={count} setCount={setCount} />
      <Result results={count} /> */}
      
      
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/Decrement"}>Decrement </Link>
        <Link to={"/Increment"}>Increment </Link>
        <Link to={"/Result"}>Result</Link>
      </nav>
      <Routes>
        <Route path='/Decrement' element={<Decrement count={count} setCount={setCount} />} />
        <Route path='/Increment' element={<Increment count={count} setCount={setCount} />} />
        <Route path='/Result' element={<Result results={count} />} />
      </Routes>

      
    </>

  )
}

export default App