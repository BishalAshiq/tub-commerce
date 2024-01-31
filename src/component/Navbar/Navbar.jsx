import React from "react";
import NavImg from "../../../public/tubLogo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className='fixed-top'>
        <nav className='navbar navbar-expand-lg navbar-full-div'>
          <div className='container'>
            <div className=''>
              <Link href='/'>
                <div className='nav-tag-img-div'>
                  <img className='NavImage' src={NavImg.src} alt='' />
                  <p className='Nav-TUB'>TUB</p>
                </div>
              </Link>
            </div>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse nav-routes-div'
              id='navbarSupportedContent'>
              <ul className='navbar-nav  mb-lg-0'>
                <li className='nav-item'>
                  <Link
                    className='nav-link active'
                    aria-current='page'
                    href='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Product
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z'
                          fill='#475569'
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    New Arrival
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='/'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='/'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a className='dropdown-item' href='/'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' aria-disabled='true'>
                    Category
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z'
                          fill='#475569'
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' aria-disabled='true'>
                    Brand
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z'
                          fill='#475569'
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
              <form className='nav-search-input-form' role='search'>
                <div className='nav-search-input-div'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'>
                    <path
                      d='M13.1291 11.8792H12.4707L12.2374 11.6542C13.0541 10.7042 13.5457 9.47086 13.5457 8.12919C13.5457 5.13752 11.1207 2.71252 8.12907 2.71252C5.1374 2.71252 2.7124 5.13752 2.7124 8.12919C2.7124 11.1209 5.1374 13.5459 8.12907 13.5459C9.47074 13.5459 10.7041 13.0542 11.6541 12.2375L11.8791 12.4709V13.1292L16.0457 17.2875L17.2874 16.0459L13.1291 11.8792ZM8.12907 11.8792C6.05407 11.8792 4.37907 10.2042 4.37907 8.12919C4.37907 6.05419 6.05407 4.37919 8.12907 4.37919C10.2041 4.37919 11.8791 6.05419 11.8791 8.12919C11.8791 10.2042 10.2041 11.8792 8.12907 11.8792Z'
                      fill='#94A3B8'
                    />
                  </svg>
                  <input
                    className='nav-search-input'
                    type='search'
                    placeholder='e.g. toys'
                  />
                </div>

                <div className='nav-search-input-btn' type='submit'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <g clip-path='url(#clip0_69_2395)'>
                      <path
                        d='M22.3468 21.0818L17.0857 15.61C18.4384 14.0019 19.1796 11.9787 19.1796 9.87238C19.1796 4.95122 15.1757 0.947388 10.2546 0.947388C5.33342 0.947388 1.32959 4.95122 1.32959 9.87238C1.32959 14.7935 5.33342 18.7974 10.2546 18.7974C12.1021 18.7974 13.8626 18.2401 15.3678 17.1823L20.6689 22.6957C20.8905 22.9258 21.1885 23.0527 21.5078 23.0527C21.8101 23.0527 22.0969 22.9374 22.3146 22.7279C22.7771 22.2828 22.7919 21.5447 22.3468 21.0818ZM10.2546 3.27565C13.8921 3.27565 16.8513 6.23486 16.8513 9.87238C16.8513 13.5099 13.8921 16.4691 10.2546 16.4691C6.61707 16.4691 3.65785 13.5099 3.65785 9.87238C3.65785 6.23486 6.61707 3.27565 10.2546 3.27565Z'
                        fill='white'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_69_2395'>
                        <rect
                          width='22.1053'
                          height='22.1053'
                          fill='white'
                          transform='translate(0.947266 0.947388)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </form>
            </div>
          </div>
        </nav>
        <div className=' sec-navbar-links-acc-div '>
          <div className='container'>
            <div className='row'>
              <div className='col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9'>
                <div className='sec-navbar-links'>
                  <Link href='/'>All Toys</Link>
                  <Link href='/'>All Toys</Link>
                  <Link href='/'>Age Wise</Link>
                  <Link href='/'>Books</Link>
                  <Link href='/'>Bulk Order</Link>
                  <Link href='/'>Gift Card</Link>
                  <Link href='/'>About Us</Link>
                  <Link href='/'>Contact Us</Link>
                </div>
              </div>
              <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                <div>
                  <Link className='sec-navbar-links-acc' href='/login'>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'>
                        <g clip-path='url(#clip0_69_2401)'>
                          <path
                            d='M10 0.000488281C4.47773 0.000488281 0 4.47734 0 10C0 15.5228 4.47729 19.9996 10 19.9996C15.5231 19.9996 20 15.5228 20 10C20 4.47734 15.5231 0.000488281 10 0.000488281ZM10 2.99047C11.8273 2.99047 13.308 4.47163 13.308 6.29804C13.308 8.12488 11.8273 9.6056 10 9.6056C8.17359 9.6056 6.69288 8.12488 6.69288 6.29804C6.69288 4.47163 8.17359 2.99047 10 2.99047ZM9.9978 17.3852C8.17535 17.3852 6.50619 16.7215 5.21875 15.6229C4.90512 15.3554 4.72415 14.9632 4.72415 14.5516C4.72415 12.6992 6.22332 11.2168 8.07608 11.2168H11.9248C13.778 11.2168 15.2715 12.6992 15.2715 14.5516C15.2715 14.9636 15.0914 15.355 14.7773 15.6225C13.4903 16.7215 11.8207 17.3852 9.9978 17.3852Z'
                            fill='#02AAF1'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_69_2401'>
                            <rect width='20' height='20' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Account
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        height='12'
                        viewBox='0 0 12 12'
                        fill='none'>
                        <path
                          d='M5.99997 9.42017C5.7849 9.42017 5.56987 9.33806 5.4059 9.17417L0.24617 4.01439C-0.0820565 3.68616 -0.0820565 3.154 0.24617 2.8259C0.574263 2.49781 1.10632 2.49781 1.43457 2.8259L5.99997 7.39156L10.5654 2.82606C10.8936 2.49797 11.4256 2.49797 11.7537 2.82606C12.0821 3.15416 12.0821 3.68632 11.7537 4.01455L6.59404 9.17433C6.42999 9.33824 6.21495 9.42017 5.99997 9.42017Z'
                          fill='#475569'
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
