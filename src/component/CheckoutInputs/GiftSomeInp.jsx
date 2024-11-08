"use client";
import Navbar from "@/component/Navbar/Navbar";
import { useState } from "react";
import React from "react";
import styles from "../../app/checkout/style.module.css";
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
// import GiftSomeInp from "@/component/CheckoutInputs/GiftSomeInp";

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
const GiftSomeInp = () => {
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
        <div>
          {" "}
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
                  placeholder='Gift Receiver Street Address'
                />
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-6'>
                <input
                  className='checkout-input'
                  type='text'
                  name=''
                  id=''
                  placeholder='Gift Receiver Apt or unit'
                />
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-6'>
                <input
                  className='checkout-input'
                  type='text'
                  name=''
                  id=''
                  placeholder='Gift Receiver City'
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
                      Gift Receiver State
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
                  placeholder='Gift Receiver Zip Code'
                />
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-6'>
                <input
                  className='checkout-input'
                  type='text'
                  name=''
                  id=''
                  placeholder='Gift Receiver Phone Number'
                />
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-6'>
                <input
                  className='checkout-input'
                  type='text'
                  name=''
                  id=''
                  placeholder='Your Phone Number'
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
                  <label className='form-check-label' for='flexCheckDefault'>
                    Extra Fast Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftSomeInp;
