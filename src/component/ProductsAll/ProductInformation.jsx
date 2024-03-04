"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRef, useState } from "react";
import ProductReviewer from "./ProductReviewer";
import MoreProduct from "./MoreProduct";
import Footer from "../Footer/Footer";
import ProductReview from "./ProductReview";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const ProductInformation = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className='container product-tagh5-div'>
        <div>
          <h5 className='product-tagh5'>About this product</h5>
          <p className='product-ptext' dangerouslySetInnerHTML={{ __html: product?.description }}>
            {/* {product?.description} */}
          </p>
        </div>

        {/* <div>
          <h5 className='product-tagh5'>Features</h5>
          <p className='product-ptext'>
            Work Pants; Service Pants; Genuine Dickies Pants; Women's Pants;
            Women's Work Pants
          </p>
        </div>

        <div>
          <h5 className='product-tagh5'>Country of Origin - Textiles</h5>
          <p className='product-ptext'>Imported</p>
        </div>
        <div>
          <h5 className='product-tagh5'>Toy Size</h5>
          <p className='product-ptext'>12 RG</p>
        </div>
        <div>
          <h5 className='product-tagh5'>Gender</h5>
          <p className='product-ptext'>Men</p>
        </div> */}
        <div>
          <h5 className='product-tagh5'>Brand</h5>
          <p className='product-ptext'>{product?.brand?.name}</p>
        </div>
        {/* <div>
          <h5 className='product-tagh5'>Model</h5>
          <p className='product-ptext'>AP401RBK 12 RG</p>
        </div> */}
        <div>
          <p className='product-ptext'>
            <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum
            consectetur sed do.
          </p>
        </div>
      </div>

      <div className='container'>
        <hr />
        <div className='prod-review-write-div'>
          <div>
            <p className='rat-text'>
              4.5
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='122'
                  height='18'
                  viewBox='0 0 122 18'
                  fill='none'>
                  <path
                    d='M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z'
                    fill='#FFD44D'
                  />
                  <path
                    d='M35 0L38 6L44 6.75L39.88 11.37L41 18L35 15L29 18L30.13 11.37L26 6.75L32 6L35 0Z'
                    fill='#FFD44D'
                  />
                  <path
                    d='M61 0L64 6L70 6.75L65.88 11.37L67 18L61 15L55 18L56.13 11.37L52 6.75L58 6L61 0Z'
                    fill='#FFD44D'
                  />
                  <path
                    d='M87 0L90 6L96 6.75L91.88 11.37L93 18L87 15L81 18L82.13 11.37L78 6.75L84 6L87 0Z'
                    fill='#FFD44D'
                  />
                  <path
                    d='M113 0L116 6L122 6.75L117.88 11.37L119 18L113 15L107 18L108.13 11.37L104 6.75L110 6L113 0Z'
                    fill='#FFD44D'
                  />
                </svg>
              </span>
            </p>
            <span className='prod-base-text'>Based on 27 Reviews</span>
          </div>
          <div>
            <button onClick={handleOpen} className='prod-base-rev-btn'>
              Write a Review
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'>
              <Box sx={style}>
                <div>
                  <ProductReview />
                </div>
              </Box>
            </Modal>
          </div>
        </div>
        <hr />
      </div>

      <div>
        <ProductReviewer />
      </div>

      <div>
        <MoreProduct />
      </div>
      <div>
        <Footer />
      </div>
    </div >
  );
};

export default ProductInformation;
