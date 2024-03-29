import { Inter } from "next/font/google";
// import './globals.css'
// import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import "../assets/css/home.css";
import "../assets/css/products.css";
import "../assets/css/logSign.css";
import "../assets/css/customerdashboard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddToCart from "@/component/CartFloating/AddToCart";
import StoreProvider from "@/redux/provider";
import { Toaster } from "react-hot-toast";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tub-Ecommerce",
  description: "Best Toy Business in bangladesh",
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   import("aos").then((aos) => {
  //     aos.default.init();
  //   });
  // }, []);
  return (
    <html lang="en">
      
      <StoreProvider>
        <body>
          {children}
          <AddToCart />
          <Toaster />
          <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
          ></script>
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
          <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
          <script>AOS.init();</script>
        </body>
      </StoreProvider>
    </html>
  );
}
