"use client";
import React, { useRef, useState } from "react";
import cartPicOne from "../../../public/cartpicone.png";
// import cartPicOne from "../../../public/cartpictwo.png";
import Navbar from "@/component/Navbar/Navbar";
import Footer from "@/component/Footer/Footer";

const page = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='cart-full-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8'>
              <div>
                <h3>Your Shopping Cart</h3>
                <p>4 items in your shopping cart</p>
              </div>

              <div>
                <div className='row cart-product-div'>
                  <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                    <div>
                      <img src={cartPicOne.src} alt='' />
                    </div>
                  </div>
                  <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                    <div>
                      <h6>Red Monster Truck</h6>
                      <span>৳580</span>
                    </div>
                    <span>Remove</span>
                  </div>
                  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                    <div>
                      <div className='add-to-cart-div'>
                        <div className='counting-div'>
                          <button
                            className='count-bten'
                            onClick={decrementCount}>
                            -
                          </button>
                          <div className='mt-3'>{count}</div>
                          <button
                            className='count-bten'
                            onClick={incrementCount}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                    <div>
                      <span>৳ 1160</span>
                    </div>
                  </div>
                </div>
                <div className='row cart-product-div'>
                  <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                    <div>
                      <img src={cartPicOne.src} alt='' />
                    </div>
                  </div>
                  <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                    <div>
                      <h6>Red Monster Truck</h6>
                      <span>৳580</span>
                    </div>
                    <span>Remove</span>
                  </div>
                  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                    <div>
                      <div className='add-to-cart-div'>
                        <div className='counting-div'>
                          <button
                            className='count-bten'
                            onClick={decrementCount}>
                            -
                          </button>
                          <div className='mt-3'>{count}</div>
                          <button
                            className='count-bten'
                            onClick={incrementCount}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                    <div>
                      <span>৳ 1160</span>
                    </div>
                  </div>
                </div>
                <div className='row cart-product-div'>
                  <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                    <div>
                      <img src={cartPicOne.src} alt='' />
                    </div>
                  </div>
                  <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                    <div>
                      <h6>Red Monster Truck</h6>
                      <span>৳580</span>
                    </div>
                    <span>Remove</span>
                  </div>
                  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                    <div>
                      <div className='add-to-cart-div'>
                        <div className='counting-div'>
                          <button
                            className='count-bten'
                            onClick={decrementCount}>
                            -
                          </button>
                          <div className='mt-3'>{count}</div>
                          <button
                            className='count-bten'
                            onClick={incrementCount}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                    <div>
                      <span>৳ 1160</span>
                    </div>
                  </div>
                </div>
                <div className='row cart-product-div'>
                  <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                    <div>
                      <img src={cartPicOne.src} alt='' />
                    </div>
                  </div>
                  <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                    <div>
                      <h6>Red Monster Truck</h6>
                      <span>৳580</span>
                    </div>
                    <span>Remove</span>
                  </div>
                  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                    <div>
                      <div className='add-to-cart-div'>
                        <div className='counting-div'>
                          <button
                            className='count-bten'
                            onClick={decrementCount}>
                            -
                          </button>
                          <div className='mt-3'>{count}</div>
                          <button
                            className='count-bten'
                            onClick={incrementCount}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                    <div>
                      <span>৳ 1160</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <div>
                <div>
                  <h5>Order Summury</h5>
                  <hr />

                  <div className='row'>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                      <div>
                        <p>Original Price</p>
                        <p>Savings</p>
                        <p>Shipping</p>
                        <p>Estimated Sales Tax</p>
                      </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                      <div>
                        <p>৳698.00</p>
                        <p>৳00.00</p>
                        <p>FREE</p>
                        <p>৳ 1160</p>
                      </div>
                    </div>

                    <hr />
                    <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                      <div>
                        <p>Total</p>
                      </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                      <p>৳1200.60</p>
                    </div>
                  </div>
                  <div className='checkout-btn-div'>
                    <button className='checkout-btn'>Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
