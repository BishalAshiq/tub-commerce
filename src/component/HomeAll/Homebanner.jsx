import Image from "next/image";
import React from "react";
import BleftIcon from "../../../public/Blefttoy.png";
import BRightIcon from "../../../public/BRighttoy.png";

const Homebanner = () => {
  return (
    <div className=' banner-full-div'>
      <div className='container'>
        <div className='row '>
          <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
            <div className='banner-icon-div'>
              <img className='banner-icon' src={BleftIcon.src} alt='' />
            </div>
          </div>
          <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
            <div className='banner-text-div'>
              <h1 className='banner-text-h1'>
                Shop the Best <span className='banner-text-toys'>Toys</span>{" "}
                Near <br />
                your location
              </h1>

              <div className='banner-find-div'>
                <span className='search-span-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='28'
                    height='28'
                    viewBox='0 0 28 28'
                    fill='none'>
                    <path
                      d='M24.127 23.976L20.1836 20.0325M23.0003 13.2722C23.0003 18.5615 18.7125 22.8493 13.4232 22.8493C8.13398 22.8493 3.84619 18.5615 3.84619 13.2722C3.84619 7.98298 8.13398 3.69519 13.4232 3.69519C18.7125 3.69519 23.0003 7.98298 23.0003 13.2722Z'
                      stroke='white'
                      stroke-width='1.28767'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </span>
                Find your product
                <div>
                  <input
                    className='banner-search-input'
                    placeholder='Search'
                    type='search'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
            <div className='banner-icon-div'>
              <img className='banner-icon' src={BRightIcon.src} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebanner;
