import React from "react";
import footerImg from "../../../public/tubLogo.png";
import footericon from "../../../public/footerF.png";
import footericont from "../../../public/footertwitter.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className='footer-div'>
        <div className='container'>
          <div className='row footer-div-firstportion'>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
              <div className='foter-tag-img-div'>
                <img className='tub-img-footer' src={footerImg.src} alt='' />
                <span className='TUB'>TUB</span>
              </div>
            </div>
            <div className='col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
              <div>
                <div className='f-anchortext-div'>
                  <p>
                    <strong>Product</strong>
                  </p>
                  <a href='#' className='f-anchortext'>
                    Toys
                  </a>
                  <a href='#' className='f-anchortext'>
                    Age
                  </a>
                  <a href='#' className='f-anchortext'>
                    Category
                  </a>
                  <a href='#' className='f-anchortext'>
                    All Products
                  </a>
                  <a href='#' className='f-anchortext'>
                    Listing
                  </a>
                  <a href='#' className='f-anchortext'>
                    Pricing
                  </a>
                </div>
              </div>
            </div>
            <div className='col-4 col-sm-6 col-md-2 col-lg-2 col-xl-2'>
              <div>
                <div className='f-anchortext-div'>
                  <p>
                    <strong>For Customer</strong>
                  </p>
                  <a href='#' className='f-anchortext'>
                    Docs
                  </a>
                  <a href='#' className='f-anchortext'>
                    Knowledge Base
                  </a>
                  <a href='#' className='f-anchortext'>
                    System Status
                  </a>
                  <a href='#' className='f-anchortext'>
                    All Products
                  </a>
                  <a href='#' className='f-anchortext'>
                    Tutorials
                  </a>
                  <a href='#' className='f-anchortext'>
                    Security
                  </a>
                </div>
              </div>
            </div>
            <div className='col-4 col-sm-6 col-md-2 col-lg-2 col-xl-2'>
              <div>
                <div className='f-anchortext-div'>
                  <p>
                    <strong>Resources</strong>
                  </p>
                  <a href='#' className='f-anchortext'>
                    About
                  </a>
                  <a href='#' className='f-anchortext'>
                    Guideline
                  </a>
                  <a href='#' className='f-anchortext'>
                    Rating
                  </a>
                  <a href='#' className='f-anchortext'>
                    All Products
                  </a>
                  <a href='#' className='f-anchortext'>
                    Brands
                  </a>
                  <a href='#' className='f-anchortext'>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'>
              <div>
                <div>
                  <div className='footer-search-div'>
                    <p>
                      <strong>Subscribe</strong>
                    </p>
                    <div className='f-subscribe-inputs-div'>
                      <input
                        className='footer-Inputs'
                        type='email'
                        placeholder='Email address'
                      />
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='46'
                          height='45'
                          viewBox='0 0 46 45'
                          fill='none'>
                          <path
                            d='M0.5 0.5H38C42.1421 0.5 45.5 3.85786 45.5 8V37C45.5 41.1421 42.1421 44.5 38 44.5H0.5V0.5Z'
                            fill='url(#paint0_linear_139_2444)'
                            stroke='#F0F0F0'
                          />
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M25.1716 19.4648L28.3536 22.6468C28.5488 22.842 28.5488 23.1586 28.3536 23.3539L25.1716 26.5359C24.9763 26.7311 24.6597 26.7311 24.4645 26.5359C24.2692 26.3406 24.2692 26.024 24.4645 25.8288L26.7929 23.5003H18C17.7239 23.5003 17.5 23.2765 17.5 23.0003C17.5 22.7242 17.7239 22.5003 18 22.5003H26.7929L24.4645 20.1719C24.2692 19.9767 24.2692 19.6601 24.4645 19.4648C24.6597 19.2695 24.9763 19.2695 25.1716 19.4648Z'
                            fill='white'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_139_2444'
                              x1='-2.69047e-07'
                              y1='22.6127'
                              x2='46'
                              y2='22.6127'
                              gradientUnits='userSpaceOnUse'>
                              <stop stop-color='#02D4B6' />
                              <stop offset='1' stop-color='#1663F9' />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className='footer-ratio-div'>
                      <span className='footer-ratio-text'>8/10</span>
                      <span className='footer-ratio-text'>Overall rating</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='104'
                        height='20'
                        viewBox='0 0 104 20'
                        fill='none'>
                        <path
                          d='M9.04894 2.92705C9.3483 2.00574 10.6517 2.00574 10.9511 2.92705L12.0206 6.21885C12.1545 6.63087 12.5385 6.90983 12.9717 6.90983H16.4329C17.4016 6.90983 17.8044 8.14945 17.0207 8.71885L14.2205 10.7533C13.87 11.0079 13.7234 11.4593 13.8572 11.8713L14.9268 15.1631C15.2261 16.0844 14.1717 16.8506 13.388 16.2812L10.5878 14.2467C10.2373 13.9921 9.7627 13.9921 9.41221 14.2467L6.61204 16.2812C5.82833 16.8506 4.77385 16.0844 5.0732 15.1631L6.14277 11.8713C6.27665 11.4593 6.12999 11.0079 5.7795 10.7533L2.97933 8.71885C2.19562 8.14945 2.59839 6.90983 3.56712 6.90983H7.02832C7.46154 6.90983 7.8455 6.63087 7.97937 6.21885L9.04894 2.92705Z'
                          fill='#FFAD0F'
                        />
                        <path
                          d='M30.0489 2.92705C30.3483 2.00574 31.6517 2.00574 31.9511 2.92705L33.0206 6.21885C33.1545 6.63087 33.5385 6.90983 33.9717 6.90983H37.4329C38.4016 6.90983 38.8044 8.14945 38.0207 8.71885L35.2205 10.7533C34.87 11.0079 34.7234 11.4593 34.8572 11.8713L35.9268 15.1631C36.2261 16.0844 35.1717 16.8506 34.388 16.2812L31.5878 14.2467C31.2373 13.9921 30.7627 13.9921 30.4122 14.2467L27.612 16.2812C26.8283 16.8506 25.7739 16.0844 26.0732 15.1631L27.1428 11.8713C27.2766 11.4593 27.13 11.0079 26.7795 10.7533L23.9793 8.71885C23.1956 8.14945 23.5984 6.90983 24.5671 6.90983H28.0283C28.4615 6.90983 28.8455 6.63087 28.9794 6.21885L30.0489 2.92705Z'
                          fill='#FFAD0F'
                        />
                        <path
                          d='M51.0489 2.92705C51.3483 2.00574 52.6517 2.00574 52.9511 2.92705L54.0206 6.21885C54.1545 6.63087 54.5385 6.90983 54.9717 6.90983H58.4329C59.4016 6.90983 59.8044 8.14945 59.0207 8.71885L56.2205 10.7533C55.87 11.0079 55.7234 11.4593 55.8572 11.8713L56.9268 15.1631C57.2261 16.0844 56.1717 16.8506 55.388 16.2812L52.5878 14.2467C52.2373 13.9921 51.7627 13.9921 51.4122 14.2467L48.612 16.2812C47.8283 16.8506 46.7739 16.0844 47.0732 15.1631L48.1428 11.8713C48.2766 11.4593 48.13 11.0079 47.7795 10.7533L44.9793 8.71885C44.1956 8.14945 44.5984 6.90983 45.5671 6.90983H49.0283C49.4615 6.90983 49.8455 6.63087 49.9794 6.21885L51.0489 2.92705Z'
                          fill='#FFAD0F'
                        />
                        <path
                          d='M72.0489 2.92705C72.3483 2.00574 73.6517 2.00574 73.9511 2.92705L75.0206 6.21885C75.1545 6.63087 75.5385 6.90983 75.9717 6.90983H79.4329C80.4016 6.90983 80.8044 8.14945 80.0207 8.71885L77.2205 10.7533C76.87 11.0079 76.7234 11.4593 76.8572 11.8713L77.9268 15.1631C78.2261 16.0844 77.1717 16.8506 76.388 16.2812L73.5878 14.2467C73.2373 13.9921 72.7627 13.9921 72.4122 14.2467L69.612 16.2812C68.8283 16.8506 67.7739 16.0844 68.0732 15.1631L69.1428 11.8713C69.2766 11.4593 69.13 11.0079 68.7795 10.7533L65.9793 8.71885C65.1956 8.14945 65.5984 6.90983 66.5671 6.90983H70.0283C70.4615 6.90983 70.8455 6.63087 70.9794 6.21885L72.0489 2.92705Z'
                          fill='#FFAD0F'
                        />
                        <path
                          d='M93.0489 2.92705C93.3483 2.00574 94.6517 2.00574 94.9511 2.92705L96.0206 6.21885C96.1545 6.63087 96.5385 6.90983 96.9717 6.90983H100.433C101.402 6.90983 101.804 8.14945 101.021 8.71885L98.2205 10.7533C97.87 11.0079 97.7234 11.4593 97.8572 11.8713L98.9268 15.1631C99.2261 16.0844 98.1717 16.8506 97.388 16.2812L94.5878 14.2467C94.2373 13.9921 93.7627 13.9921 93.4122 14.2467L90.612 16.2812C89.8283 16.8506 88.7739 16.0844 89.0732 15.1631L90.1428 11.8713C90.2766 11.4593 90.13 11.0079 89.7795 10.7533L86.9793 8.71885C86.1956 8.14945 86.5984 6.90983 87.5671 6.90983H91.0283C91.4615 6.90983 91.8455 6.63087 91.9794 6.21885L93.0489 2.92705Z'
                          fill='#DCDCDC'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='hrfs' />

        <div className='container second-footer'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-platForm-anchor'>
                <Link href='#'>Platform</Link>
                <Link href='#'>Products</Link>
                <Link href='#'>Brands</Link>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <p className='reserved-text'>© 2023 UTB I All Rights Reserved</p>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-imgs-full-div'>
                <div className='footer-imgs-div'>
                  <img className='footer-imgs' src={footericon.src} alt='' />
                </div>
                <div className='footer-imgs-div'>
                  <img className='footer-imgs' src={footericont.src} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
