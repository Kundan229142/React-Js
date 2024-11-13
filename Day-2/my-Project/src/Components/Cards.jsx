import React from 'react'
import image from '../assets/Images/n.jpeg'
import './Cards.css'

function Cards() {
  return (
    <div className="product-card">
    <div className="product-image">
        <img src={image} alt="" srcset="" />
    </div>

    <div className="product-title">Sample Product</div>

    <div className="product-content">
      <p>This is a great product that you will love. It has amazing features and comes in various sizes.</p>
    </div>

    <div className="product-price">$19.99</div>

    <button className="btn">Add to Cart</button>
  </div>
  )
}

export default Cards