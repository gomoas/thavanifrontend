import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <footer className="bg-color1 z-20 relative mt-[20vh]">
      <div className="mx-auto w-full max-w-screen p-4 lg:px-10 py-6 lg:py-8">
        <div className="relative flex flex-col-reverse md:flex-row md:justify-between md:space-x-8 px-4 py-8 text-white">
          {/* Logo  */}
          <div className="mb-6 md:mb-0 sm:h-[10vh] sm:w-[10vw] h-[20vh] w-[50vw] flex justify-center items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                className="invert object-cover brightness-200 "
                alt="logo"
              ></Image>
            </Link>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 lg:text-[.9vw] gap-8 md:gap-[5vw] lg:grid-cols-3 text-center md:text-left">
            <div>
              <h2 className="mb-6 text-sm lg:text-[1.1vw] font-semibold uppercase text-white">
                Learn
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:underline">
                    About Thvani
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/contactus" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/blog" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/help" className="hover:underline">
                    Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold lg:text-[1.1vw] uppercase">
                Nature
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/product/how" className="hover:underline">
                    Material Sourcing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/sustainable" className="hover:underline">
                    Sustainability
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/calculator" className="hover:underline">
                    Footprint Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold lg:text-[1.1vw] uppercase">
                Account
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <Link href="/login" className="hover:underline">
                    Login
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/whislist" className="hover:underline">
                    Wishlist
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/orderexchange" className="hover:underline">
                    Orders
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/trackOrder" className="hover:underline">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" z-30 relative flex flex-col items-center justify-center h-[20vh] lg:h-auto w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] text-center mx-auto ">
            <div className=" absolute bottom-[10%] rounded-full bg-color9 sm:p-10  max-w-[250px] h-auto aspect-square sm:max-w-[300px] md:max-w-[350px] ">
              <div className="absolute lg:block !z-10 hidden lg:-right-[8%] lg:-top-[8%]">
                <svg
                  className=" scale-70 lg:scale-105"
                  width="400"
                  height="450"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <path
                      id="iglooPath"
                      d="M 30,210
         A 170,155 0 1,1 320,290"
                    />
                  </defs>
                  <text
                    fill="#8B6E4E"
                    fontWeight="600"
                    fontSize="25"
                    textAnchor="middle"
                  >
                    <textPath href="#iglooPath" startOffset="43%">
                      Spread love, not chemicals. Spread love.
                    </textPath>
                  </text>
                </svg>
              </div>
              <p className="mt-5 text-white text-xl sm:text-2xl md:text-3xl font-bold">
                Get 15% Off
              </p>
              <p className="text-white text-[10px] sm:text-sm md:text-[13px] mt-5">
                Join our mailing list to receive exclusive offers <br /> plus
                15% OFF your next order.
              </p>
              <input
                className="mt-3 text-black font-semibold bg-color11 p-2 w-[80%] max-w-[180px] md:max-w-[220px]  text-sm outline-none"
                placeholder="Your email"
                type="text"
              />
              <button className="mt-3 w-[80%] max-w-[180px] md:max-w-[220px] font-bold rounded-full bg-color10 text-white p-2 text-sm md:text-base">
                Become a VIP
              </button>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 sm:justify-center items-center sm:mt-0 text-white">
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/" className="ms-5">
              <FaFacebookF />
            </Link>
            <Link href="/" className="ms-5 mr-4">
              <FaPinterestP />
            </Link>
            <div className="flex lg:text-[1.1vw] text-sm gap-3 flex-wrap mt-0 sm:mt-0">
              <span>
                <Link href="/privacy">Privacy Policy</Link>
              </span>
              <span>
                <Link href="/term">Terms and Conditions</Link>
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="lg:text-[1.1vw] text-sm text-white sm:text-center mt-4 sm:mt-0">
              © 2024 Thvani Earth Craft
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
