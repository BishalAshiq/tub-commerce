import Navbar from "@/component/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='Account-Settings-full-div'>
        <div className='container'>
          <div className='row'>
            <div className=''>
              <h1>Account Settings</h1>
              <p>Update your account information</p>
            </div>

            <div>
              <p>My Details</p>
              <div className='row'>
                <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
                  <input type='name' placeholder='Your name' />
                </div>
                <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
                  <input type='text' placeholder='Street Address' />
                </div>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                  <input type='text' placeholder='Street Address' />
                </div>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                  <input type='text' placeholder='Street Address' />
                </div>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                  <input type='text' placeholder='Street Address' />
                </div>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                  <input type='text' placeholder='Street Address' />
                </div>
                <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
                  <input type='name' placeholder='Your name' />
                </div>
                <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
                  <input type='name' placeholder='Your name' />
                </div>
              </div>

              <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
                <p>Reset</p>
                <div className='row'>
                  <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                    <input type='text' placeholder='Street Address' />
                  </div>
                  <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                    <input type='text' placeholder='Street Address' />
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
                <p>Payment</p>
                <div className='row'>
                  <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                    <input type='text' placeholder='Street Address' />
                  </div>
                  <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                    <button>Cancel</button>
                    <button>Save Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
