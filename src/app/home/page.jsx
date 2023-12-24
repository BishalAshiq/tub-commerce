import Homebanner from "@/component/HomeAll/HomeMain";
import PopularProducts from "@/component/HomeAll/PopularProducts";
import TopBruderToys from "@/component/HomeAll/TopBruderToys";
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
      <div>
        <TopBruderToys />
      </div>
    </div>
  );
};

export default page;
