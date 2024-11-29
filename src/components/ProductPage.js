import React from 'react';
import './ProductPage.css';
import img1 from './image1.jpg';
function ProductPage() {
  return (
    <div>
      <div className="product-image">
        <img className='image' src={img1} alt="Wireless Bluetooth Headset" />
      </div>
      <div className="product-info">
        <h1>Wireless Bluetooth Headset</h1>
        <p>Shipped in 3-4 days</p>
        <p className="price">$35.99</p>
        <div className="buttons">
          <button className="add-to-cart">
            <span className="icon"></span>
            Add to Cart
          </button>
          <button className="buy-now">
            <span className="icon"></span>
            Buy Now
          </button>
        </div>
      </div>
      <div className="product-image">
        <img className='image' src={img1} alt="Wireless Bluetooth Headset" />
      </div>
      <div className="product-info">
        <h1>Wireless Bluetooth Headset</h1>
        <p>Shipped in 3-4 days</p>
        <p className="price">$35.99</p>
        <div className="buttons">
          <button className="add-to-cart">
            <span className="icon"></span>
            Add to Cart
          </button>
          <button className="buy-now">
            <span className="icon"></span>
            Buy Now
          </button>
        </div>
      </div>
      <div className="product-image">
        <img className='image' src={img1} alt="Wireless Bluetooth Headset" />
      </div>
      <div className="product-info">
        <h1>Wireless Bluetooth Headset</h1>
        <p>Shipped in 3-4 days</p>
        <p className="price">$35.99</p>
        <div className="buttons">
          <button className="add-to-cart">
            <span className="icon"></span>
            Add to Cart
          </button>
          <button className="buy-now">
            <span className="icon"></span>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;