"use client";
import Navbar from "@/component/Navbar/Navbar";
import { useEffect, useState } from "react";
import React from "react";
import styles from "./style.module.css";
import Bikashlogo from "../../../public/bkash.png";
import CashOnDeliv from "../../../public/cashOnDeliv.png";
import Nogod from "../../../public/nogod.png";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox, FormControlLabel } from "@mui/material";
import Footer from "@/component/Footer/Footer";
import MySelfInp from "@/component/CheckoutInputs/MySelfInp";
import GiftSomeInp from "@/component/CheckoutInputs/GiftSomeInp";
import axiosInstance from "@/utils/axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const page = () => {
  const router = useRouter();

  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };



  const [userInfo, setUserInfo] = useState({});
  const [state, setState] = useState();
  const [pickupPoint, setPickUpPoint] = useState();
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    setUserInfo(user);
    axiosInstance.get('/states').then((res) => {
      setState(res.data.data);
    })
    axiosInstance.get('/pickup-list').then((res) => {
      setPickUpPoint(res.data.data);
    })





    const subtotal = cartItems.reduce(
      (acc, item) => acc + 1 * item?.calculable_price,
      0
    );
    const discount = 0;
    const tax = 0;
    let calculatedTotal = subtotal - discount + tax;

    setTotal(calculatedTotal);

  }, [])



  const [formData, setFormData] = useState({
    address: "",
    state: "",
    city: "",
    postal_code: "",
    phone: "",
    unit: "",
    short_note: "",
    extra_fast_delivery: "",
    cart_item: cartItems
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOrder = (e) => {
    axiosInstance.post('/order/store', formData).then((res) => {
      localStorage.removeItem("cart");
      toast.success(res.data.message);
      router.push('/customerDashboard');

    })
  }


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='Checkout-full-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8'>
              <div className='p-4'>
                <h5>Billing Address</h5>
                <div className='cart-head-button-div'>
                  <div className='active-button-div'>
                    <button
                      className={
                        activeButton === "button1"
                          ? styles.active
                          : styles.inactive
                      }
                      onClick={() => handleClick("button1")}>
                      Myself
                    </button>
                    <button
                      className={
                        activeButton === "button2"
                          ? styles.active
                          : styles.inactive
                      }
                      onClick={() => handleClick("button2")}>
                      Gift Someone
                    </button>
                  </div>
                  <div className='checkoutwarp-text'>
                    <Checkbox {...label} />
                    <label className='form-check-label' for='flexCheckDefault'>
                      Wrap Product
                    </label>
                  </div>
                </div>

                <div>
                  {activeButton === "button1" && (
                    <div>
                      <MySelfInp userInfo={userInfo} state={state} pickupPoint={pickupPoint} formData={formData} callback={handleInputChange} />
                    </div>
                  )}
                  {activeButton === "button2" && (
                    <div>
                      <GiftSomeInp userInfo={userInfo} />
                    </div>
                  )}
                </div>

              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4'>
              <div className='p-4'>
                <h5 className='add-class'>Add a Payment Method</h5>
                <div className='image-container'>
                  <div className='image-wrapper'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='flexRadioDefault'
                      id='flexRadioDefault1'
                    />
                    <img src={Bikashlogo.src} alt='' />
                  </div>
                  <div className='image-wrapper'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='flexRadioDefault'
                      id='flexRadioDefault2'
                    />
                    <img src={Nogod.src} alt='' />
                  </div>
                  <div className='image-wrapper'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='flexRadioDefault'
                      id='flexRadioDefault3'
                    />
                    <img src={CashOnDeliv.src} alt='' />
                  </div>
                </div>
                <div>
                  <h6 className='oth-text'>Other Payments Method</h6>
                </div>

                <div>
                  <h5>Order Summury</h5>
                  <hr />

                  <div className='row'>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                      <div>
                        <p>Original Price</p>
                        <br />
                        <p>Savings</p>
                        <p>Shipping</p>
                        <p>Estimated Sales Tax</p>
                      </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                      <div>
                        <span>৳ {total.toFixed(2)}</span>
                        {/* <p>৳ 00.00</p> */}
                        <p>FREE</p>
                        <p>৳ 00.00</p>
                      </div>
                    </div>

                    <hr />
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                      <div className='checkoutterm-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          I agree to the <strong>Terms & Condition</strong>
                        </label>
                      </div>
                    </div>
                    <hr />
                    <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                      <div>
                        <p>Total</p>
                      </div>
                    </div>
                    <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                      <span>৳ {total}</span>
                    </div>
                  </div>
                  <div className='checkout-btn-div'>
                    <button className='checkout-btn' type="button" onClick={handleOrder}>Check Out</button>
                  </div>
                </div>
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
