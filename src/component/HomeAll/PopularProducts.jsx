"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Toy from "../../../public/toy_1.png";
import Toytwo from "../../../public/toy_2.png";

const PopularProducts = () => {
  const sliderRef = useRef(null);

  const play = () => {
    sliderRef.current.slickPlay();
  };

  const pause = () => {
    sliderRef.current.slickPause();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='pop-full-div'>
      <div className='container pop-cont-div'>
        <div className='pop-tag-div'>
          <h1 className='pop-tag'>
            Popular <span className='pop-tag-color'>Products</span>
          </h1>
          <button className='pop-all-btn'>
            See all Products
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
          </button>
        </div>

        <div>
          <Slider ref={sliderRef} {...settings}>
            {/* Slides content */}
            <div className='single-toy'>
              <div className='toy-img-div'>
                <img className='toy-img' src={Toy.src} alt='' />
              </div>
              <div>
                <p className='card-text'>It is a long established</p>
                <p className='card-text-rating'>
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
                </p>
              </div>

              <div className='taka-view'>
                <p>৳ 80</p>
                <p>
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
                </p>
              </div>
            </div>
            <div>
              <h3>Slide 2</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            {/* Add more slides as needed */}
          </Slider>
          <div style={{ textAlign: "center" }}>
            <button className='button' onClick={play}>
              Play
            </button>
            <button className='button' onClick={pause}>
              Pause
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
