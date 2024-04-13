"use client";
import Navbar from "@/component/Navbar/Navbar";
import React, { useState } from "react";
import logSignLogo from "../../../public/logiSignUpLogo.png";
import GoogG from "../../../public/GoogG.png";
import Footer from "@/component/Footer/Footer";
import Link from "next/link";
import toast from "react-hot-toast";
import axiosInstance from "@/utils/axios";
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    password: "",
    email: ""
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;


    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email == "") {
      toast.error("Email is required");
    }
    else if (formData.password == "") {
      toast.error("Password is required");
    } else {
      axiosInstance.post(`/auth/login`, formData).then((res) => {
        if (res.status == 200) {
          toast.success(res.data.message);
          router.push('/customerDashboard');
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        } else {
          toast.error("Something went wrong!");
        }
      });
    }


  }

  console.log(formData);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='login-full-div'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5'>
              <div className='log-full-div'>
                <form onSubmit={handleLogin}>
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
                          <g clip-path='url(#clip0_69_2074)'>
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
                            <clipPath id='clip0_69_2074'>
                              <rect width='24' height='24' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <input
                        className='logSign-input'
                        type='email'
                        placeholder='enter your email'
                        alt=''
                        name="email"
                        onChange={handleInputChange}
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
                        type='Password'
                        placeholder='enter your password'
                        alt=''
                        name="password"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* <div className='check-text-div'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='flexCheckDefault'
                    />
                    <lebel>
                      I agree to the <strong>terms and conditions</strong>
                    </lebel>
                  </div> */}
                  <div>
                    <button className='log-sign-btn'>
                      Log In
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
                  <Link href='/signUp'>
                    <strong className='sing-texts'>Sign Up</strong>
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
              <div className='loginSign-div'>
                <img className='login-img' src={logSignLogo.src} alt='' />
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
