"use client";
import LeftSidebar from "@/component/AllProduct/LeftSidebar";
import ProductsCard from "@/component/AllProduct/ProductsCard";
import Navbar from "@/component/Navbar/Navbar";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Footer from "@/component/Footer/Footer";

const page = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='AllProducts-div'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 '>
                            <div>
                                <LeftSidebar />
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8'>
                            <div>
                                <ProductsCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default page;
