import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Career</a>
          <a href="#">Contect</a>
          <a href="#">Demo</a>
        </div>
      </div>
    </>
  )
}

export default Navbar