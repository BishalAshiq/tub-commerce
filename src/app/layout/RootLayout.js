// layouts/RootLayout.js
import React from "react";
import AddToCart from "../components/AddToCart";

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        {children}
        <AddToCart />
        {/* ... your existing scripts */}
      </body>
    </html>
  );
};

export default RootLayout;
