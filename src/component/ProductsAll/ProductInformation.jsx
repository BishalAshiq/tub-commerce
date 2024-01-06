import React from "react";
import ProductReviewer from "./ProductReviewer";
import MoreProduct from "./MoreProduct";
import Footer from "../Footer/Footer";

const ProductInformation = () => {
  return (
    <div>
      <div className='container product-tagh5-div'>
        <div>
          <h5 className='product-tagh5'>About this product</h5>
          <p className='product-ptext'>
            Redefine your expectation of comfort and style at work with Genuine
            Dickies Women’s Stretch Twill Straight Leg Pants. The straight
            construction sits close to the body through the hip and thigh,
            providing the perfect feminine fit and clean appearance for the
            ultimate professional look. The stretch twill fabrication is rinsed
            for extra softness and offers premium stretch and added comfort,
            keeping you moving freely through your dynamic workday. Plus, the
            built-in tummy panel means the days of a gapping waistband are
            behind you. With two functional rear welt pockets, you’ll find
            storage for your cards or cellphone, making these pants a closet
            essential that will stand up to every shift.
          </p>
        </div>

        <div>
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
        </div>
        <div>
          <h5 className='product-tagh5'>Brand</h5>
          <p className='product-ptext'>Tayson</p>
        </div>
        <div>
          <h5 className='product-tagh5'>Model</h5>
          <p className='product-ptext'>AP401RBK 12 RG</p>
        </div>
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
            <button className='prod-base-rev-btn'>Write a Review</button>
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
    </div>
  );
};

export default ProductInformation;
