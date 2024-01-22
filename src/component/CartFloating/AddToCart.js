// components/AddToCart/AddToCart.js
import React, { useState } from "react";

const AddToCart = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const handleCartIconClick = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className='add-to-csart'>
      <div className='cart-icon' onClick={handleCartIconClick}>
        {/* Your cart icon image or SVG goes here */}
        <img src='/path/to/cart-icon.png' alt='Cart Icon' />
      </div>
      {cartVisible && (
        <div className='cart-dropdown'>
          {/* Your cart content goes here */}
          <p>Cart Items...</p>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
