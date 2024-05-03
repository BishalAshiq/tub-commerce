"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axios";
import SingleReviewCard from "./SingleReviewCard";
const ProductReviewer = ({ productId }) => {
  const [review, setReview] = useState([]);
  const [nextPage, setNextPage] = useState();
  useEffect(() => {
    axiosInstance.get('/reviews/product/' + productId).then((res) => {
      if (res.data.status == 200) {
        setReview(res.data.data);
        setNextPage(res.data.links.next);
      }
    })
  }, [productId])
  return (
    <div className='container'>
      <div className='reviwer-card-div'>
        {
          review.length > 0 ?
            review.map((item) => (
              <SingleReviewCard item={item} />
            )) :
            <>
              No Review Yet
            </>
        }



      </div>
      {
        nextPage != null &&
        <div className='loadMore-btn-div'>
          <button className='loadMore-btn'>Load More</button>
        </div>
      }

    </div>
  );
};

export default ProductReviewer;
