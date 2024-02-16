"use client";
import Navbar from "@/component/Navbar/Navbar";
import React, { useState } from "react";
import logSignLogo from "../../../public/logiSignUpLogo.png";
import GoogG from "../../../public/GoogG.png";
import Footer from "@/component/Footer/Footer";
import Link from "next/link";
import axiosInstance from "@/utils/axios";
import toast from "react-hot-toast";

const page = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    password: "",
    location: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;


    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const submitRegistration = (e) => {
    e.preventDefault();
    if (formData.name == "") {
      toast.error("Name added is required");
    }
    else if (formData.mobile_number == "") {
      toast.error("Mobile Number is required");
    }
    else if (formData.email == "") {
      toast.error("Email added is required");
    }
    else if (formData.password == "") {
      toast.error("Password added is required");
    }
    else {
      axiosInstance.post(`/auth/signup`, formData).then((res) => {
        if (res.data.status === 200) {
          toast.success(res.data.message);
        } else {
          toast.error("Something went wrong!");
        }
      });
    }
  };


  const handleLogin = async (e) => {
    setError("");
    e.preventDefault();

    axiosInstance.post('api/login', formData, {
      withCredentials: true,
    }).then(res => {

      if (res.data.status == 200) {
        // router.push("/newsfeed");


        // setCookiesAuthRender(res.data)
        if (typeof window !== "undefined") {

          localStorage.setItem('refreshToken', res.data.refreshToken);
          localStorage.setItem('userInfo', JSON.stringify(res.data.user));
          localStorage.setItem('fullname', res.data.user[0].first_name + ' ' + res.data.user[0].last_name);
          localStorage.setItem('username', res.data.user[0].username);
          localStorage.setItem('userId', res.data.user[0]._id);
        }

        // setTimeout(() => {
        //   window.location.reload();
        // }, 3500)


        // if (typeof window === "undefined") {
        //   // Redirect to the newsfeed page if the login is successful
        //   return {
        //     redirect: {
        //       destination: "/newsfeed",
        //       permanent: false,
        //     },
        //   };
        // }
        window.location.replace("/newsfeed");
        // window.location.reload();


      } else if (res.data.status == 401) {
        toast.error("Login failed. Please check your email and password.", {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
      }
      else {
        toast.error("Login failed. Invalid Credentials.", {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
      }
    })


  };

  console.log(formData);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='Sign-full-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
              <div className='Sig-full-div'>
                <form onSubmit={submitRegistration} >
                  <div className='login-input-lebl'>
                    <lebel className='logsign-lebel'>Name</lebel>
                    <div className='logSign-inp-div'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'>
                          <path
                            d='M10.0001 1.66663C8.38385 1.6697 6.80336 2.14272 5.45115 3.02807C4.09893 3.91343 3.03337 5.17291 2.38424 6.6531C1.73511 8.13329 1.53044 9.77031 1.79514 11.3648C2.05985 12.9592 2.78252 14.4423 3.87512 15.6333C4.65547 16.4792 5.60257 17.1542 6.65674 17.616C7.7109 18.0777 8.84927 18.3161 10.0001 18.3161C11.151 18.3161 12.2893 18.0777 13.3435 17.616C14.3977 17.1542 15.3448 16.4792 16.1251 15.6333C17.2177 14.4423 17.9404 12.9592 18.2051 11.3648C18.4698 9.77031 18.2651 8.13329 17.616 6.6531C16.9669 5.17291 15.9013 3.91343 14.5491 3.02807C13.1969 2.14272 11.6164 1.6697 10.0001 1.66663ZM10.0001 16.6666C8.27384 16.664 6.61588 15.9919 5.37512 14.7916C5.75183 13.8746 6.39265 13.0902 7.21617 12.5382C8.03968 11.9862 9.00871 11.6915 10.0001 11.6915C10.9915 11.6915 11.9606 11.9862 12.7841 12.5382C13.6076 13.0902 14.2484 13.8746 14.6251 14.7916C13.3844 15.9919 11.7264 16.664 10.0001 16.6666ZM8.33346 8.33329C8.33346 8.00366 8.4312 7.68142 8.61434 7.40734C8.79748 7.13326 9.05777 6.91964 9.36232 6.79349C9.66686 6.66735 10.002 6.63434 10.3253 6.69865C10.6486 6.76296 10.9455 6.92169 11.1786 7.15478C11.4117 7.38787 11.5705 7.68484 11.6348 8.00814C11.6991 8.33144 11.6661 8.66655 11.5399 8.9711C11.4138 9.27564 11.2002 9.53594 10.9261 9.71908C10.652 9.90221 10.3298 9.99996 10.0001 9.99996C9.55809 9.99996 9.13417 9.82436 8.82161 9.5118C8.50905 9.19924 8.33346 8.77532 8.33346 8.33329ZM15.7585 13.3333C15.0139 12.0598 13.868 11.0691 12.5001 10.5166C12.9244 10.0355 13.2009 9.44217 13.2963 8.80782C13.3918 8.17347 13.3022 7.52505 13.0382 6.94037C12.7743 6.35569 12.3473 5.85959 11.8084 5.5116C11.2695 5.1636 10.6416 4.9785 10.0001 4.9785C9.35863 4.9785 8.73076 5.1636 8.19187 5.5116C7.65297 5.85959 7.22593 6.35569 6.962 6.94037C6.69806 7.52505 6.60844 8.17347 6.7039 8.80782C6.79935 9.44217 7.07582 10.0355 7.50012 10.5166C6.13229 11.0691 4.98635 12.0598 4.24179 13.3333C3.64841 12.3225 3.33489 11.172 3.33346 9.99996C3.33346 8.23185 4.03583 6.53616 5.28608 5.28591C6.53632 4.03567 8.23201 3.33329 10.0001 3.33329C11.7682 3.33329 13.4639 4.03567 14.7142 5.28591C15.9644 6.53616 16.6668 8.23185 16.6668 9.99996C16.6654 11.172 16.3518 12.3225 15.7585 13.3333Z'
                            fill='#156CFA'
                          />
                        </svg>
                      </span>
                      <input
                        className='logSign-input'
                        type='text'
                        placeholder='Enter your full name'
                        alt=''
                        name="name"
                        onChange={handleInputChange}

                      />
                    </div>
                  </div>
                  <div className='login-input-lebl'>
                    <lebel className='logsign-lebel'>Email</lebel>
                    <div className='logSign-inp-div'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'>
                          <g clip-path='url(#clip0_138_540)'>
                            <path
                              d='M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
                              stroke='#156CFA'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M3 7L12 13L21 7'
                              stroke='#156CFA'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_138_540'>
                              <rect width='24' height='24' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <input
                        className='logSign-input'
                        type='email'
                        placeholder='Enter your email'

                        name="email"
                        onChange={handleInputChange}
                        alt=''
                      />
                    </div>
                  </div>

                  <div className='login-input-lebl'>
                    <lebel className='logsign-lebel'>Mobile Number</lebel>
                    <div className='logSign-inp-div'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'>
                          <g clip-path='url(#clip0_138_540)'>
                            <path
                              d='M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
                              stroke='#156CFA'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M3 7L12 13L21 7'
                              stroke='#156CFA'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_138_540'>
                              <rect width='24' height='24' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <input
                        className='logSign-input'
                        type='text'
                        placeholder='Enter Your Mobile Number'
                        alt=''
                        onChange={handleInputChange}
                        name="mobile_number"

                      />
                    </div>
                  </div>




                  <div className='login-input-lebl'>
                    <lebel className='logsign-lebel'>Password</lebel>
                    <div className='logSign-inp-div'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'>
                          <path
                            d='M14.1663 7.49996V5.83329C14.1663 4.72822 13.7274 3.66842 12.946 2.88701C12.1646 2.10561 11.1047 1.66663 9.99967 1.66663C8.89461 1.66663 7.8348 2.10561 7.0534 2.88701C6.27199 3.66842 5.83301 4.72822 5.83301 5.83329V7.49996C5.16997 7.49996 4.53408 7.76335 4.06524 8.23219C3.5964 8.70103 3.33301 9.33692 3.33301 9.99996V15.8333C3.33301 16.4963 3.5964 17.1322 4.06524 17.6011C4.53408 18.0699 5.16997 18.3333 5.83301 18.3333H14.1663C14.8294 18.3333 15.4653 18.0699 15.9341 17.6011C16.4029 17.1322 16.6663 16.4963 16.6663 15.8333V9.99996C16.6663 9.33692 16.4029 8.70103 15.9341 8.23219C15.4653 7.76335 14.8294 7.49996 14.1663 7.49996ZM7.49967 5.83329C7.49967 5.17025 7.76307 4.53437 8.23191 4.06553C8.70075 3.59668 9.33663 3.33329 9.99967 3.33329C10.6627 3.33329 11.2986 3.59668 11.7674 4.06553C12.2363 4.53437 12.4997 5.17025 12.4997 5.83329V7.49996H7.49967V5.83329ZM14.9997 15.8333C14.9997 16.0543 14.9119 16.2663 14.7556 16.4225C14.5993 16.5788 14.3874 16.6666 14.1663 16.6666H5.83301C5.61199 16.6666 5.40003 16.5788 5.24375 16.4225C5.08747 16.2663 4.99967 16.0543 4.99967 15.8333V9.99996C4.99967 9.77894 5.08747 9.56698 5.24375 9.4107C5.40003 9.25442 5.61199 9.16663 5.83301 9.16663H14.1663C14.3874 9.16663 14.5993 9.25442 14.7556 9.4107C14.9119 9.56698 14.9997 9.77894 14.9997 9.99996V15.8333Z'
                            fill='#156CFA'
                          />
                        </svg>
                      </span>
                      <input
                        className='logSign-input'
                        type='password'
                        placeholder='Enter your password'
                        name="password"
                        onChange={handleInputChange}
                        alt=''

                      />
                    </div>
                  </div>
                  <div className='login-input-lebl'>
                    <lebel className='logsign-lebel'>Location</lebel>
                    <div className='logSign-inp-div'>
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22'
                          height='22'
                          viewBox='0 0 22 22'
                          fill='none'>
                          <path
                            d='M11.0003 1.83337C9.0554 1.83337 7.19014 2.60599 5.81488 3.98126C4.43961 5.35652 3.66699 7.22179 3.66699 9.16671C3.66699 14.1167 10.1295 19.7084 10.4045 19.9467C10.5705 20.0887 10.7818 20.1668 11.0003 20.1668C11.2188 20.1668 11.4301 20.0887 11.5962 19.9467C11.917 19.7084 18.3337 14.1167 18.3337 9.16671C18.3337 7.22179 17.561 5.35652 16.1858 3.98126C14.8105 2.60599 12.9452 1.83337 11.0003 1.83337ZM11.0003 18.0125C9.04783 16.1792 5.50033 12.2284 5.50033 9.16671C5.50033 7.70802 6.07979 6.30907 7.11124 5.27762C8.14269 4.24617 9.54164 3.66671 11.0003 3.66671C12.459 3.66671 13.858 4.24617 14.8894 5.27762C15.9209 6.30907 16.5003 7.70802 16.5003 9.16671C16.5003 12.2284 12.9528 16.1884 11.0003 18.0125ZM11.0003 5.50004C10.2751 5.50004 9.56622 5.71509 8.96324 6.11799C8.36025 6.52088 7.89029 7.09354 7.61277 7.76353C7.33525 8.43353 7.26263 9.17077 7.40411 9.88204C7.54559 10.5933 7.89481 11.2466 8.4076 11.7594C8.92039 12.2722 9.57373 12.6214 10.285 12.7629C10.9963 12.9044 11.7335 12.8318 12.4035 12.5543C13.0735 12.2767 13.6461 11.8068 14.049 11.2038C14.4519 10.6008 14.667 9.89191 14.667 9.16671C14.667 8.19425 14.2807 7.26162 13.5931 6.57398C12.9054 5.88635 11.9728 5.50004 11.0003 5.50004ZM11.0003 11C10.6377 11 10.2833 10.8925 9.98178 10.6911C9.68029 10.4896 9.44531 10.2033 9.30655 9.86829C9.16779 9.5333 9.13148 9.16467 9.20222 8.80904C9.27296 8.45341 9.44757 8.12674 9.70396 7.87035C9.96036 7.61395 10.287 7.43934 10.6427 7.3686C10.9983 7.29786 11.3669 7.33417 11.7019 7.47293C12.0369 7.61169 12.3232 7.84667 12.5247 8.14816C12.7261 8.44965 12.8337 8.80411 12.8337 9.16671C12.8337 9.65294 12.6405 10.1193 12.2967 10.4631C11.9529 10.8069 11.4866 11 11.0003 11Z'
                            fill='#156CFA'
                          />
                        </svg>
                      </span>
                      <input
                        className='logSign-input'
                        type='text'
                        placeholder='Enter your location'
                        name="location"
                        onChange={handleInputChange}
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='check-text-div'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'

                    />
                    <lebel>
                      I agree to the <strong>terms and conditions</strong>
                    </lebel>
                  </div>
                  <div>
                    <button className='log-sign-btn'>
                      Sign Up
                      <span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          fill='none'>
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M10.7817 6.13085C11.0696 5.86516 11.5183 5.8831 11.784 6.17093L14.0754 8.65328C14.3262 8.92497 14.3262 9.34374 14.0754 9.61542L11.784 12.0978C11.5183 12.3857 11.0696 12.4036 10.7818 12.1379C10.4939 11.8722 10.476 11.4235 10.7417 11.1357L11.9343 9.84361L5.04323 9.84361C4.65153 9.84361 4.33398 9.52606 4.33398 9.13436C4.33398 8.74265 4.65153 8.4251 5.04324 8.4251L11.9343 8.4251L10.7417 7.13308C10.476 6.84525 10.4939 6.39654 10.7817 6.13085Z'
                            fill='white'
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>

                <p>
                  Don’t have an account?{" "}
                  <Link href='/login'>
                    {" "}
                    <strong className='sing-texts'>Log in</strong>
                  </Link>
                </p>

                <div className='or-hrs-div'>
                  <div className='hrs' />
                  <span>OR</span>
                  <div className='hrs' />
                </div>

                <div className='social-logSig-div'>
                  <div>
                    <img className='site-img' src={GoogG.src} alt='' />
                  </div>
                  <button className='social-logSig-btn'>
                    Continue with Google
                  </button>
                </div>
                <div className='socialapp-logSig-div'>
                  <div>
                    <img className='site-img' src={GoogG.src} alt='' />
                  </div>
                  <button className='socialapp-logSig-btn'>
                    Continue with Apple
                  </button>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7'>
              <div className='loginSign-logo-div'>
                <img className='loginSign-logo' src={logSignLogo.src} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='log-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default page;
