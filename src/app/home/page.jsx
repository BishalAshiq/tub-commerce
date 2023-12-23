import Homebanner from "@/component/HomeAll/HomeMain";
import PopularProducts from "@/component/HomeAll/PopularProducts";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className='full-body'>
      <div>
        <Navbar />
      </div>
      <div>
        <Homebanner />
      </div>
      {/* <div>
        <PopularProducts />
      </div> */}
    </div>
  );
};

export default page;
