"use client";
import Navbar from "@/component/Navbar/Navbar";
import { useState } from "react";
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

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const page = () => {
  const [activeButton, setActiveButton] = useState("button1");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
                      <MySelfInp />
                    </div>
                  )}
                  {activeButton === "button2" && (
                    <div>
                      <GiftSomeInp />
                    </div>
                  )}
                </div>
                <div>
                  <div className='row'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-12'>
                      <input
                        className='checkout-input'
                        type='name'
                        placeholder=' Your Name'
                        alt=''
                      />
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-12'>
                      <input
                        className='checkout-input'
                        type='text'
                        name=''
                        id=''
                        placeholder='Street Address'
                      />
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-6'>
                      <input
                        className='checkout-input'
                        type='text'
                        name=''
                        id=''
                        placeholder='Apt or unit'
                      />
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-6'>
                      <input
                        className='checkout-input'
                        type='text'
                        name=''
                        id=''
                        placeholder='City'
                      />
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-6'>
                      <div>
                        <FormControl
                          sx={{
                            mt: 1,
                            width: "100%",
                            border: "1px solid white",
                          }}>
                          <InputLabel id='demo-multiple-name-label'>
                            State
                          </InputLabel>
                          <Select
                            className='selectinp'
                            labelId='demo-multiple-name-label'
                            id='demo-multiple-name'
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label='Name' />}
                            MenuProps={MenuProps}>
                            {names.map((name) => (
                              <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}>
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-6'>
                      <input
                        className='checkout-input'
                        type='text'
                        name=''
                        id=''
                        placeholder='Zip Code'
                      />
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-12'>
                      <input
                        className='checkout-input'
                        type='text'
                        name=''
                        id=''
                        placeholder='Phone Number'
                      />
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-12'>
                      <div>
                        <FormControl sx={{ width: "100%" }}>
                          <InputLabel id='demo-multiple-name-label'>
                            Pick up point
                          </InputLabel>
                          <Select
                            labelId='demo-multiple-name-label'
                            id='demo-multiple-name'
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label='Name' />}
                            MenuProps={MenuProps}>
                            {names.map((name) => (
                              <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}>
                                {name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-12'>
                      <textarea
                        className='checkout-text-input'
                        type='text'
                        name=''
                        id=''
                        placeholder='Add short note'
                      />
                      <div className='checkoutExtra-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          Extra Fast Delivery
                        </label>
                      </div>
                    </div>
                  </div>
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
                        <p>৳698.00</p>
                        <p>৳00.00</p>
                        <p>FREE</p>
                        <p>৳ 1160</p>
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
                      <p>৳1200.60</p>
                    </div>
                  </div>
                  <div className='checkout-btn-div'>
                    <button className='checkout-btn'>Check Out</button>
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
