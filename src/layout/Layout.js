import Head from "next/head";
import { ToastContainer } from "react-toastify";

// //internal import
import Navbar from "./nav/Navbar";
import Footer from "./footer/Footer";
import NavbarTop from "./nav/NavbarTop";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <ToastContainer />

      <div className="font-sans">
        <Head>
          <title>VN-Express</title>
          {<meta name="description" />}
          <link ref="icon" href="/logo/logoweb.png" />
          <meta name="keywords" />

          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" />
        </Head>

        <NavbarTop />
        {/* <Navbar /> */}
        {/* <NavbarNew /> */}
        {/* <div className="bg-gray-50"></div>
        <div className="w-full"> */}
        {/* <FooterTop /> */}
        {/* <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10"> */}
        {/* <FeatureCard /> */}
        {/* </div> */}
        {/* <hr className="hr-line"></hr>
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Layout;
