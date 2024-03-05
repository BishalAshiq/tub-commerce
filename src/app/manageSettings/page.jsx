import Navbar from "@/component/Navbar/Navbar";
import React from "react";
import AuthorPic from "../../../public/authoravatar.jpg";
import Footer from "../../component/Footer/Footer";

const page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="Account-Settings-full-div">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-6 col-lg-6 col-xl-6">
              <div className="">
                <h1>Account Settings</h1>
                <p>Update your account information</p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-6 col-xl-6">
              <div className="author-img-div">
                <div className="image-container">
                  <img src={AuthorPic.src} alt="" className="author-image" />
                  <div className="svg-container">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon"
                    >
                      <path
                        d="M25 13.125C24.6685 13.125 24.3505 13.2567 24.1161 13.4911C23.8817 13.7255 23.75 14.0435 23.75 14.375V23.125C23.75 23.4565 23.6183 23.7745 23.3839 24.0089C23.1495 24.2433 22.8315 24.375 22.5 24.375H5C4.66848 24.375 4.35054 24.2433 4.11612 24.0089C3.8817 23.7745 3.75 23.4565 3.75 23.125V13.125C3.75 12.7935 3.8817 12.4755 4.11612 12.2411C4.35054 12.0067 4.66848 11.875 5 11.875H7.5C7.77258 11.8892 8.04233 11.8138 8.26804 11.6604C8.49376 11.5069 8.66303 11.2837 8.75 11.025L9.425 8.975C9.50886 8.72672 9.66862 8.51108 9.88171 8.35855C10.0948 8.20602 10.3504 8.12432 10.6125 8.125H17.5C17.8315 8.125 18.1495 7.9933 18.3839 7.75888C18.6183 7.52446 18.75 7.20652 18.75 6.875C18.75 6.54348 18.6183 6.22554 18.3839 5.99112C18.1495 5.7567 17.8315 5.625 17.5 5.625H10.55C9.76443 5.62647 8.99917 5.8746 8.36221 6.33438C7.72525 6.79416 7.24876 7.44236 7 8.1875L6.6 9.4375H5C4.00544 9.4375 3.05161 9.83259 2.34835 10.5358C1.64509 11.2391 1.25 12.1929 1.25 13.1875V23.1875C1.25 24.1821 1.64509 25.1359 2.34835 25.8391C3.05161 26.5424 4.00544 26.9375 5 26.9375H22.5C23.4946 26.9375 24.4484 26.5424 25.1517 25.8391C25.8549 25.1359 26.25 24.1821 26.25 23.1875V14.4375C26.2585 14.2682 26.2324 14.0989 26.1734 13.9399C26.1144 13.781 26.0237 13.6357 25.9067 13.5129C25.7898 13.3902 25.6491 13.2925 25.4932 13.2258C25.3374 13.1591 25.1695 13.1248 25 13.125ZM13.75 11.875C12.7611 11.875 11.7944 12.1682 10.9721 12.7177C10.1499 13.2671 9.50904 14.048 9.1306 14.9616C8.75216 15.8752 8.65315 16.8805 8.84607 17.8505C9.039 18.8204 9.5152 19.7113 10.2145 20.4105C10.9137 21.1098 11.8046 21.586 12.7745 21.7789C13.7445 21.9719 14.7498 21.8728 15.6634 21.4944C16.577 21.116 17.3579 20.4751 17.9073 19.6529C18.4568 18.8306 18.75 17.8639 18.75 16.875C18.75 15.5489 18.2232 14.2771 17.2855 13.3395C16.3479 12.4018 15.0761 11.875 13.75 11.875ZM13.75 19.375C13.2555 19.375 12.7722 19.2284 12.3611 18.9537C11.95 18.679 11.6295 18.2885 11.4403 17.8317C11.2511 17.3749 11.2016 16.8722 11.298 16.3873C11.3945 15.9023 11.6326 15.4569 11.9822 15.1072C12.3319 14.7576 12.7773 14.5195 13.2623 14.423C13.7472 14.3266 14.2499 14.3761 14.7067 14.5653C15.1635 14.7545 15.554 15.075 15.8287 15.4861C16.1034 15.8972 16.25 16.3805 16.25 16.875C16.25 17.538 15.9866 18.1739 15.5178 18.6428C15.0489 19.1116 14.413 19.375 13.75 19.375ZM27.5 5.625H26.25V4.375C26.25 4.04348 26.1183 3.72554 25.8839 3.49112C25.6495 3.2567 25.3315 3.125 25 3.125C24.6685 3.125 24.3505 3.2567 24.1161 3.49112C23.8817 3.72554 23.75 4.04348 23.75 4.375V5.625H22.5C22.1685 5.625 21.8505 5.7567 21.6161 5.99112C21.3817 6.22554 21.25 6.54348 21.25 6.875C21.25 7.20652 21.3817 7.52446 21.6161 7.75888C21.8505 7.9933 22.1685 8.125 22.5 8.125H23.75V9.375C23.75 9.70652 23.8817 10.0245 24.1161 10.2589C24.3505 10.4933 24.6685 10.625 25 10.625C25.3315 10.625 25.6495 10.4933 25.8839 10.2589C26.1183 10.0245 26.25 9.70652 26.25 9.375V8.125H27.5C27.8315 8.125 28.1495 7.9933 28.3839 7.75888C28.6183 7.52446 28.75 7.20652 28.75 6.875C28.75 6.54348 28.6183 6.22554 28.3839 5.99112C28.1495 5.7567 27.8315 5.625 27.5 5.625Z"
                        fill="#01DE9E"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p>My Details</p>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <input
                    className="accounts-input"
                    type="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <input
                    className="accounts-input"
                    type="text"
                    placeholder="Street Address"
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <input
                    className="accounts-input"
                    type="text"
                    placeholder="Street Address"
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <input
                    className="accounts-input"
                    type="text"
                    placeholder="Street Address"
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <input
                    className="accounts-input"
                    type="text"
                    placeholder="Street Address"
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                  <input
                    className="accounts-input"
                    type="text"
                    placeholder="Street Address"
                  />
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <input
                    className="accounts-input"
                    type="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                  <input
                    className="accounts-input"
                    type="name"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                <p>Reset</p>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input
                      className="accounts-input"
                      type="text"
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input
                      className="accounts-input"
                      type="text"
                      placeholder="Street Address"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-xl-12">
                <p>Payment</p>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <input
                      className="accounts-input"
                      type="text"
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="accounts-bttn-div">
                      <button className="accounts-bttn-cancel">Cancel</button>
                      <button className="accounts-bttn-sve-details">Save Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div >
        <Footer/>
    </div>
    </div>
  );
};

export default page;
