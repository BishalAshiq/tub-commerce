"use client";

import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function _appAos({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS in the useEffect hook
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should only happen once
    });
  }, []); // Run useEffect only once on component mount

  return <Component {...pageProps} />;
}

export default _appAos;
