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
import toast from "react-hot-toast";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme();
// const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: isMobile ? '90%' : 800, // Adjust the width for mobile view
//   bgcolor: 'background.paper',
//   border: 'none',
//   boxShadow: 24,
//   p: 4,
// };

const ProductInformation = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token == null) {
        toast.error("Please login first");
      } else {
        setOpen(true)
      }
    }
  };
  const handleClose = () => setOpen(false);


  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : 800, // Adjust the width for mobile view
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };
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
          <h5 className='product-tagh5'>Note</h5>
          <p className='product-ptext' dangerouslySetInnerHTML={{ __html: product?.description }}>
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
              <Stack spacing={1}>
                        <Rating name="size-small" defaultValue={2} size="small" />

                    </Stack>
              </span>
            </p>
            <span className='prod-base-text'>Based on 27 Reviews</span>
          </div>
          <div>
            <button onClick={handleOpen} className='prod-base-rev-btn'>
              Write a Review
            </button>
            <ThemeProvider theme={theme}> {/* Provide the theme */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <div>
            <ProductReview productId={product?.id} handleClose={handleClose} />
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
          </div>
        </div>
        <hr />
      </div>

      <div>
        <ProductReviewer productId={product?.id} />
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
