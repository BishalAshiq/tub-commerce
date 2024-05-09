import React from "react";
import Link from "next/link";

const BottomNav = () => {
  return (
    <nav className="bottom-navbar">

    <div className="bottom-navbar-div">
        <Link href="/">
            <div className="bottom-single-link-div">
          <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 10C3 9.05719 3 8.58579 3.29289 8.29289C3.58579 8 4.05719 8 5 8H19C19.9428 8 20.4142 8 20.7071 8.29289C21 8.58579 21 9.05719 21 10V11.5C21 11.9659 21 12.1989 20.9239 12.3827C20.8224 12.6277 20.6277 12.8224 20.3827 12.9239C20.1989 13 19.9659 13 19.5 13V13C19.0341 13 18.8011 13 18.6173 13.0761C18.3723 13.1776 18.1776 13.3723 18.0761 13.6173C18 13.8011 18 14.0341 18 14.5V18C18 18.9428 18 19.4142 17.7071 19.7071C17.4142 20 16.9428 20 16 20H8C7.05719 20 6.58579 20 6.29289 19.7071C6 19.4142 6 18.9428 6 18V14.5C6 14.0341 6 13.8011 5.92388 13.6173C5.82239 13.3723 5.62771 13.1776 5.38268 13.0761C5.19891 13 4.96594 13 4.5 13V13C4.03406 13 3.80109 13 3.61732 12.9239C3.37229 12.8224 3.17761 12.6277 3.07612 12.3827C3 12.1989 3 11.9659 3 11.5V10Z" stroke="#222222"/>
            <path d="M5 13H19" stroke="#222222" stroke-linecap="round"/>
            <path d="M12 7L12 20" stroke="#222222" stroke-linecap="round"/>
            <path d="M12 7L11.1214 6.12144C10.0551 5.05514 8.75521 4.25174 7.3246 3.77487V3.77487C6.18099 3.39366 5 4.24487 5 5.45035V5.63246C5 6.44914 5.52259 7.1742 6.29737 7.43246L8 8" stroke="#222222" stroke-linecap="round"/>
            <path d="M12 7L12.8786 6.12144C13.9449 5.05514 15.2448 4.25174 16.6754 3.77487V3.77487C17.819 3.39366 19 4.24487 19 5.45035V5.63246C19 6.44914 18.4774 7.1742 17.7026 7.43246L16 8" stroke="#222222" stroke-linecap="round"/>
            </svg>
          </span>
                Offer
            </div>
        </Link>
        <Link href="/flaseSalepromotions">
            <div className="bottom-single-link-div">
          <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.55563 13.3232L9.43584 13.3123C7.90803 13.1735 7.14412 13.104 6.90146 12.5814C6.65881 12.0588 7.09869 11.4304 7.97846 10.1736L11.5612 5.05544C12.1424 4.22517 12.433 3.81003 12.6836 3.89831C12.9342 3.98658 12.9005 4.4922 12.8331 5.50343L12.6299 8.55194C12.5685 9.47214 12.5379 9.93224 12.8023 10.2419C13.0667 10.5515 13.5259 10.5933 14.4444 10.6768L14.5642 10.6877C16.092 10.8265 16.8559 10.896 17.0985 11.4186C17.3412 11.9412 16.9013 12.5696 16.0215 13.8264L12.4388 18.9446C11.8576 19.7748 11.567 20.19 11.3164 20.1017C11.0658 20.0134 11.0995 19.5078 11.1669 18.4966L11.3701 15.4481C11.4315 14.5279 11.4621 14.0678 11.1977 13.7581C10.9333 13.4485 10.4741 13.4067 9.55563 13.3232Z" stroke="white"/>
            <path d="M18.5 4L17 6H19L17.5 8" stroke="#2A4157" stroke-opacity="0.24" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5 16L5 18H7L5.5 20" stroke="#2A4157" stroke-opacity="0.24" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </span>
               Happy hour
            </div>
        </Link>
        <Link href="/product/allProducts">
            <div className="bottom-single-link-div">
          <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L5 7L12 10L19 7L12 4Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.02545 10.044L4.60608 11.0809C4.2384 11.2385 4 11.6 4 12C4 12.4001 4.2384 12.7616 4.60608 12.9192L11.6061 15.9192C11.8576 16.027 12.1424 16.027 12.3939 15.9192L19.3939 12.9192C19.7616 12.7616 20 12.4001 20 12C20 11.6 19.7616 11.2385 19.3939 11.0809L16.9746 10.044L14.436 11.132L16.4614 12L12 13.9121L7.53859 12L9.56404 11.132L7.02545 10.044Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.02545 15.044L4.60608 16.0809C4.2384 16.2385 4 16.6 4 17C4 17.4001 4.2384 17.7616 4.60608 17.9192L11.6061 20.9192C11.8576 21.027 12.1424 21.027 12.3939 20.9192L19.3939 17.9192C19.7616 17.7616 20 17.4001 20 17C20 16.6 19.7616 16.2385 19.3939 16.0809L16.9746 15.044L14.436 16.132L16.4614 17L12 18.9121L7.53859 17L9.56404 16.132L7.02545 15.044Z" fill="white"/>
            </svg>

          </span>
                Products
            </div>
        </Link>
        <Link href="/login">
            <div className="bottom-single-link-div">
          <span>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="3.5" stroke="white" stroke-linecap="round"/>
            <path d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z" stroke="#222222" stroke-linecap="round"/>
            </svg>

          </span>
              Accounts
            </div>
        </Link>
    </div>



      {/* <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li className="bottomNav-li">
            <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="3.5" stroke="#222222" stroke-linecap="round"/>
            <path d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z" stroke="#222222" stroke-linecap="round"/>
            </svg>


            </span>
            <a href="#">About Us</a>
            
            </li>
   
      </ul> */}
    </nav>
  );
};

export default BottomNav;
