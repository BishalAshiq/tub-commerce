import { Inter } from "next/font/google";
// import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import "../assets/css/home.css";
import "../assets/css/products.css";
import "../assets/css/logSign.css";
import "../assets/css/customerdashboard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "tub-ecommerce",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <script
          src='https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js'
          integrity='sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r'
          crossorigin='anonymous'></script>
        <script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js'
          integrity='sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+'
          crossorigin='anonymous'></script>
      </body>
    </html>
  );
}
