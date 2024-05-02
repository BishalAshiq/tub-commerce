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
                <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <div className='singl-small-full-product-div'>
                    {product?.photos.length > 0 &&
                      product.photos.map((item) => (
                        <div
                          className='singl-small-img-product-div'
                          onClick={() => handleSmallImageClick(item.path)}>
                          <img src={item.path} alt='' />
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
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
              <div>
                <h4 className='product-estab-tags'>{product?.name}</h4>
                <p className='product-estab-text'>{product?.brand?.name}</p>

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
