"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import Author from "../../../public/authoravatar.jpg";

const ClientsAndDiscount = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className=''>
      <div className='review-num-full-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
              <div className='review-num-div'>
                <h3 className='review-number'>36+</h3>
                <p className='review-numberp'>User Trust</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
              <div className='review-num-div'>
                <h3 className='review-number1'>42k+</h3>
                <p className='review-numberp'>Brand Vision</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
              <div className='review-num-div'>
                <h3 className='review-number2'>8k+</h3>
                <p className='review-numberp'>Achievement</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
              <div className='review-num-div'>
                <h3 className='review-number3'>20k+</h3>
                <p className='review-numberp'>Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=''>
          <div className='container'>
            <div className='w-y-clint-div'>
              <h2 className='w-y-clint-h6'>
                What Our <span className='clients-text'>Clients</span> Say
              </h2>
              <p className='w-y-clint-p'>
                Here, We make almost every genre of applications. Your name it
                and we build it.
              </p>
            </div>

            <div>
              <div>
                <Slider {...settings}>
                  <div className='card-diiiiv-full'>
                    <div className='row card-diiiiv'>
                      <div className=' col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                        <div className='card-header-text-div'>
                          <div className='author-img-div'>
                            <img
                              className='author-img'
                              src={Author.src}
                              alt=''
                            />
                          </div>
                          <div>
                            {" "}
                            <h5>Yaron Shifman</h5>
                            <p>Customer</p>
                          </div>
                        </div>
                      </div>
                      <div className=' col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='113'
                            height='20'
                            viewBox='0 0 113 20'
                            fill='none'>
                            <path
                              d='M10.8355 0.812012L13.1283 7.4273L20.5477 7.4273L14.5452 11.5158L16.838 18.1311L10.8355 14.0426L4.83307 18.1311L7.1258 11.5158L1.12335 7.4273L8.54279 7.4273L10.8355 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M33.8121 0.812012L36.1048 7.4273L43.5243 7.4273L37.5218 11.5158L39.8145 18.1311L33.8121 14.0426L27.8096 18.1311L30.1024 11.5158L24.0999 7.4273L31.5194 7.4273L33.8121 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M56.7906 0.812012L59.0833 7.4273L66.5028 7.4273L60.5003 11.5158L62.7931 18.1311L56.7906 14.0426L50.7881 18.1311L53.0809 11.5158L47.0784 7.4273L54.4979 7.4273L56.7906 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M79.7637 0.812012L82.0565 7.4273L89.4759 7.4273L83.4735 11.5158L85.7662 18.1311L79.7637 14.0426L73.7613 18.1311L76.054 11.5158L70.0516 7.4273L77.471 7.4273L79.7637 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M102.742 0.812012L105.035 7.4273L112.454 7.4273L106.451 11.5158L108.744 18.1311L102.742 14.0426L96.7393 18.1311L99.0321 11.5158L93.0296 7.4273L100.449 7.4273L102.742 0.812012Z'
                              fill='#FBB040'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className='card-ptext'>
                      <p>
                        I’m very pleased with their work. When I need help with
                        any aspect of development, I’m able to call on them to
                        take care of it. They’re professional and complete tasks
                        in a timely manner.
                      </p>
                    </div>
                  </div>
                  <div className='card-diiiiv-full'>
                    <div className='row card-diiiiv'>
                      <div className=' col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                        <div className='card-header-text-div'>
                          <div className='author-img-div'>
                            <img
                              className='author-img'
                              src={Author.src}
                              alt=''
                            />
                          </div>
                          <div>
                            {" "}
                            <h5>Yaron Shifman</h5>
                            <p>Customer</p>
                          </div>
                        </div>
                      </div>
                      <div className=' col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='113'
                            height='20'
                            viewBox='0 0 113 20'
                            fill='none'>
                            <path
                              d='M10.8355 0.812012L13.1283 7.4273L20.5477 7.4273L14.5452 11.5158L16.838 18.1311L10.8355 14.0426L4.83307 18.1311L7.1258 11.5158L1.12335 7.4273L8.54279 7.4273L10.8355 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M33.8121 0.812012L36.1048 7.4273L43.5243 7.4273L37.5218 11.5158L39.8145 18.1311L33.8121 14.0426L27.8096 18.1311L30.1024 11.5158L24.0999 7.4273L31.5194 7.4273L33.8121 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M56.7906 0.812012L59.0833 7.4273L66.5028 7.4273L60.5003 11.5158L62.7931 18.1311L56.7906 14.0426L50.7881 18.1311L53.0809 11.5158L47.0784 7.4273L54.4979 7.4273L56.7906 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M79.7637 0.812012L82.0565 7.4273L89.4759 7.4273L83.4735 11.5158L85.7662 18.1311L79.7637 14.0426L73.7613 18.1311L76.054 11.5158L70.0516 7.4273L77.471 7.4273L79.7637 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M102.742 0.812012L105.035 7.4273L112.454 7.4273L106.451 11.5158L108.744 18.1311L102.742 14.0426L96.7393 18.1311L99.0321 11.5158L93.0296 7.4273L100.449 7.4273L102.742 0.812012Z'
                              fill='#FBB040'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className='card-ptext'>
                      <p>
                        I’m very pleased with their work. When I need help with
                        any aspect of development, I’m able to call on them to
                        take care of it. They’re professional and complete tasks
                        in a timely manner.
                      </p>
                    </div>
                  </div>
                  <div className='card-diiiiv-full'>
                    <div className='row card-diiiiv'>
                      <div className=' col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                        <div className='card-header-text-div'>
                          <div className='author-img-div'>
                            <img
                              className='author-img'
                              src={Author.src}
                              alt=''
                            />
                          </div>
                          <div>
                            {" "}
                            <h5>Yaron Shifman</h5>
                            <p>Customer</p>
                          </div>
                        </div>
                      </div>
                      <div className=' col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='113'
                            height='20'
                            viewBox='0 0 113 20'
                            fill='none'>
                            <path
                              d='M10.8355 0.812012L13.1283 7.4273L20.5477 7.4273L14.5452 11.5158L16.838 18.1311L10.8355 14.0426L4.83307 18.1311L7.1258 11.5158L1.12335 7.4273L8.54279 7.4273L10.8355 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M33.8121 0.812012L36.1048 7.4273L43.5243 7.4273L37.5218 11.5158L39.8145 18.1311L33.8121 14.0426L27.8096 18.1311L30.1024 11.5158L24.0999 7.4273L31.5194 7.4273L33.8121 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M56.7906 0.812012L59.0833 7.4273L66.5028 7.4273L60.5003 11.5158L62.7931 18.1311L56.7906 14.0426L50.7881 18.1311L53.0809 11.5158L47.0784 7.4273L54.4979 7.4273L56.7906 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M79.7637 0.812012L82.0565 7.4273L89.4759 7.4273L83.4735 11.5158L85.7662 18.1311L79.7637 14.0426L73.7613 18.1311L76.054 11.5158L70.0516 7.4273L77.471 7.4273L79.7637 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M102.742 0.812012L105.035 7.4273L112.454 7.4273L106.451 11.5158L108.744 18.1311L102.742 14.0426L96.7393 18.1311L99.0321 11.5158L93.0296 7.4273L100.449 7.4273L102.742 0.812012Z'
                              fill='#FBB040'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className='card-ptext'>
                      <p>
                        I’m very pleased with their work. When I need help with
                        any aspect of development, I’m able to call on them to
                        take care of it. They’re professional and complete tasks
                        in a timely manner.
                      </p>
                    </div>
                  </div>
                  <div className='card-diiiiv-full'>
                    <div className='row card-diiiiv'>
                      <div className=' col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                        <div className='card-header-text-div'>
                          <div className='author-img-div'>
                            <img
                              className='author-img'
                              src={Author.src}
                              alt=''
                            />
                          </div>
                          <div>
                            {" "}
                            <h5>Yaron Shifman</h5>
                            <p>Customer</p>
                          </div>
                        </div>
                      </div>
                      <div className=' col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='113'
                            height='20'
                            viewBox='0 0 113 20'
                            fill='none'>
                            <path
                              d='M10.8355 0.812012L13.1283 7.4273L20.5477 7.4273L14.5452 11.5158L16.838 18.1311L10.8355 14.0426L4.83307 18.1311L7.1258 11.5158L1.12335 7.4273L8.54279 7.4273L10.8355 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M33.8121 0.812012L36.1048 7.4273L43.5243 7.4273L37.5218 11.5158L39.8145 18.1311L33.8121 14.0426L27.8096 18.1311L30.1024 11.5158L24.0999 7.4273L31.5194 7.4273L33.8121 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M56.7906 0.812012L59.0833 7.4273L66.5028 7.4273L60.5003 11.5158L62.7931 18.1311L56.7906 14.0426L50.7881 18.1311L53.0809 11.5158L47.0784 7.4273L54.4979 7.4273L56.7906 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M79.7637 0.812012L82.0565 7.4273L89.4759 7.4273L83.4735 11.5158L85.7662 18.1311L79.7637 14.0426L73.7613 18.1311L76.054 11.5158L70.0516 7.4273L77.471 7.4273L79.7637 0.812012Z'
                              fill='#FBB040'
                            />
                            <path
                              d='M102.742 0.812012L105.035 7.4273L112.454 7.4273L106.451 11.5158L108.744 18.1311L102.742 14.0426L96.7393 18.1311L99.0321 11.5158L93.0296 7.4273L100.449 7.4273L102.742 0.812012Z'
                              fill='#FBB040'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className='card-ptext'>
                      <p>
                        ’m very pleased with their work. When I need help with
                        any aspect of development, I’m able to call on them to
                        take care of it. They’re professional and complete tasks
                        in a timely manner.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsAndDiscount;
