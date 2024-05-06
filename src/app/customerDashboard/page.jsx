"use client";
import Navbar from "@/component/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import customerAthor from "../../../public/cusomer-author.png";
import toyicon from "../../../public/order-table-icon.png";
import Link from "next/link";
import Footer from "@/component/Footer/Footer";
import axiosInstance from "@/utils/axios";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Modal from "@mui/material/Modal";

const theme = createTheme();

const page = () => {
  const [userInfo, setUserInfo] = useState({});
  const [order, setOrder] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    setUserInfo(user);

    axiosInstance.get('/completed-order').then((res) => {
      setOrder(res.data.data)
    })
  }, [])

  function formatDate(timestamp) {

    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
  }


  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : 800, // Adjust the width for mobile view
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='Customer-dashboard-full-div'>
        <div className='container'>
          <div className='pb-5'>
            <div className='row'>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <div className='individiual-info-card-div'>
                  <div className='individiual-Personalinfo-tags'>
                    <span className='individiual-Personalinfo'>
                      Personal Information
                    </span>
                    <div className='edit-info-text'>
                      <Link href='/'>Edit</Link>
                    </div>
                    <button className='seller-btn'>Become a Seller</button>
                  </div>
                  <div>
                    <div className='custodash-card-img-div'>
                      <div>
                        <img src={customerAthor.src} alt='' />
                      </div>
                      <div className='custodash-card-img-text-div'>
                        <h6 className='tags-def'>{userInfo.name}</h6>
                        <span className='custodash-card-text'>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 24 24'
                              fill='none'>
                              <path
                                d='M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7L12 11.88L4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V9.28L11.48 13.85C11.632 13.9378 11.8045 13.984 11.98 13.984C12.1555 13.984 12.328 13.9378 12.48 13.85L20 9.28V17Z'
                                fill='#6D6D6D'
                              />
                            </svg>
                          </span>
                          {userInfo.email}
                        </span>

                        <span className='custodash-card-text'>
                          <span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 24 24'
                              fill='none'>
                              <path
                                d='M19.4406 13C19.2206 13 18.9906 12.93 18.7706 12.88C18.3251 12.7818 17.8873 12.6515 17.4606 12.49C16.9967 12.3212 16.4867 12.33 16.0289 12.5146C15.5711 12.6992 15.1977 13.0466 14.9806 13.49L14.7606 13.94C13.7866 13.3982 12.8916 12.7252 12.1006 11.94C11.3154 11.149 10.6424 10.254 10.1006 9.27999L10.5206 8.99999C10.964 8.78291 11.3114 8.40952 11.496 7.95168C11.6806 7.49384 11.6894 6.9839 11.5206 6.51999C11.3618 6.09241 11.2315 5.65479 11.1306 5.20999C11.0806 4.98999 11.0406 4.75999 11.0106 4.52999C10.8892 3.82561 10.5202 3.18773 9.97021 2.73123C9.42021 2.27473 8.72529 2.0296 8.01059 2.03999H5.01059C4.57962 2.03594 4.15284 2.1248 3.7593 2.30052C3.36576 2.47624 3.0147 2.73469 2.73002 3.05827C2.44534 3.38186 2.23372 3.76298 2.10958 4.1757C1.98543 4.58842 1.95167 5.02305 2.01059 5.44999C2.54333 9.63937 4.45662 13.5319 7.44824 16.5126C10.4399 19.4934 14.3393 21.3925 18.5306 21.91H18.9106C19.648 21.9111 20.36 21.6405 20.9106 21.15C21.227 20.867 21.4797 20.5202 21.6521 20.1323C21.8244 19.7444 21.9126 19.3244 21.9106 18.9V15.9C21.8983 15.2054 21.6454 14.5365 21.1949 14.0077C20.7445 13.4788 20.1244 13.1226 19.4406 13ZM19.9406 19C19.9404 19.142 19.91 19.2823 19.8514 19.4116C19.7927 19.5409 19.7073 19.6563 19.6006 19.75C19.4889 19.8465 19.3582 19.9185 19.217 19.9616C19.0758 20.0046 18.9271 20.0177 18.7806 20C15.0355 19.5198 11.5568 17.8065 8.89331 15.1303C6.22978 12.4541 4.533 8.96733 4.07059 5.21999C4.05467 5.07351 4.06862 4.92532 4.11159 4.78438C4.15456 4.64344 4.22566 4.51268 4.32059 4.39999C4.4143 4.29332 4.52965 4.20783 4.65897 4.14921C4.78829 4.09058 4.9286 4.06017 5.07059 4.05999H8.07059C8.30314 4.05482 8.53021 4.13087 8.71273 4.27506C8.89525 4.41925 9.0218 4.62256 9.07059 4.84999C9.11059 5.12332 9.16059 5.39332 9.22059 5.65999C9.33611 6.18713 9.48985 6.70517 9.68059 7.20999L8.28059 7.85999C8.16089 7.91491 8.05321 7.99294 7.96375 8.08959C7.87428 8.18623 7.80479 8.2996 7.75926 8.42318C7.71373 8.54677 7.69306 8.67812 7.69844 8.80971C7.70381 8.9413 7.73513 9.07054 7.79059 9.18999C9.22979 12.2727 11.7078 14.7508 14.7906 16.19C15.0341 16.29 15.3071 16.29 15.5506 16.19C15.6753 16.1454 15.7899 16.0764 15.8878 15.9872C15.9856 15.8979 16.0648 15.7901 16.1206 15.67L16.7406 14.27C17.2576 14.4549 17.7852 14.6085 18.3206 14.73C18.5873 14.79 18.8573 14.84 19.1306 14.88C19.358 14.9288 19.5613 15.0553 19.7055 15.2378C19.8497 15.4204 19.9258 15.6474 19.9206 15.88L19.9406 19Z'
                                fill='#6D6D6D'
                              />
                            </svg>
                          </span>
                          {userInfo.phone}
                        </span>
                        <span className='custodash-card-text'>
                          <span>
                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0.909058C6.10908 0.909058 0 2.45453 0 5.63635V14.3636C0 17.5455 6.10908 19.0909 12 19.0909C17.8909 19.0909 24 17.5454 24 14.3636V5.63631C24 2.45448 17.8909 0.909058 12 0.909058ZM21.8182 14.3636C21.8182 15.4363 17.091 16.909 12 16.909C6.90905 16.909 2.1818 15.4363 2.1818 14.3636V12.8601C4.48341 14.1122 8.28478 14.7272 12 14.7272C15.7152 14.7272 19.5166 14.1122 21.8182 12.8601V14.3636ZM21.8182 9.99995C21.8182 11.0727 17.091 12.5454 12 12.5454C6.90905 12.5454 2.1818 11.0727 2.1818 9.99995V8.49648C4.48341 9.7486 8.28478 10.3636 12 10.3636C15.7152 10.3636 19.5166 9.7486 21.8182 8.49648V9.99995ZM12 8.18176C6.90909 8.18176 2.1818 6.70904 2.1818 5.63631C2.1818 4.56357 6.90905 3.09085 12 3.09085C17.091 3.09085 21.8182 4.56357 21.8182 5.63631C21.8182 6.70904 17.0909 8.18176 12 8.18176Z" fill="#7A7A7A" />
                            </svg>

                          </span>
                          300
                        </span>
                      </div>
                    </div>
                    <div className='custodash-card-order'>
                      <Link className='cust-card-link' href='/'>
                        Order Returns
                      </Link>
                      <Link className='cust-card-link' href='/'>
                        Cancelations
                      </Link>
                      <Link className='cust-card-link' href='/'>
                        My Reviews
                      </Link>
                      <Link href='/'>My Cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
                <div className='individiualsec-info-card-div'>
                  <div className='individiual-Personalinfo-tags '>
                    <span className='defaut-tags'>Default Address</span>
                    {/* <div className='edit-info-text'>
                      <Link href='/'>Edit</Link>
                    </div> */}
                    <div>
            <strong onClick={handleOpen} className='edit-info-text'>
            Edit
            </strong>
            <ThemeProvider theme={theme}> {/* Provide the theme */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <div className="edit-modal-inputs">
          <TextField
          label="Name"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />  
          <TextField
          label="Area"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />  
          <TextField
          label="Country"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />  
          <TextField
          label="Zip"
          type="number"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />  
          <TextField
          label="Number"
          type="number"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />  
          </div>
        </Box>
      </Modal>
    </ThemeProvider>
          </div>
                  </div>

                  <div className='tags-div'>
                    <h6 className='tags-def'>Ratul Ahmed</h6>
                    <p className='texts-sec-card'>Bheramara Bazar</p>
                    <p className='texts-sec-card'>
                      Khulna, Kushita, Bangladesh
                    </p>
                    <p className='texts-sec-card'>
                      ZIP - 5955
                    </p>
                    <p className='texts-sec-card'>(+880) 171 2033 000</p>
                  </div>
                  {/* <div className='custodash-card-order'>
                      <Link href='/'>Order Returns</Link>
                      <Link href='/'>Cancelations</Link>
                      <Link href='/'>My Reviews</Link>
                      <Link href='/'>My Cart</Link>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='table-head-tags-div'>
            <span className='ur-order-tags'>Your Order</span>

            <button className='track-btn'>
              <Link href={'/trackOrder'} >
                Track Your Order
              </Link>
            </button>
          </div>

          <div className="table-responsive">
            <table className='table table-borderless table-sm customer-dasboard-table'>
              <thead className='thead-tabl-customer-dash'>
                <tr>
                  <th className="tabl-nav" scope='col'>Order ID</th>
                  <th className="tabl-nav" scope='col'>Customer</th>
                  <th className="tabl-nav" scope='col'>No. Order</th>
                  <th className="tabl-nav" scope='col'>Order Date</th>
                  <th className="tabl-nav" scope='col'>Delivery Status</th>
                  <th className="tabl-nav" scope='col'>Total</th>
                  <th className="tabl-nav" scope='col'>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  order.map((item) => (


                    <tr>


                      <td>TUB-INV-{item.combined_order_id}</td>
                      <td>{item?.user?.name}</td>
                      <td className='d-flex gap-3'>
                        {item?.order_details.length}
                      </td>
                      <td>{formatDate(item.date)}</td>
                      <td ><span className="paid-custo-table">{item.delivery_status}</span></td>
                      <td>{item.grand_total}</td>
                      <td>
                        <Link href={`https://tub-backend.nodetechit.com/invoice/${item.combined_order_id}`}>View Invoice</Link>
                      </td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div >
  );
};

export default page;
