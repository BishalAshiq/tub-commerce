"use client";
import Navbar from "@/component/Navbar/Navbar";
import React, { Component, useEffect } from "react";
import { useRef, useState } from "react";
import ProductInformation from "@/component/ProductsAll/ProductInformation";
import { useParams } from "next/navigation";
import axiosInstance from "@/utils/axios";
import { useDispatch } from "react-redux";
import { addToCartFn } from "@/redux/features/cart/cartSlice";
import toast from "react-hot-toast";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const page = () => {

  const params = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axiosInstance.get("/products/" + params.product_id).then((res) => {
      setProduct(res.data.data[0]);
    });
  }, [params.product_id]);

  useEffect(() => {
    if (product && product.thumbnail_image) {
      setSelectedImage(product.thumbnail_image);
    }
  }, [product]);

  const handleSmallImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    axiosInstance.get("/products/" + params.product_id).then((res) => {
      setProduct(res.data.data[0]);
    });
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCartFn({
      product_id: product.id,
      calculable_price: product.calculable_price,
      thumbnail_image: product.thumbnail_image,
      name: product.name,
      quantity: 1,
      shipping_type: "",
      variation: "",
      shipping_cost: 0,
      discount: 0,
    }));
    toast.success("Product added to cart");
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='product-single-header-div'>
        <div className='container'>
          <div className='row '>
            <div className='col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 '>
              <div className='row'>
                <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 single-small-pic-div'>
                  <div className='singl-small-full-product-div'>
                    {product?.photos.length > 0 &&
                      product.photos.map((item) => (
                        <div
                          className='singl-small-img-product-div'
                          onClick={() => handleSmallImageClick(item.path)}>
                          <img  src={item.path} alt='' />
                        </div>
                      ))}

                    {/* <div className='singl-small-img-product-div'>
                      <img src={singleProductptwo.src} alt='' />
                    </div>
                    <div className='singl-small-img-product-div'>
                      <img src={singleProductpthree.src} alt='' />
                    </div>
                    <div className='singl-small-img-product-div'>
                      <img src={singleProductpfour.src} alt='' />
                    </div>
                    <div className='singl-small-text-product-div'>
                      <p>+2</p>
                    </div> */}
                  </div>
                </div>
                <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
                  <div className='singl-big-product-div'>
                    <img
                      className='singl-big-product'
                      src={
                        selectedImage ||
                        (product && product.thumbnail_image) ||
                        ""
                      }
                      alt=''
                    />
                  </div>
                  <div className='singl-small-mob-full-product-div'>
                    {product?.photos.length > 0 &&
                      product.photos.map((item) => (
                        <div
                          className='singl-small-img-product-div'
                          onClick={() => handleSmallImageClick(item.path)}>
                          <img className="singl-small-img" src={item.path} alt='' />
                        </div>
                      ))}
                      </div>
                </div>
             
              </div>
            </div>
            {/* <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                  <div className='singl-small-mob-full-product-div'>
                    {product?.photos.length > 0 &&
                      product.photos.map((item) => (
                        <div
                          className='singl-small-img-product-div'
                          onClick={() => handleSmallImageClick(item.path)}>
                          <img src={item.path} alt='' />
                        </div>
                      ))}
                  </div>
                </div> */}
            <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
              <div>
                <h4 className='product-estab-tags'>{product?.name}</h4>
                <p className='product-estab-text'>{product?.brand?.name}</p>

                <span className='ong-estab-review'>
                <Stack spacing={1}>
                        <Rating name="size-small" defaultValue={2} size="small" onChange={(e) => {
                setReview(1)
              }}/>

                    </Stack>
                  (27 reviews)
                </span>

                <div className='row'>
                  <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                    <div className='ong-estab-prcolSiz'>Price:</div>
                    <div className='ong-estab-prcolSiz'>Color:</div>
                    <div className='ong-estab-prcolSiz'>Size:</div>
                  </div>
                  <div className='col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 '>
                    <div className='price-number'>
                      {" "}
                      {product?.stroked_price}
                    </div>
                    <div className='select-icons'>
                      <span>
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
                      <span>
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
                      <span>
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
                      <span>
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
                    <div className='select-icon'>
                      <span>
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
                      <span>
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
                      <span>
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
                      <span>
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
                    </div>
                  </div>
                </div>
                <div className='Product-add-to-cart-div'>
                  <div className='product-counting-div'>
                    <button className='count-bten' onClick={decrementCount}>
                      -
                    </button>
                    <div className='mt-3'>{count}</div>
                    <button className='count-bten' onClick={incrementCount}>
                      +
                    </button>
                  </div>
                  <button
                    type='button'
                    className='product-add-to-cart'
                    onClick={handleAddToCart}>
                    Add to cart
                  </button>
                </div>

                <div className='pro-che-aWhi-div'>
                  <button className='pro-che-aWhi'>Check Out</button>
                  <button className='pro-che-aWhi'>Ad to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ProductInformation product={product} />
        </div>
      </div>
    </div>
  );
};

export default page;
