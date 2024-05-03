"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
// import axiosInstance from '@/utils/axios';
import BleftIcon from "../../../public/Blefttoy.png";
import BRightIcon from "../../../public/BRighttoy.png";
import EcomBanner from "../../../public/e-comBanner.png";
import PopularProducts from "./PopularProducts";
// import { useEffect } from "react";
import AOS from "aos";
import axiosInstance from "@/utils/axios";
import { Skeleton } from "@mui/material";

const Homebanner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    AOS.refresh();
    AOS.init();
    axiosInstance.get("/sliders").then((res) => {
      setBanners(res.data.data);
    });
  }, []);



  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const autoCompleteRef = useRef(null);

  useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  }, []);

  const handleChange = async (e) => {
      const term = e.target.value;
      setSearchTerm(term);

      try {
          const response = axiosInstance.get(`/products/search?name=${term}`).then((res) => {

              setSearchResults(res.data.data);
          });

      } catch (error) {
          console.error('Error fetching search results:', error);
      }
  };

  const handleSelectResult = (result) => {
      setSearchTerm(result.name);
      setSearchResults([]);
      // Do something with the selected result, like redirecting to a details page or updating state
  };

  const handleClickOutside = (event) => {
      if (autoCompleteRef.current && !autoCompleteRef.current.contains(event.target)) {
          setSearchResults([]);
      }
  };



  return (
    <div className=" banner-full-div">
      <div className="container">
        <div className="row ">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <div className="banner-icon-div" data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine">
              <img className="banner-icon" src={BleftIcon.src} alt="" />
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="banner-text-div">
              <h1 className="banner-text-h1">
                Shop the Best <span className="banner-text-toys">Toys</span>{" "}
                Near your location
              </h1>

              <div className="banner-find-div">
                <span className="search-span-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M24.127 23.976L20.1836 20.0325M23.0003 13.2722C23.0003 18.5615 18.7125 22.8493 13.4232 22.8493C8.13398 22.8493 3.84619 18.5615 3.84619 13.2722C3.84619 7.98298 8.13398 3.69519 13.4232 3.69519C18.7125 3.69519 23.0003 7.98298 23.0003 13.2722Z"
                      stroke="white"
                      stroke-width="1.28767"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="find-p"> Find your product</span>
               <form role='search'>
               <div className='nav-search-input-div' ref={autoCompleteRef}>
                  <input
                    className="banner-search-input"
                    placeholder="Search"
                    type="search"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </div>
                <ul className="autocomplete-results-banner">
                {searchResults.map((result) => (
                    <li key={result.id} onClick={() => handleSelectResult(result)}>
                        {result.name}
                    </li>
                ))}
            </ul>
               </form>
              </div>
            </div>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <div
              className="banner-icon-div"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <img className="banner-icon" src={BRightIcon.src} alt="" />
            </div>
          </div>
        </div>

        <div className="banner-carousel-div" data-aos="fade-right">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              {banners.length > 0 ?
                banners.map((item) => (
                  <div className="carousel-item active caro-img-div">
                    <img src={item.photo} className="caro-img" alt="..." />


                  </div>
                )) :

                <Skeleton sx={{ height: 450 }} animation="wave" variant="rectangular" />



              }


            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div >
          <PopularProducts />
        </div>
      </div>
    </div>
  );
};

export default Homebanner;
