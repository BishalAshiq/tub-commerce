import Footer from "@/component/Footer/Footer";
import Navbar from "@/component/Navbar/Navbar";
import React from "react";

const Page = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className=" order-details-div">
        <div className="container">
          <h2 className="ord-tag">Order Details</h2>
          <p className="ord-textP">
            order #67 was placed on <span className="ord-textPp">January 30,2024</span> and is currently completed
          </p>
        </div>

        <div className=" container full-order-div">
          <div className="row">
            <h5 className="od-Sum-tags">Order Summury</h5>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h4 className="od-textinside">Product</h4>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="ord-details-right-side-text">
                <h4>Total</h4>
              </div>
            </div>
            <hr />

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <p className="opacity-texts">Yellow truck toys </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="ord-details-right-side-text">
                <p className="opacity-texts">৳698.00</p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h4 className="od-textinside">Subtotal :</h4>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="ord-details-right-side-text">
                <h4 className="opacity-texts">৳20.00</h4>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h4 className="od-textinside">Payment Method :</h4>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="ord-details-right-side-text">
                <h4 className="opacity-texts">Cash on Delivery</h4>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h4 className="od-textinside">Total :</h4>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="ord-details-right-side-text">
                <h4 className="opacity-texts">৳718</h4>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="checkout-btn-order-div">
                <button className="checkout-btn-order">Check Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Page;
