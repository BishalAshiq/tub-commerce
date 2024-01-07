"use client";
// import LeftSidebar from "@/component/AllProduct/LeftSidebar";
import ProductsCard from "@/component/AllProduct/ProductsCard";
import Navbar from "@/component/Navbar/Navbar";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useTheme } from "@mui/material/styles";
import { Checkbox, OutlinedInput, TextField } from "@mui/material";

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
const LeftSidebar = () => {
  const [activeAccordion, setActiveAccordion] = React.useState(null);

  const isAccordionExpanded = (accordionId) => {
    return activeAccordion === accordionId;
  };
  const handleAccordionClicks = (accordionId) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionId ? null : accordionId
    );
  };

  const [activeAccordion1, setActiveAccordion1] = React.useState(null);
  const isAccordionExpanded1 = (accordionId1) => {
    return activeAccordion1 === accordionId1;
  };
  const handleAccordionClicks1 = (accordionId1) => {
    setActiveAccordion1((prevAccordion1) =>
      prevAccordion1 === accordionId1 ? null : accordionId1
    );
  };
  const [activeAccordion2, setActiveAccordion2] = React.useState(null);
  const isAccordionExpanded2 = (accordionId2) => {
    return activeAccordion2 === accordionId2;
  };
  const handleAccordionClicks2 = (accordionId2) => {
    setActiveAccordion2((prevAccordion2) =>
      prevAccordion2 === accordionId2 ? null : accordionId2
    );
  };
  const [activeAccordion3, setActiveAccordion3] = React.useState(null);
  const isAccordionExpanded3 = (accordionId3) => {
    return activeAccordion3 === accordionId3;
  };
  const handleAccordionClicks3 = (accordionId3) => {
    setActiveAccordion3((prevAccordion3) =>
      prevAccordion3 === accordionId3 ? null : accordionId3
    );
  };

  // const toggleAccordion = (accordionId) => {
  //   if (isAccordionExpanded(accordionId)) {
  //     setActiveAccordion("");
  //   } else {
  //     setActiveAccordion(accordionId);
  //   }
  // };

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

  const CustomIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='10'
      viewBox='0 0 24 10'
      fill='none'>
      <path d='M10 10L0 0H20L10 10Z' fill='#171D22' />
    </svg>
  );
  return (
    <div>
      <div className=''>
        <h2>Filters</h2>
        <div>
          <div>
            <FormControl
              size='small'
              sx={{
                mt: 1,
                width: "100%",
                border: "1px solid white",
              }}>
              <InputLabel id='demo-multiple-name-label'>
                All Categories
              </InputLabel>
              <Select
                className='selectinp'
                labelId='demo-multiple-name-label'
                id='demo-multiple-name'
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label='Name' />}
                MenuProps={MenuProps}
                IconComponent={CustomIcon} // Use CustomIcon as the IconComponent
              >
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
          <div className='mt-4'>
            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <div className='accor-tag-div'>
                  {/* <h6 className='accordion-header'> */}
                  <div
                    className={`accordion-button ${
                      isAccordionExpanded(`collapse`) ? "" : "collapsed"
                    }`}
                    type='button'
                    data-bs-target={`#collapse`}
                    aria-expanded={isAccordionExpanded(`collapse`)}
                    aria-controls={`collapse`}
                    onClick={() => handleAccordionClicks(`collapse`)}>
                    <span className='kwy'> Special Offers</span>
                  </div>
                  {/* </h6> */}
                </div>

                <div
                  id={`collapse`}
                  className={`accordion-collapse collapse ${
                    isAccordionExpanded(`collapse`) ? "show" : ""
                  }`}
                  data-bs-parent='#accordionExample'>
                  <div className='accordion-body'>
                    <div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          FREE Shipping
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          On Sale
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          Best Sellers
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <div className='accor-tag-div'>
                  {/* <h6 className='accordion-header'> */}
                  <div
                    className={`accordion-button ${
                      isAccordionExpanded1(`collapse`) ? "" : "collapsed"
                    }`}
                    type='button'
                    data-bs-target={`#collapse`}
                    aria-expanded={isAccordionExpanded1(`collapse`)}
                    aria-controls={`collapse`}
                    onClick={() => handleAccordionClicks1(`collapse`)}>
                    <span className='kwy'>Price ( . )</span>
                  </div>
                  {/* </h6> */}
                </div>

                <div
                  id={`collapse`}
                  className={`accordion-collapse collapse ${
                    isAccordionExpanded1(`collapse`) ? "show" : ""
                  }`}
                  data-bs-parent='#accordionExample'>
                  <div className='accordion-body'>
                    <div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          Any Price
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          Under Taka 250
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          Taka 700 to 1000
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          Taka 7000 to 10000
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          Custom
                        </label>
                      </div>
                      <div className='low-high-div'>
                        <p className='lh-p'>Low</p>
                        <p>to</p>
                        <p className='lh-p'>High</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <div className='accor-tag-div'>
                  {/* <h6 className='accordion-header'> */}
                  <div
                    className={`accordion-button ${
                      isAccordionExpanded2(`collapse`) ? "" : "collapsed"
                    }`}
                    type='button'
                    data-bs-target={`#collapse`}
                    aria-expanded={isAccordionExpanded2(`collapse`)}
                    aria-controls={`collapse`}
                    onClick={() => handleAccordionClicks2(`collapse`)}>
                    <span className='kwy'> Age Group</span>
                  </div>
                  {/* </h6> */}
                </div>

                <div
                  id={`collapse`}
                  className={`accordion-collapse collapse ${
                    isAccordionExpanded2(`collapse`) ? "show" : ""
                  }`}
                  data-bs-parent='#accordionExample'>
                  <div className='accordion-body'>
                    <div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          0-2 Age
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          2-4 Age
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          4-6 Age
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          6-8 Age
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          8-10 Age
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          10-12 Age
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          12-14 Age
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          14-16 Age
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          16-18+ Age
                        </label>
                      </div>
                      {/* <div className='low-high-div'>
                        <p className='lh-p'>Low</p>
                        <p>to</p>
                        <p className='lh-p'>High</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <div className='accor-tag-div'>
                  {/* <h6 className='accordion-header'> */}
                  <div
                    className={`accordion-button ${
                      isAccordionExpanded3(`collapse`) ? "" : "collapsed"
                    }`}
                    type='button'
                    data-bs-target={`#collapse`}
                    aria-expanded={isAccordionExpanded3(`collapse`)}
                    aria-controls={`collapse`}
                    onClick={() => handleAccordionClicks3(`collapse`)}>
                    <span className='kwy'> Shop Location</span>
                  </div>
                  {/* </h6> */}
                </div>

                <div
                  id={`collapse`}
                  className={`accordion-collapse collapse ${
                    isAccordionExpanded3(`collapse`) ? "show" : ""
                  }`}
                  data-bs-parent='#accordionExample'>
                  <div className='accordion-body'>
                    <div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          Any Where
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          United States
                        </label>
                      </div>
                      <div className='checkoutwarp-text'>
                        <Checkbox {...label} />
                        <label
                          className='form-check-label'
                          for='flexCheckDefault'>
                          Custom
                        </label>
                      </div>

                      {/* <div className='low-high-div'>
                        <p className='lh-p'>Low</p>
                        <p>to</p>
                        <p className='lh-p'>High</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='text-area-btns-div'>
              <TextField
                size='small'
                className='text-filter-area'
                id='outlined-basic'
                label='Enter location'
                variant='outlined'
              />
              <div className='filter-btn-div'>
                <button className='cancelfiltter-btn'>Cancel</button>
                <button className='applyfiltter-btn'>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
