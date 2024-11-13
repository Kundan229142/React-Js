import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="logo">LOGO</div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Career</a>
                <a href="#">Contect</a>        
            </div>
        </div>
    </div>
  )
}

export default Navbar