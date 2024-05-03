"use client";
import React, { Component, useEffect } from "react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import Toy from "../../../public/toy_1.png";
import BruderToy1 from "../../../public/bruderToy1.png";
import BruderToy2 from "../../../public/bruderToy2.png";
import CatProductone from "../../../public/catProductone.png";
import CatProductwo from "../../../public/catProductwo.png";
import CatProductthree from "../../../public/catProductthree.png";
import CatProductfour from "../../../public/catProductfour.png";
import Dolls1 from "../../../public/dolls1.png";
import Dolls3 from "../../../public/dolls3.png";
import Dolls4 from "../../../public/dolls4.png";
import Dolls5 from "../../../public/dolls5.png";
import Toythree from "../../../public/toy_3.png";
import ToyFour from "../../../public/toy_4.png";
import ToyFive from "../../../public/toy_5.png";
import axiosInstance from "@/utils/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import ProductCardLoader from "../skeleton-loader/ProductCardLoader";


const FeaturedMoreProduct = () => {
  const sliderRef = useRef(null);
  // const sliderRefs = useRef(null);

  const play = () => {
    sliderRef.current.slickPlay();
  };

  const pause = () => {
    sliderRef.current.slickPause();
  };

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get("/products/featured").then((res) => {
      setProducts(res.data.data);
    });
  }, []);

  const [productsMiddle, setProductsMiddle] = useState([]);

  useEffect(() => {
    axiosInstance.get("/products/show-in-last").then((res) => {
      setProductsMiddle(res.data.data);
    });
  }, []);

  return (
    <div className=''>
      <div className='container'>
        <div className='featured-full-div'>
          <div className=''>
            <div className='featured-tags-div'>
              <h3 className='featured-tags'>
                Featured <span className='featured-tags-product'>Products</span>
              </h3>
              <div className='featured-tags-btn-div'>
                <Link href={"/product/allProducts"} className='featured-tags-btn'>
                  <span className="seeAllProdText"> See all Products{" "}</span>
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
                        d='M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z'
                        fill='white'
                      />
                    </svg>
                  </span>
                </Link>
                <div className='featured-tags-btn-two'>
                  <button className='buttonr-l-r' onClick={play}>
                    <svg
                      className="btn-next-svg"
                      xmlns='http://www.w3.org/2000/svg'
                      width='42'
                      height='42'
                      viewBox='0 0 56 56'
                      fill='none'>
                      <path
                        d='M47.7463 39.554C43.7508 46.461 36.283 51.1081 27.7297 51.1081C14.9674 51.1081 4.62158 40.7622 4.62158 28C4.62158 15.2377 14.9674 4.89185 27.7297 4.89185C36.283 4.89185 43.7508 9.53887 47.7463 16.4459M27.7298 18.7567L18.4866 28M18.4866 28L27.7298 37.2432M18.4866 28H50.838'
                        stroke='#156CFA'
                        stroke-width='2.91892'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </button>
                  <button className='buttonr-l-r' onClick={pause}>
                    <svg
                      className="btn-next-svg"
                      xmlns='http://www.w3.org/2000/svg'
                      width='42'
                      height='42'
                      viewBox='0 0 56 56'
                      fill='none'>
                      <path
                        d='M8.25372 16.4459C12.2492 9.53887 19.7171 4.89185 28.2704 4.89185C41.0326 4.89185 51.3785 15.2377 51.3785 28C51.3785 40.7622 41.0326 51.1081 28.2704 51.1081C19.7171 51.1081 12.2492 46.461 8.25372 39.554M28.2702 37.2432L37.5135 28M37.5135 28L28.2702 18.7567M37.5135 28H5.16211'
                        stroke='#156CFA'
                        stroke-width='2.91892'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='featured-p-div'>
            {products.length > 0 ?
              <Swiper
                spaceBetween={0}
                slidesPerView={5}
                navigation={false}
                autoplay={{ delay: 500, disableOnInteraction: true }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                  // Define your breakpoints here
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                }}>
                {products.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div>
                      <div className='single-toy'>
                        <div className='toy-img-div'>
                          <img
                            className='toy-img'
                            src={item.thumbnail_image}
                            alt=''
                          />
                        </div>
                        <div className='card-t-div'>
                          <span className='card-text'>{item.name}</span>
                          <span className='card-text-rating'>
                            4.9/5{" "}
                            <span>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='54'
                                height='10'
                                viewBox='0 0 54 10'
                                fill='none'>
                                <path
                                  d='M9.80729 4.20678C9.74823 4.02517 9.58715 3.89659 9.39733 3.87942L6.80827 3.64437L5.78506 1.24882C5.70951 1.07282 5.53762 0.959229 5.34629 0.959229C5.15496 0.959229 4.983 1.07282 4.90794 1.24882L3.88472 3.64437L1.29525 3.87942C1.10543 3.89694 0.944689 4.02551 0.885293 4.20678C0.826239 4.38839 0.880777 4.58759 1.02434 4.7135L2.98147 6.42962L2.40441 8.97119C2.36219 9.15807 2.43472 9.35131 2.58978 9.4634C2.67313 9.52396 2.77105 9.5542 2.86931 9.5542C2.95375 9.5542 3.03826 9.53176 3.11374 9.4866L5.34629 8.15169L7.57843 9.4866C7.74218 9.58445 7.94808 9.57548 8.1028 9.4634C8.25786 9.35131 8.33039 9.15807 8.28817 8.97119L7.71112 6.42962L9.66824 4.7135C9.81174 4.58759 9.86634 4.3888 9.80729 4.20678Z'
                                  fill='#F0C24B'
                                />
                                <path
                                  d='M20.8454 4.20678C20.7863 4.02517 20.6252 3.89659 20.4354 3.87942L17.8464 3.64437L16.8231 1.24882C16.7476 1.07282 16.5757 0.959229 16.3844 0.959229C16.1931 0.959229 16.0211 1.07282 15.946 1.24882L14.9228 3.64437L12.3333 3.87942C12.1435 3.89694 11.9828 4.02551 11.9234 4.20678C11.8643 4.38839 11.9189 4.58759 12.0624 4.7135L14.0196 6.42962L13.4425 8.97119C13.4003 9.15807 13.4728 9.35131 13.6279 9.4634C13.7112 9.52396 13.8091 9.5542 13.9074 9.5542C13.9918 9.5542 14.0763 9.53176 14.1518 9.4866L16.3844 8.15169L18.6165 9.4866C18.7803 9.58445 18.9862 9.57548 19.1409 9.4634C19.2959 9.35131 19.3685 9.15807 19.3263 8.97119L18.7492 6.42962L20.7063 4.7135C20.8498 4.58759 20.9044 4.3888 20.8454 4.20678Z'
                                  fill='#F0C24B'
                                />
                                <path
                                  d='M31.8839 4.20678C31.8249 4.02517 31.6638 3.89659 31.474 3.87942L28.8849 3.64437L27.8617 1.24882C27.7862 1.07282 27.6143 0.959229 27.423 0.959229C27.2316 0.959229 27.0597 1.07282 26.9846 1.24882L25.9614 3.64437L23.3719 3.87942C23.1821 3.89694 23.0213 4.02551 22.962 4.20678C22.9029 4.38839 22.9574 4.58759 23.101 4.7135L25.0581 6.42962L24.4811 8.97119C24.4388 9.15807 24.5114 9.35131 24.6664 9.4634C24.7498 9.52396 24.8477 9.5542 24.946 9.5542C25.0304 9.5542 25.1149 9.53176 25.1904 9.4866L27.423 8.15169L29.6551 9.4866C29.8188 9.58445 30.0247 9.57548 30.1795 9.4634C30.3345 9.35131 30.4071 9.15807 30.3648 8.97119L29.7878 6.42962L31.7449 4.7135C31.8884 4.58759 31.943 4.3888 31.8839 4.20678Z'
                                  fill='#F0C24B'
                                />
                                <path
                                  d='M42.922 4.20678C42.863 4.02517 42.7019 3.89659 42.5121 3.87942L39.923 3.64437L38.8998 1.24882C38.8243 1.07282 38.6524 0.959229 38.461 0.959229C38.2697 0.959229 38.0977 1.07282 38.0227 1.24882L36.9995 3.64437L34.41 3.87942C34.2202 3.89694 34.0594 4.02551 34 4.20678C33.941 4.38839 33.9955 4.58759 34.1391 4.7135L36.0962 6.42962L35.5192 8.97119C35.4769 9.15807 35.5495 9.35131 35.7045 9.4634C35.7879 9.52396 35.8858 9.5542 35.9841 9.5542C36.0685 9.5542 36.153 9.53176 36.2285 9.4866L38.461 8.15169L40.6932 9.4866C40.8569 9.58445 41.0628 9.57548 41.2175 9.4634C41.3726 9.35131 41.4451 9.15807 41.4029 8.97119L40.8259 6.42962L42.783 4.7135C42.9265 4.58759 42.9811 4.3888 42.922 4.20678Z'
                                  fill='#F0C24B'
                                />
                                <path
                                  opacity='0.3'
                                  d='M53.9601 4.20678C53.9011 4.02517 53.74 3.89659 53.5502 3.87942L50.9611 3.64437L49.9379 1.24882C49.8623 1.07282 49.6904 0.959229 49.4991 0.959229C49.3078 0.959229 49.1358 1.07282 49.0608 1.24882L48.0376 3.64437L45.4481 3.87942C45.2583 3.89694 45.0975 4.02551 45.0381 4.20678C44.9791 4.38839 45.0336 4.58759 45.1772 4.7135L47.1343 6.42962L46.5572 8.97119C46.515 9.15807 46.5876 9.35131 46.7426 9.4634C46.826 9.52396 46.9239 9.5542 47.0221 9.5542C47.1066 9.5542 47.1911 9.53176 47.2666 9.4866L49.4991 8.15169L51.7313 9.4866C51.895 9.58445 52.1009 9.57548 52.2556 9.4634C52.4107 9.35131 52.4832 9.15807 52.441 8.97119L51.8639 6.42962L53.8211 4.7135C53.9646 4.58759 54.0192 4.3888 53.9601 4.20678Z'
                                  fill='#C4C4C4'
                                />
                              </svg>
                            </span>
                          </span>
                        </div>

                        <div className='taka-view'>
                          <span className='taka-view-span'>
                            {item.stroked_price}
                          </span>
                          <Link href={`/product/${item.id}`}>
                            <span className='taka-view-span2'>
                              View Details
                              <span>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='14'
                                  height='13'
                                  viewBox='0 0 14 13'
                                  fill='none'>
                                  <path
                                    d='M7.11654 2.36176L6.39608 3.08222L9.24728 5.93852H3.02881V6.96046H9.24728L6.39608 9.81676L7.11654 10.5372L11.2043 6.44949L7.11654 2.36176Z'
                                    fill='#156CFA'
                                  />
                                </svg>
                              </span>

                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              :
              <ProductCardLoader />
            }
          </div>

          <div>

          </div>
        </div>
        <div className='container featured-full-div'>
          <div className=''>
            <div className='featured-tags-div'>
              <h3 className='featured-tags'>
                More <span className='featured-tags-product'>Products</span>
              </h3>
              <div className='featured-tags-btn-div'>
                <Link href={"/product/allProducts"} className='featured-tags-btn'>
                  <span className="seeAllProdText"> See all Products{" "}</span>
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
                        d='M14.0909 7.26521C14.4968 6.8906 15.1294 6.9159 15.504 7.32172L18.7348 10.8217C19.0884 11.2047 19.0884 11.7952 18.7348 12.1782L15.504 15.6783C15.1294 16.0841 14.4968 16.1094 14.091 15.7348C13.6851 15.3602 13.6598 14.7276 14.0344 14.3217L15.716 12.5L6 12.5C5.44771 12.5 5 12.0523 5 11.5C5 10.9477 5.44771 10.5 6 10.5L15.716 10.5L14.0344 8.67829C13.6598 8.27247 13.6851 7.63981 14.0909 7.26521Z'
                        fill='white'
                      />
                    </svg>
                  </span>
                </Link>

              </div>
            </div>
          </div>
          <div>
            <div className='mt-2'>
              <div className='featured-p-div'>
                {products.length > 0 ?
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    navigation={false}
                    autoplay={{ delay: 500, disableOnInteraction: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                      // Define your breakpoints here
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}>
                    {products.map((item, i) => (
                      <SwiperSlide key={i}>
                        <div>
                          <div className='single-toy'>
                            <div className='toy-img-div'>
                              <img
                                className='toy-img'
                                src={item.thumbnail_image}
                                alt=''
                              />
                            </div>
                            <div className='card-t-div'>
                              <span className='card-text'>{item.name}</span>
                              <span className='card-text-rating'>
                                4.9/5{" "}
                                <span>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='54'
                                    height='10'
                                    viewBox='0 0 54 10'
                                    fill='none'>
                                    <path
                                      d='M9.80729 4.20678C9.74823 4.02517 9.58715 3.89659 9.39733 3.87942L6.80827 3.64437L5.78506 1.24882C5.70951 1.07282 5.53762 0.959229 5.34629 0.959229C5.15496 0.959229 4.983 1.07282 4.90794 1.24882L3.88472 3.64437L1.29525 3.87942C1.10543 3.89694 0.944689 4.02551 0.885293 4.20678C0.826239 4.38839 0.880777 4.58759 1.02434 4.7135L2.98147 6.42962L2.40441 8.97119C2.36219 9.15807 2.43472 9.35131 2.58978 9.4634C2.67313 9.52396 2.77105 9.5542 2.86931 9.5542C2.95375 9.5542 3.03826 9.53176 3.11374 9.4866L5.34629 8.15169L7.57843 9.4866C7.74218 9.58445 7.94808 9.57548 8.1028 9.4634C8.25786 9.35131 8.33039 9.15807 8.28817 8.97119L7.71112 6.42962L9.66824 4.7135C9.81174 4.58759 9.86634 4.3888 9.80729 4.20678Z'
                                      fill='#F0C24B'
                                    />
                                    <path
                                      d='M20.8454 4.20678C20.7863 4.02517 20.6252 3.89659 20.4354 3.87942L17.8464 3.64437L16.8231 1.24882C16.7476 1.07282 16.5757 0.959229 16.3844 0.959229C16.1931 0.959229 16.0211 1.07282 15.946 1.24882L14.9228 3.64437L12.3333 3.87942C12.1435 3.89694 11.9828 4.02551 11.9234 4.20678C11.8643 4.38839 11.9189 4.58759 12.0624 4.7135L14.0196 6.42962L13.4425 8.97119C13.4003 9.15807 13.4728 9.35131 13.6279 9.4634C13.7112 9.52396 13.8091 9.5542 13.9074 9.5542C13.9918 9.5542 14.0763 9.53176 14.1518 9.4866L16.3844 8.15169L18.6165 9.4866C18.7803 9.58445 18.9862 9.57548 19.1409 9.4634C19.2959 9.35131 19.3685 9.15807 19.3263 8.97119L18.7492 6.42962L20.7063 4.7135C20.8498 4.58759 20.9044 4.3888 20.8454 4.20678Z'
                                      fill='#F0C24B'
                                    />
                                    <path
                                      d='M31.8839 4.20678C31.8249 4.02517 31.6638 3.89659 31.474 3.87942L28.8849 3.64437L27.8617 1.24882C27.7862 1.07282 27.6143 0.959229 27.423 0.959229C27.2316 0.959229 27.0597 1.07282 26.9846 1.24882L25.9614 3.64437L23.3719 3.87942C23.1821 3.89694 23.0213 4.02551 22.962 4.20678C22.9029 4.38839 22.9574 4.58759 23.101 4.7135L25.0581 6.42962L24.4811 8.97119C24.4388 9.15807 24.5114 9.35131 24.6664 9.4634C24.7498 9.52396 24.8477 9.5542 24.946 9.5542C25.0304 9.5542 25.1149 9.53176 25.1904 9.4866L27.423 8.15169L29.6551 9.4866C29.8188 9.58445 30.0247 9.57548 30.1795 9.4634C30.3345 9.35131 30.4071 9.15807 30.3648 8.97119L29.7878 6.42962L31.7449 4.7135C31.8884 4.58759 31.943 4.3888 31.8839 4.20678Z'
                                      fill='#F0C24B'
                                    />
                                    <path
                                      d='M42.922 4.20678C42.863 4.02517 42.7019 3.89659 42.5121 3.87942L39.923 3.64437L38.8998 1.24882C38.8243 1.07282 38.6524 0.959229 38.461 0.959229C38.2697 0.959229 38.0977 1.07282 38.0227 1.24882L36.9995 3.64437L34.41 3.87942C34.2202 3.89694 34.0594 4.02551 34 4.20678C33.941 4.38839 33.9955 4.58759 34.1391 4.7135L36.0962 6.42962L35.5192 8.97119C35.4769 9.15807 35.5495 9.35131 35.7045 9.4634C35.7879 9.52396 35.8858 9.5542 35.9841 9.5542C36.0685 9.5542 36.153 9.53176 36.2285 9.4866L38.461 8.15169L40.6932 9.4866C40.8569 9.58445 41.0628 9.57548 41.2175 9.4634C41.3726 9.35131 41.4451 9.15807 41.4029 8.97119L40.8259 6.42962L42.783 4.7135C42.9265 4.58759 42.9811 4.3888 42.922 4.20678Z'
                                      fill='#F0C24B'
                                    />
                                    <path
                                      opacity='0.3'
                                      d='M53.9601 4.20678C53.9011 4.02517 53.74 3.89659 53.5502 3.87942L50.9611 3.64437L49.9379 1.24882C49.8623 1.07282 49.6904 0.959229 49.4991 0.959229C49.3078 0.959229 49.1358 1.07282 49.0608 1.24882L48.0376 3.64437L45.4481 3.87942C45.2583 3.89694 45.0975 4.02551 45.0381 4.20678C44.9791 4.38839 45.0336 4.58759 45.1772 4.7135L47.1343 6.42962L46.5572 8.97119C46.515 9.15807 46.5876 9.35131 46.7426 9.4634C46.826 9.52396 46.9239 9.5542 47.0221 9.5542C47.1066 9.5542 47.1911 9.53176 47.2666 9.4866L49.4991 8.15169L51.7313 9.4866C51.895 9.58445 52.1009 9.57548 52.2556 9.4634C52.4107 9.35131 52.4832 9.15807 52.441 8.97119L51.8639 6.42962L53.8211 4.7135C53.9646 4.58759 54.0192 4.3888 53.9601 4.20678Z'
                                      fill='#C4C4C4'
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='taka-view'>
                              <span className='taka-view-span'>
                                {item.stroked_price}
                              </span>

                              <Link href={`/product/${item.id}`}>
                                <span className='taka-view-span2'>
                                  View Details
                                  <span>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='14'
                                      height='13'
                                      viewBox='0 0 14 13'
                                      fill='none'>
                                      <path
                                        d='M7.11654 2.36176L6.39608 3.08222L9.24728 5.93852H3.02881V6.96046H9.24728L6.39608 9.81676L7.11654 10.5372L11.2043 6.44949L7.11654 2.36176Z'
                                        fill='#156CFA'
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  :
                  <ProductCardLoader />
                }
              </div>
              <div className='featured-p-div'>
                {products.length > 0 ?
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    navigation={false}
                    autoplay={{ delay: 500, disableOnInteraction: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                      // Define your breakpoints here
                      0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}>
                    {products.map((item, i) => (
                      <SwiperSlide key={i}>
                        <div>
                          <div className='single-toy'>
                            <div className='toy-img-div'>
                              <img
                                className='toy-img'
                                src={item.thumbnail_image}
                                alt=''
                              />
                            </div>
                            <div className='card-t-div'>
                              <span className='card-text'>{item.name}</span>
                              <span className='card-text-rating'>
                                4.9/5{" "}
                                <span>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='54'
                                    height='10'
                                    viewBox='0 0 54 10'
                                    fill='none'>
                                    <path
                                      d='M9.80729 4.20678C9.74823 4.02517 9.58715 3.89659 9.39733 3.87942L6.80827 3.64437L5.78506 1.24882C5.70951 1.07282 5.53762 0.959229 5.34629 0.959229C5.15496 0.959229 4.983 1.07282 4.90794 1.24882L3.88472 3.64437L1.29525 3.87942C1.10543 3.89694 0.944689 4.02551 0.885293 4.20678C0.826239 4.38839 0.880777 4.58759 1.02434 4.7135L2.98147 6.42962L2.40441 8.97119C2.36219 9.15807 2.43472 9.35131 2.58978 9.4634C2.67313 9.52396 2.77105 9.5542 2.86931 9.5542C2.95375 9.5542 3.03826 9.53176 3.11374 9.4866L5.34629 8.15169L7.57843 9.4866C7.74218 9.58445 7.94808 9.57548 8.1028 9.4634C8.25786 9.35131 8.33039 9.15807 8.28817 8.97119L7.71112 6.42962L9.66824 4.7135C9.81174 4.58759 9.86634 4.3888 9.80729 4.20678Z'
                                      fill='#F0C24B'
                                    />
                                    <path
                                      d='M20.8454 4.20678C20.7863 4.02517 20.6252 3.89659 20.4354 3.87942L17.8464 3.64437L16.8231 1.24882C16.7476 1.07282 16.5757 0.959229 16.3844 0.959229C16.1931 0.959229 16.0211 1.07282 15.946 1.24882L14.9228 3.64437L12.3333 3.87942C12.1435 3.89694 11.9828 4.02551 11.9234 4.20678C11.8643 4.38839 11.9189 4.58759 12.0624 4.7135L14.0196 6.42962L13.4425 8.97119C13.4003 9.15807 13.4728 9.35131 13.6279 9.4634C13.7112 9.52396 13.8091 9.5542 13.9074 9.5542C13.9918 9.5542 14.0763 9.53176 14.1518 9.4866L16.3844 8.15169L18.6165 9.4866C18.7803 9.58445 18.9862 9.57548 19.1409 9.4634C19.2959 9.35131 19.3685 9.15807 19.3263 8.97119L18.7492 6.42962L20.7063 4.7135C20.8498 4.58759 20.9044 4.3888 20.8454 4.20678Z'
                                      fill='#F0C24B'
                                    />
                                    <path
                                      d='M31.8839 4.20678C31.8249 4.02517 31.6638 3.89659 31.474 3.87942L28.8849 3.64437L27.8617 1.24882C27.7862 1.07282 27.6143 0.959229 27.423 0.959229C27.2316 0.959229 27.0597 1.07282 26.9846 1.24882L25.9614 3.64437L23.3719 3.87942C23.1821 3.89694 23.0213 4.02551 22.962 4.20678C22.9029 4.38839 22.9574 4.58759 23.101 4.7135L25.0581 6.42962L24.4811 8.97119C24.4388 9.15807 24.5114 9.35131 24.6664 9.4634C24.7498 9.52396 24.8477 9.5542 24.946 9.5542C25.0304 9.5542 25.1149 9.53176 25.1904 9.4866L27.423 8.15169L29.6551 9.4866C29.8188 9.58445 30.0247 9.57548 30.1795 9.4634C30.3345 9.35131 30.4071 9.15807 30.3648 8.97119L29.7878 6.42962L31.7449 4.7135C31.8884 4.58759 31.943 4.3888 31.8839 4.20678Z'
                                      fill='#F0C24B'
                                    />
                                    <path
                                      d='M42.922 4.20678C42.863 4.02517 42.7019 3.89659 42.5121 3.87942L39.923 3.64437L38.8998 1.24882C38.8243 1.07282 38.6524 0.959229 38.461 0.959229C38.2697 0.959229 38.0977 1.07282 38.0227 1.24882L36.9995 3.64437L34.41 3.87942C34.2202 3.89694 34.0594 4.02551 34 4.20678C33.941 4.38839 33.9955 4.58759 34.1391 4.7135L36.0962 6.42962L35.5192 8.97119C35.4769 9.15807 35.5495 9.35131 35.7045 9.4634C35.7879 9.52396 35.8858 9.5542 35.9841 9.5542C36.0685 9.5542 36.153 9.53176 36.2285 9.4866L38.461 8.15169L40.6932 9.4866C40.8569 9.58445 41.0628 9.57548 41.2175 9.4634C41.3726 9.35131 41.4451 9.15807 41.4029 8.97119L40.8259 6.42962L42.783 4.7135C42.9265 4.58759 42.9811 4.3888 42.922 4.20678Z'
                                      fill='#F0C24B'
                                    />
                                    <path
                                      opacity='0.3'
                                      d='M53.9601 4.20678C53.9011 4.02517 53.74 3.89659 53.5502 3.87942L50.9611 3.64437L49.9379 1.24882C49.8623 1.07282 49.6904 0.959229 49.4991 0.959229C49.3078 0.959229 49.1358 1.07282 49.0608 1.24882L48.0376 3.64437L45.4481 3.87942C45.2583 3.89694 45.0975 4.02551 45.0381 4.20678C44.9791 4.38839 45.0336 4.58759 45.1772 4.7135L47.1343 6.42962L46.5572 8.97119C46.515 9.15807 46.5876 9.35131 46.7426 9.4634C46.826 9.52396 46.9239 9.5542 47.0221 9.5542C47.1066 9.5542 47.1911 9.53176 47.2666 9.4866L49.4991 8.15169L51.7313 9.4866C51.895 9.58445 52.1009 9.57548 52.2556 9.4634C52.4107 9.35131 52.4832 9.15807 52.441 8.97119L51.8639 6.42962L53.8211 4.7135C53.9646 4.58759 54.0192 4.3888 53.9601 4.20678Z'
                                      fill='#C4C4C4'
                                    />
                                  </svg>
                                </span>
                              </span>
                            </div>

                            <div className='taka-view'>
                              <span className='taka-view-span'>
                                {item.stroked_price}
                              </span>
                              <Link href={`/product/${item.id}`}>
                                <span className='taka-view-span2'>
                                  View Details
                                  <span>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='14'
                                      height='13'
                                      viewBox='0 0 14 13'
                                      fill='none'>
                                      <path
                                        d='M7.11654 2.36176L6.39608 3.08222L9.24728 5.93852H3.02881V6.96046H9.24728L6.39608 9.81676L7.11654 10.5372L11.2043 6.44949L7.11654 2.36176Z'
                                        fill='#156CFA'
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  :
                  <ProductCardLoader />
                }
              </div>
              <div className='load-more-div'>
                <button className='load-more'>Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {productsMiddle.length > 0 && (
          <div className='  established-full-div'>
            <div className='container'>
              <div className='row children-mob'>
                {productsMiddle[0] != "undefined" && (
                  <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
                    <h4 className='ong-estab-tags'>{productsMiddle[0].name}</h4>
                    {/* <p className='ong-estab-text'>
                      {productsMiddle[0].description}
                    </p> */}

                    <span className='ong-estab-review'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='88'
                        height='14'
                        viewBox='0 0 88 14'
                        fill='none'>
                        <path
                          d='M3.61064 13.9468C3.22464 14.1316 2.78665 13.8077 2.86465 13.3943L3.69464 8.97977L0.171653 5.84761C-0.157346 5.55455 0.0136534 5.01883 0.454652 4.96097L5.35264 4.31139L7.53663 0.272991C7.73363 -0.090997 8.26663 -0.090997 8.46363 0.272991L10.6476 4.31139L15.5456 4.96097C15.9866 5.01883 16.1576 5.55455 15.8276 5.84761L12.3056 8.97977L13.1356 13.3943C13.2136 13.8077 12.7756 14.1316 12.3896 13.9468L7.99863 11.8413L3.60964 13.9468H3.61064Z'
                          fill='#FFC20F'
                        />
                        <path
                          d='M21.6106 13.9468C21.2246 14.1316 20.7866 13.8077 20.8646 13.3943L21.6946 8.97977L18.1717 5.84761C17.8427 5.55455 18.0137 5.01883 18.4547 4.96097L23.3526 4.31139L25.5366 0.272991C25.7336 -0.090997 26.2666 -0.090997 26.4636 0.272991L28.6476 4.31139L33.5456 4.96097C33.9866 5.01883 34.1576 5.55455 33.8276 5.84761L30.3056 8.97977L31.1356 13.3943C31.2136 13.8077 30.7756 14.1316 30.3896 13.9468L25.9986 11.8413L21.6096 13.9468H21.6106Z'
                          fill='#FFC20F'
                        />
                        <path
                          d='M39.6106 13.9468C39.2246 14.1316 38.7866 13.8077 38.8646 13.3943L39.6946 8.97977L36.1717 5.84761C35.8427 5.55455 36.0137 5.01883 36.4547 4.96097L41.3526 4.31139L43.5366 0.272991C43.7336 -0.090997 44.2666 -0.090997 44.4636 0.272991L46.6476 4.31139L51.5456 4.96097C51.9866 5.01883 52.1576 5.55455 51.8276 5.84761L48.3056 8.97977L49.1356 13.3943C49.2136 13.8077 48.7756 14.1316 48.3896 13.9468L43.9986 11.8413L39.6096 13.9468H39.6106Z'
                          fill='#FFC20F'
                        />
                        <path
                          d='M57.6106 13.9468C57.2246 14.1316 56.7866 13.8077 56.8646 13.3943L57.6946 8.97977L54.1717 5.84761C53.8427 5.55455 54.0137 5.01883 54.4547 4.96097L59.3526 4.31139L61.5366 0.272991C61.7336 -0.090997 62.2666 -0.090997 62.4636 0.272991L64.6476 4.31139L69.5456 4.96097C69.9866 5.01883 70.1576 5.55455 69.8276 5.84761L66.3056 8.97977L67.1356 13.3943C67.2136 13.8077 66.7756 14.1316 66.3896 13.9468L61.9986 11.8413L57.6096 13.9468H57.6106Z'
                          fill='#FFC20F'
                        />
                        <path
                          d='M75.6106 13.9468C75.2246 14.1316 74.7866 13.8077 74.8646 13.3943L75.6946 8.97977L72.1717 5.84761C71.8427 5.55455 72.0137 5.01883 72.4547 4.96097L77.3526 4.31139L79.5366 0.272991C79.7336 -0.090997 80.2666 -0.090997 80.4636 0.272991L82.6476 4.31139L87.5456 4.96097C87.9866 5.01883 88.1576 5.55455 87.8276 5.84761L84.3056 8.97977L85.1356 13.3943C85.2136 13.8077 84.7756 14.1316 84.3896 13.9468L79.9986 11.8413L75.6096 13.9468H75.6106Z'
                          fill='#FFC20F'
                        />
                      </svg>
                      (27 reviews)
                    </span>

                    <div className='row'>
                      <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                        <div className='ong-estab-prcolSiz'>Price:</div>
                        <div className='ong-estab-prcolSiz'>Color:</div>
                        <div className='ong-estab-prcolSiz'>Size:</div>
                      </div>
                      <div className='col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 '>
                        <div className='price-num-div'>
                          <div className='price-number'>
                            {" "}
                            {productsMiddle[0].main_price}
                          </div>

                          {/* <div>
                                  <span className='ms-1'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='16'
                                      height='16'
                                      fill='currentColor'
                                      class='bi bi-check-circle-fill'
                                      viewBox='0 0 16 16'>
                                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
                                    </svg>
                                  </span>
                                  <span className='ms-1'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='16'
                                      height='16'
                                      fill='green'
                                      class='bi bi-check-circle-fill'
                                      viewBox='0 0 16 16'>
                                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
                                    </svg>
                                  </span>
                                  <span className='ms-1'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='16'
                                      height='16'
                                      fill='red'
                                      class='bi bi-check-circle-fill'
                                      viewBox='0 0 16 16'>
                                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
                                    </svg>
                                  </span>
                                  <span className='ms-1'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='16'
                                      height='16'
                                      fill='white'
                                      class='bi bi-check-circle-fill'
                                      viewBox='0 0 16 16'>
                                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
                                    </svg>
                                  </span>
                                </div>
                                <div>
                                  <span className='ms-1'>
                                    {" "}
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='16'
                                      height='16'
                                      fill='currentColor'
                                      class='bi bi-check-circle-fill'
                                      viewBox='0 0 16 16'>
                                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
                                    </svg>
                                  </span>
                                  <span className='ms-1'>
                                    {" "}
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='16'
                                      height='16'
                                      fill='currentColor'
                                      class='bi bi-check-circle-fill'
                                      viewBox='0 0 16 16'>
                                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
                                    </svg>
                                  </span>
                                  <span className='ms-1'>
                                    {" "}
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='16'
                                      height='16'
                                      fill='currentColor'
                                      class='bi bi-check-circle-fill'
                                      viewBox='0 0 16 16'>
                                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
                                    </svg>
                                  </span>
                                  <span className='ms-1'>
                                    {" "}
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      width='16'
                                      height='16'
                                      fill='currentColor'
                                      class='bi bi-check-circle-fill'
                                      viewBox='0 0 16 16'>
                                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z' />
                                    </svg>
                                  </span>
                                </div> */}
                        </div>
                      </div>
                    </div>
                    <div className='add-to-cart-div'>
                      <button className='adds-to-cart'>Add to cart</button>
                      <div className='counting-div'>
                        <button className='count-bten' onClick={decrementCount}>
                          -
                        </button>
                        <div className='countss'>{count}</div>
                        <button className='count-bten' onClick={incrementCount}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 '>
                  <div className='long-estabilize-side-pic-full-div' data-aos="flip-right">
                    {productsMiddle[1] != "undefined" && (
                      <div className='long-estabilize-div'>
                        <img
                          className='toy-img-est'
                          src={Toythree.src}
                          alt=''
                        />
                        <h6>{productsMiddle[1]?.name} </h6>
                        <span>4.9/5</span>
                        <span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='80'
                            height='14'
                            viewBox='0 0 80 14'
                            fill='none'>
                            <path
                              d='M14.1571 5.19405C14.0691 4.92349 13.8291 4.73193 13.5463 4.70635L9.68912 4.35616L8.16474 0.787267C8.05219 0.525064 7.7961 0.355835 7.51106 0.355835C7.22602 0.355835 6.96984 0.525064 6.858 0.787267L5.33362 4.35616L1.47581 4.70635C1.19301 4.73244 0.953542 4.924 0.865053 5.19405C0.777075 5.46461 0.858325 5.76138 1.07221 5.94895L3.98794 8.50564L3.12824 12.2921C3.06534 12.5705 3.1734 12.8584 3.40441 13.0254C3.52857 13.1156 3.67446 13.1607 3.82085 13.1607C3.94665 13.1607 4.07255 13.1272 4.185 13.0599L7.51106 11.0712L10.8365 13.0599C11.0805 13.2057 11.3872 13.1924 11.6177 13.0254C11.8487 12.8584 11.9568 12.5705 11.8939 12.2921L11.0342 8.50564L13.9499 5.94895C14.1637 5.76138 14.2451 5.46522 14.1571 5.19405Z'
                              fill='#F0C24B'
                            />
                            <path
                              d='M30.6019 5.19405C30.5139 4.92349 30.2739 4.73193 29.9911 4.70635L26.1339 4.35616L24.6096 0.787267C24.497 0.525064 24.2409 0.355835 23.9559 0.355835C23.6708 0.355835 23.4147 0.525064 23.3028 0.787267L21.7784 4.35616L17.9206 4.70635C17.6378 4.73244 17.3984 4.924 17.3099 5.19405C17.2219 5.46461 17.3031 5.76138 17.517 5.94895L20.4328 8.50564L19.5731 12.2921C19.5102 12.5705 19.6182 12.8584 19.8492 13.0254C19.9734 13.1156 20.1193 13.1607 20.2657 13.1607C20.3915 13.1607 20.5174 13.1272 20.6298 13.0599L23.9559 11.0712L27.2813 13.0599C27.5253 13.2057 27.832 13.1924 28.0625 13.0254C28.2936 12.8584 28.4016 12.5705 28.3387 12.2921L27.479 8.50564L30.3947 5.94895C30.6085 5.76138 30.6899 5.46522 30.6019 5.19405Z'
                              fill='#F0C24B'
                            />
                            <path
                              d='M47.0472 5.19405C46.9592 4.92349 46.7193 4.73193 46.4365 4.70635L42.5793 4.35616L41.0549 0.787267C40.9423 0.525064 40.6862 0.355835 40.4012 0.355835C40.1162 0.355835 39.86 0.525064 39.7481 0.787267L38.2238 4.35616L34.3659 4.70635C34.0831 4.73244 33.8437 4.924 33.7552 5.19405C33.6672 5.46461 33.7485 5.76138 33.9623 5.94895L36.8781 8.50564L36.0184 12.2921C35.9555 12.5705 36.0635 12.8584 36.2945 13.0254C36.4187 13.1156 36.5646 13.1607 36.711 13.1607C36.8368 13.1607 36.9627 13.1272 37.0751 13.0599L40.4012 11.0712L43.7267 13.0599C43.9706 13.2057 44.2774 13.1924 44.5079 13.0254C44.7389 12.8584 44.8469 12.5705 44.784 12.2921L43.9243 8.50564L46.8401 5.94895C47.0538 5.76138 47.1352 5.46522 47.0472 5.19405Z'
                              fill='#F0C24B'
                            />
                            <path
                              d='M63.4915 5.19405C63.4036 4.92349 63.1636 4.73193 62.8808 4.70635L59.0236 4.35616L57.4992 0.787267C57.3867 0.525064 57.1306 0.355835 56.8455 0.355835C56.5605 0.355835 56.3043 0.525064 56.1925 0.787267L54.6681 4.35616L50.8103 4.70635C50.5275 4.73244 50.288 4.924 50.1995 5.19405C50.1115 5.46461 50.1928 5.76138 50.4067 5.94895L53.3224 8.50564L52.4627 12.2921C52.3998 12.5705 52.5079 12.8584 52.7389 13.0254C52.863 13.1156 53.0089 13.1607 53.1553 13.1607C53.2811 13.1607 53.407 13.1272 53.5195 13.0599L56.8455 11.0712L60.171 13.0599C60.4149 13.2057 60.7217 13.1924 60.9522 13.0254C61.1832 12.8584 61.2913 12.5705 61.2284 12.2921L60.3687 8.50564L63.2844 5.94895C63.4982 5.76138 63.5795 5.46522 63.4915 5.19405Z'
                              fill='#F0C24B'
                            />
                            <path
                              opacity='0.3'
                              d='M79.9364 5.19405C79.8484 4.92349 79.6084 4.73193 79.3256 4.70635L75.4684 4.35616L73.944 0.787267C73.8315 0.525064 73.5754 0.355835 73.2904 0.355835C73.0053 0.355835 72.7491 0.525064 72.6373 0.787267L71.1129 4.35616L67.2551 4.70635C66.9723 4.73244 66.7328 4.924 66.6444 5.19405C66.5564 5.46461 66.6376 5.76138 66.8515 5.94895L69.7672 8.50564L68.9075 12.2921C68.8446 12.5705 68.9527 12.8584 69.1837 13.0254C69.3079 13.1156 69.4538 13.1607 69.6001 13.1607C69.7259 13.1607 69.8519 13.1272 69.9643 13.0599L73.2904 11.0712L76.6158 13.0599C76.8598 13.2057 77.1665 13.1924 77.397 13.0254C77.628 12.8584 77.7361 12.5705 77.6732 12.2921L76.8135 8.50564L79.7292 5.94895C79.943 5.76138 80.0243 5.46522 79.9364 5.19405Z'
                              fill='#C4C4C4'
                            />
                          </svg>
                        </span>
                        <p>{productsMiddle[1]?.main_price}</p>
                      </div>
                    )}
                    <div className='long-estabilize-side-pic-div'>
                      {productsMiddle[2] != "undefined" && (
                        <div className='long-estabilizes-div'>
                          <img
                            className='toy-img-est'
                            src={ToyFour.src}
                            alt=''
                          />

                          <h6>{productsMiddle[2]?.name} </h6>
                          <span>4.9/5</span>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='80'
                              height='14'
                              viewBox='0 0 80 14'
                              fill='none'>
                              <path
                                d='M14.1571 5.19405C14.0691 4.92349 13.8291 4.73193 13.5463 4.70635L9.68912 4.35616L8.16474 0.787267C8.05219 0.525064 7.7961 0.355835 7.51106 0.355835C7.22602 0.355835 6.96984 0.525064 6.858 0.787267L5.33362 4.35616L1.47581 4.70635C1.19301 4.73244 0.953542 4.924 0.865053 5.19405C0.777075 5.46461 0.858325 5.76138 1.07221 5.94895L3.98794 8.50564L3.12824 12.2921C3.06534 12.5705 3.1734 12.8584 3.40441 13.0254C3.52857 13.1156 3.67446 13.1607 3.82085 13.1607C3.94665 13.1607 4.07255 13.1272 4.185 13.0599L7.51106 11.0712L10.8365 13.0599C11.0805 13.2057 11.3872 13.1924 11.6177 13.0254C11.8487 12.8584 11.9568 12.5705 11.8939 12.2921L11.0342 8.50564L13.9499 5.94895C14.1637 5.76138 14.2451 5.46522 14.1571 5.19405Z'
                                fill='#F0C24B'
                              />
                              <path
                                d='M30.6019 5.19405C30.5139 4.92349 30.2739 4.73193 29.9911 4.70635L26.1339 4.35616L24.6096 0.787267C24.497 0.525064 24.2409 0.355835 23.9559 0.355835C23.6708 0.355835 23.4147 0.525064 23.3028 0.787267L21.7784 4.35616L17.9206 4.70635C17.6378 4.73244 17.3984 4.924 17.3099 5.19405C17.2219 5.46461 17.3031 5.76138 17.517 5.94895L20.4328 8.50564L19.5731 12.2921C19.5102 12.5705 19.6182 12.8584 19.8492 13.0254C19.9734 13.1156 20.1193 13.1607 20.2657 13.1607C20.3915 13.1607 20.5174 13.1272 20.6298 13.0599L23.9559 11.0712L27.2813 13.0599C27.5253 13.2057 27.832 13.1924 28.0625 13.0254C28.2936 12.8584 28.4016 12.5705 28.3387 12.2921L27.479 8.50564L30.3947 5.94895C30.6085 5.76138 30.6899 5.46522 30.6019 5.19405Z'
                                fill='#F0C24B'
                              />
                              <path
                                d='M47.0472 5.19405C46.9592 4.92349 46.7193 4.73193 46.4365 4.70635L42.5793 4.35616L41.0549 0.787267C40.9423 0.525064 40.6862 0.355835 40.4012 0.355835C40.1162 0.355835 39.86 0.525064 39.7481 0.787267L38.2238 4.35616L34.3659 4.70635C34.0831 4.73244 33.8437 4.924 33.7552 5.19405C33.6672 5.46461 33.7485 5.76138 33.9623 5.94895L36.8781 8.50564L36.0184 12.2921C35.9555 12.5705 36.0635 12.8584 36.2945 13.0254C36.4187 13.1156 36.5646 13.1607 36.711 13.1607C36.8368 13.1607 36.9627 13.1272 37.0751 13.0599L40.4012 11.0712L43.7267 13.0599C43.9706 13.2057 44.2774 13.1924 44.5079 13.0254C44.7389 12.8584 44.8469 12.5705 44.784 12.2921L43.9243 8.50564L46.8401 5.94895C47.0538 5.76138 47.1352 5.46522 47.0472 5.19405Z'
                                fill='#F0C24B'
                              />
                              <path
                                d='M63.4915 5.19405C63.4036 4.92349 63.1636 4.73193 62.8808 4.70635L59.0236 4.35616L57.4992 0.787267C57.3867 0.525064 57.1306 0.355835 56.8455 0.355835C56.5605 0.355835 56.3043 0.525064 56.1925 0.787267L54.6681 4.35616L50.8103 4.70635C50.5275 4.73244 50.288 4.924 50.1995 5.19405C50.1115 5.46461 50.1928 5.76138 50.4067 5.94895L53.3224 8.50564L52.4627 12.2921C52.3998 12.5705 52.5079 12.8584 52.7389 13.0254C52.863 13.1156 53.0089 13.1607 53.1553 13.1607C53.2811 13.1607 53.407 13.1272 53.5195 13.0599L56.8455 11.0712L60.171 13.0599C60.4149 13.2057 60.7217 13.1924 60.9522 13.0254C61.1832 12.8584 61.2913 12.5705 61.2284 12.2921L60.3687 8.50564L63.2844 5.94895C63.4982 5.76138 63.5795 5.46522 63.4915 5.19405Z'
                                fill='#F0C24B'
                              />
                              <path
                                opacity='0.3'
                                d='M79.9364 5.19405C79.8484 4.92349 79.6084 4.73193 79.3256 4.70635L75.4684 4.35616L73.944 0.787267C73.8315 0.525064 73.5754 0.355835 73.2904 0.355835C73.0053 0.355835 72.7491 0.525064 72.6373 0.787267L71.1129 4.35616L67.2551 4.70635C66.9723 4.73244 66.7328 4.924 66.6444 5.19405C66.5564 5.46461 66.6376 5.76138 66.8515 5.94895L69.7672 8.50564L68.9075 12.2921C68.8446 12.5705 68.9527 12.8584 69.1837 13.0254C69.3079 13.1156 69.4538 13.1607 69.6001 13.1607C69.7259 13.1607 69.8519 13.1272 69.9643 13.0599L73.2904 11.0712L76.6158 13.0599C76.8598 13.2057 77.1665 13.1924 77.397 13.0254C77.628 12.8584 77.7361 12.5705 77.6732 12.2921L76.8135 8.50564L79.7292 5.94895C79.943 5.76138 80.0243 5.46522 79.9364 5.19405Z'
                                fill='#C4C4C4'
                              />
                            </svg>
                          </span>
                          <p>{productsMiddle[2]?.main_price}</p>
                        </div>
                      )}

                      {productsMiddle[3] != "undefined" && (
                        <div className='long-estabilizes-div'>
                          <img
                            className='toy-img-est'
                            src={ToyFive.src}
                            alt=''
                          />

                          <h6>{productsMiddle[3]?.name} </h6>
                          <span>4.9/5</span>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='80'
                              height='14'
                              viewBox='0 0 80 14'
                              fill='none'>
                              <path
                                d='M14.1571 5.19405C14.0691 4.92349 13.8291 4.73193 13.5463 4.70635L9.68912 4.35616L8.16474 0.787267C8.05219 0.525064 7.7961 0.355835 7.51106 0.355835C7.22602 0.355835 6.96984 0.525064 6.858 0.787267L5.33362 4.35616L1.47581 4.70635C1.19301 4.73244 0.953542 4.924 0.865053 5.19405C0.777075 5.46461 0.858325 5.76138 1.07221 5.94895L3.98794 8.50564L3.12824 12.2921C3.06534 12.5705 3.1734 12.8584 3.40441 13.0254C3.52857 13.1156 3.67446 13.1607 3.82085 13.1607C3.94665 13.1607 4.07255 13.1272 4.185 13.0599L7.51106 11.0712L10.8365 13.0599C11.0805 13.2057 11.3872 13.1924 11.6177 13.0254C11.8487 12.8584 11.9568 12.5705 11.8939 12.2921L11.0342 8.50564L13.9499 5.94895C14.1637 5.76138 14.2451 5.46522 14.1571 5.19405Z'
                                fill='#F0C24B'
                              />
                              <path
                                d='M30.6019 5.19405C30.5139 4.92349 30.2739 4.73193 29.9911 4.70635L26.1339 4.35616L24.6096 0.787267C24.497 0.525064 24.2409 0.355835 23.9559 0.355835C23.6708 0.355835 23.4147 0.525064 23.3028 0.787267L21.7784 4.35616L17.9206 4.70635C17.6378 4.73244 17.3984 4.924 17.3099 5.19405C17.2219 5.46461 17.3031 5.76138 17.517 5.94895L20.4328 8.50564L19.5731 12.2921C19.5102 12.5705 19.6182 12.8584 19.8492 13.0254C19.9734 13.1156 20.1193 13.1607 20.2657 13.1607C20.3915 13.1607 20.5174 13.1272 20.6298 13.0599L23.9559 11.0712L27.2813 13.0599C27.5253 13.2057 27.832 13.1924 28.0625 13.0254C28.2936 12.8584 28.4016 12.5705 28.3387 12.2921L27.479 8.50564L30.3947 5.94895C30.6085 5.76138 30.6899 5.46522 30.6019 5.19405Z'
                                fill='#F0C24B'
                              />
                              <path
                                d='M47.0472 5.19405C46.9592 4.92349 46.7193 4.73193 46.4365 4.70635L42.5793 4.35616L41.0549 0.787267C40.9423 0.525064 40.6862 0.355835 40.4012 0.355835C40.1162 0.355835 39.86 0.525064 39.7481 0.787267L38.2238 4.35616L34.3659 4.70635C34.0831 4.73244 33.8437 4.924 33.7552 5.19405C33.6672 5.46461 33.7485 5.76138 33.9623 5.94895L36.8781 8.50564L36.0184 12.2921C35.9555 12.5705 36.0635 12.8584 36.2945 13.0254C36.4187 13.1156 36.5646 13.1607 36.711 13.1607C36.8368 13.1607 36.9627 13.1272 37.0751 13.0599L40.4012 11.0712L43.7267 13.0599C43.9706 13.2057 44.2774 13.1924 44.5079 13.0254C44.7389 12.8584 44.8469 12.5705 44.784 12.2921L43.9243 8.50564L46.8401 5.94895C47.0538 5.76138 47.1352 5.46522 47.0472 5.19405Z'
                                fill='#F0C24B'
                              />
                              <path
                                d='M63.4915 5.19405C63.4036 4.92349 63.1636 4.73193 62.8808 4.70635L59.0236 4.35616L57.4992 0.787267C57.3867 0.525064 57.1306 0.355835 56.8455 0.355835C56.5605 0.355835 56.3043 0.525064 56.1925 0.787267L54.6681 4.35616L50.8103 4.70635C50.5275 4.73244 50.288 4.924 50.1995 5.19405C50.1115 5.46461 50.1928 5.76138 50.4067 5.94895L53.3224 8.50564L52.4627 12.2921C52.3998 12.5705 52.5079 12.8584 52.7389 13.0254C52.863 13.1156 53.0089 13.1607 53.1553 13.1607C53.2811 13.1607 53.407 13.1272 53.5195 13.0599L56.8455 11.0712L60.171 13.0599C60.4149 13.2057 60.7217 13.1924 60.9522 13.0254C61.1832 12.8584 61.2913 12.5705 61.2284 12.2921L60.3687 8.50564L63.2844 5.94895C63.4982 5.76138 63.5795 5.46522 63.4915 5.19405Z'
                                fill='#F0C24B'
                              />
                              <path
                                opacity='0.3'
                                d='M79.9364 5.19405C79.8484 4.92349 79.6084 4.73193 79.3256 4.70635L75.4684 4.35616L73.944 0.787267C73.8315 0.525064 73.5754 0.355835 73.2904 0.355835C73.0053 0.355835 72.7491 0.525064 72.6373 0.787267L71.1129 4.35616L67.2551 4.70635C66.9723 4.73244 66.7328 4.924 66.6444 5.19405C66.5564 5.46461 66.6376 5.76138 66.8515 5.94895L69.7672 8.50564L68.9075 12.2921C68.8446 12.5705 68.9527 12.8584 69.1837 13.0254C69.3079 13.1156 69.4538 13.1607 69.6001 13.1607C69.7259 13.1607 69.8519 13.1272 69.9643 13.0599L73.2904 11.0712L76.6158 13.0599C76.8598 13.2057 77.1665 13.1924 77.397 13.0254C77.628 12.8584 77.7361 12.5705 77.6732 12.2921L76.8135 8.50564L79.7292 5.94895C79.943 5.76138 80.0243 5.46522 79.9364 5.19405Z'
                                fill='#C4C4C4'
                              />
                            </svg>
                          </span>
                          <p>{productsMiddle[3]?.main_price}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default FeaturedMoreProduct;
