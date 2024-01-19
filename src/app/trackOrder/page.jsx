import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className='track-route-div'>
      <div>
        <Navbar />
      </div>

      <div className='track-full-order'>
        <div className='container'>
          <div className='track-order'>
            <div className='track-tag-inp-div'>
              <h1 className='track-tag'> Track an Order</h1>
              <input
                className='track-order-input'
                type='number'
                placeholder='Order Number'
              />
            </div>
            <div className='trck-btn-div'>
              <Link href='/orderTracking' className='trck-btn'>
                Track
              </Link>
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
