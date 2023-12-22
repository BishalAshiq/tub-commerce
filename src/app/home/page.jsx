import Homebanner from "@/component/HomeAll/Homebanner";
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
    </div>
  );
};

export default page;
