// components/AddToCart.js
"use client";
import React, { useState, useRef, useEffect } from "react";
import addToCartImg from "../../../public/addcart.png";
import addToCartImgOne from "../../../public/addcartone.png";
import addToCartImgTwo from "../../../public/addcartTwo.png";

const AddToCart = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const cartRef = useRef(null);

  const handleCartIconClick = () => {
    setCartVisible(!cartVisible);
  };

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setCartVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className='add-to-cart' ref={cartRef}>
      <div className='cart-icon' onClick={handleCartIconClick}>
        <p className='view-cart-floating'>View Cart</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          class='bi bi-cart-check'
          viewBox='0 0 16 16'>
          <path d='M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z' />
          <path d='M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0' />
        </svg>
      </div>
      {cartVisible && (
        <div className='cart-dropdown'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
              <div className='Add-to-cart-div'>
                <div className='floating-add-cart-img-div'>
                  <img
                    className='floating-add-cart-img'
                    src={addToCartImg.src}
                    alt=''
                  />
                  <div className='cart-icons'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'>
                      <g clip-path='url(#clip0_138_1468)'>
                        <path
                          d='M8.11299 0.562439C3.95002 0.562439 0.563477 3.94898 0.563477 8.11195C0.563477 12.2749 3.95002 15.6615 8.11299 15.6615C12.276 15.6615 15.6625 12.2749 15.6625 8.11195C15.6625 3.94898 12.276 0.562439 8.11299 0.562439Z'
                          fill='#F44336'
                        />
                        <path
                          d='M10.8932 10.0024C11.1391 10.2485 11.1391 10.646 10.8932 10.8921C10.7705 11.0148 10.6095 11.0764 10.4483 11.0764C10.2873 11.0764 10.1262 11.0148 10.0035 10.8921L8.11304 9.00149L6.22256 10.8921C6.09987 11.0148 5.93883 11.0764 5.77778 11.0764C5.61662 11.0764 5.45558 11.0148 5.3329 10.8921C5.08695 10.646 5.08695 10.2485 5.3329 10.0024L7.2235 8.11195L5.3329 6.22146C5.08695 5.9754 5.08695 5.57786 5.3329 5.3318C5.57896 5.08585 5.9765 5.08585 6.22256 5.3318L8.11304 7.2224L10.0035 5.3318C10.2496 5.08585 10.6471 5.08585 10.8932 5.3318C11.1391 5.57786 11.1391 5.9754 10.8932 6.22146L9.00259 8.11195L10.8932 10.0024Z'
                          fill='#FAFAFA'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_138_1468'>
                          <rect
                            width='15.099'
                            height='15.099'
                            fill='white'
                            transform='translate(0.563477 0.562439)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className='floating-add-cart-img-div'>
                  <img
                    className='floating-add-cart-img'
                    src={addToCartImgOne.src}
                    alt=''
                  />
                  <div className='cart-icons'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'>
                      <g clip-path='url(#clip0_138_1468)'>
                        <path
                          d='M8.11299 0.562439C3.95002 0.562439 0.563477 3.94898 0.563477 8.11195C0.563477 12.2749 3.95002 15.6615 8.11299 15.6615C12.276 15.6615 15.6625 12.2749 15.6625 8.11195C15.6625 3.94898 12.276 0.562439 8.11299 0.562439Z'
                          fill='#F44336'
                        />
                        <path
                          d='M10.8932 10.0024C11.1391 10.2485 11.1391 10.646 10.8932 10.8921C10.7705 11.0148 10.6095 11.0764 10.4483 11.0764C10.2873 11.0764 10.1262 11.0148 10.0035 10.8921L8.11304 9.00149L6.22256 10.8921C6.09987 11.0148 5.93883 11.0764 5.77778 11.0764C5.61662 11.0764 5.45558 11.0148 5.3329 10.8921C5.08695 10.646 5.08695 10.2485 5.3329 10.0024L7.2235 8.11195L5.3329 6.22146C5.08695 5.9754 5.08695 5.57786 5.3329 5.3318C5.57896 5.08585 5.9765 5.08585 6.22256 5.3318L8.11304 7.2224L10.0035 5.3318C10.2496 5.08585 10.6471 5.08585 10.8932 5.3318C11.1391 5.57786 11.1391 5.9754 10.8932 6.22146L9.00259 8.11195L10.8932 10.0024Z'
                          fill='#FAFAFA'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_138_1468'>
                          <rect
                            width='15.099'
                            height='15.099'
                            fill='white'
                            transform='translate(0.563477 0.562439)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className='floating-add-cart-img-div'>
                  <img
                    className='floating-add-cart-img'
                    src={addToCartImgTwo.src}
                    alt=''
                  />
                  <div className='cart-icons'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'>
                      <g clip-path='url(#clip0_138_1468)'>
                        <path
                          d='M8.11299 0.562439C3.95002 0.562439 0.563477 3.94898 0.563477 8.11195C0.563477 12.2749 3.95002 15.6615 8.11299 15.6615C12.276 15.6615 15.6625 12.2749 15.6625 8.11195C15.6625 3.94898 12.276 0.562439 8.11299 0.562439Z'
                          fill='#F44336'
                        />
                        <path
                          d='M10.8932 10.0024C11.1391 10.2485 11.1391 10.646 10.8932 10.8921C10.7705 11.0148 10.6095 11.0764 10.4483 11.0764C10.2873 11.0764 10.1262 11.0148 10.0035 10.8921L8.11304 9.00149L6.22256 10.8921C6.09987 11.0148 5.93883 11.0764 5.77778 11.0764C5.61662 11.0764 5.45558 11.0148 5.3329 10.8921C5.08695 10.646 5.08695 10.2485 5.3329 10.0024L7.2235 8.11195L5.3329 6.22146C5.08695 5.9754 5.08695 5.57786 5.3329 5.3318C5.57896 5.08585 5.9765 5.08585 6.22256 5.3318L8.11304 7.2224L10.0035 5.3318C10.2496 5.08585 10.6471 5.08585 10.8932 5.3318C11.1391 5.57786 11.1391 5.9754 10.8932 6.22146L9.00259 8.11195L10.8932 10.0024Z'
                          fill='#FAFAFA'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_138_1468'>
                          <rect
                            width='15.099'
                            height='15.099'
                            fill='white'
                            transform='translate(0.563477 0.562439)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
              <div className='cart-amount-full-div'>
                <div className='cart-amount-div'>
                  <p className='cart-amount-pone'>Total:</p>
                  <p className='cart-amount-pTwo'>৳2,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
