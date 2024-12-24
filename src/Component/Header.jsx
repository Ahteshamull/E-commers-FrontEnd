import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { GiSelfLove } from "react-icons/gi";
import { LuUser } from "react-icons/lu";
const Header = () => {
  const location = useLocation();
  return (
    <section>
      <div className="container ">
        <div className="flex justify-between items-center mt-[38px] mb-[23px]">
          <Link
            to="/"
            className="font-inter text-[24px] font-bold leading-6 text-black"
          >
            Exclusive
          </Link>
          <ul
            className={`${
              location.pathname === "/signup" || location.pathname === "/login"
                ? "flex gap-[48px] font-poppins "
                : "flex gap-[48px] font-poppins ml-[52px]"
            }`}
          >
            <Link
              to="/"
              className={`${
                location.pathname === "/" &&
                "border-b border-primaryColor font-poppins text-[16px] leading-6 font-normal text-black"
              }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact" &&
                "border-b border-primaryColor font-poppins text-[16px] leading-6 font-normal text-black"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about" &&
                "border-b border-primaryColor font-poppins text-[16px] leading-6 font-normal text-black"
              }`}
            >
              About
            </Link>
            <Link
              to="/signup"
              className={`${
                location.pathname === "/signup" &&
                "border-b border-primaryColor font-poppins text-[16px] leading-6 font-normal text-black"
              }`}
            >
              Sign Up
            </Link>
          </ul>
          {location.pathname === "/signup" || location.pathname === "/login" ? (
            <div className="relative flex items-center justify-between gap-5 ">
              <input
                className="outline-none w-full h-full bg-[#F5F5F5] rounded-[4px] text-[14px] font-poppins font-semibold text-[#000000] placeholder:text-[12px] pl-[20px] pr-[20px] py-2 "
                type="text"
                placeholder="What are you looking for?"
              />
              {location.pathname === "/signup" ||
              location.pathname === "/login" ? (
                <IoSearchOutline
                  size={20}
                  className="absolute bottom-[9px] right-[10px]  text-[#000] "
                />
              ) : (
                <IoSearchOutline
                  size={20}
                  className="absolute bottom-[9px] right-[60px]  text-[#000] "
                />
              )}

              <GiShoppingCart
                size={32}
                className={`${
                  location.pathname === "/signup" ||
                  location.pathname === "/login"
                    ? "hidden"
                    : "block"
                }`}
              />
            </div>
          ) : (
            <div className="relative flex items-center justify-between gap-5 ">
              <input
                className="outline-none w-full h-full bg-[#F5F5F5] rounded-[4px] text-[14px] font-poppins font-semibold text-[#000000] placeholder:text-[12px] pl-[20px] pr-[20px] py-2 "
                type="text"
                placeholder="What are you looking for?"
              />
              {location.pathname === "/signup" ||
              location.pathname === "/login" ? (
                <IoSearchOutline
                  size={20}
                  className="absolute bottom-[8px] right-[10px]  text-[#000] "
                />
              ) : (
                  <IoSearchOutline
                    size={20}
                    className="absolute bottom-[8px] right-[160px]  text-[#000] "
                  />
                ) && location.pathname === "/" ? (
                <IoSearchOutline
                  size={20}
                  className="absolute bottom-[8px] right-[66px]  text-[#000] "
                />
              ) : (
                <IoSearchOutline
                  size={20}
                  className="absolute bottom-[9px] right-[160px]  text-[#000] "
                />
              )}
              <div className="flex gap-4">
                <GiSelfLove
                  size={32}
                  className={`${
                    location.pathname === "/signup" ||
                    location.pathname === "/login" ||
                    location.pathname === "/"
                      ? "hidden"
                      : "block"
                  }`}
                />
                <GiShoppingCart
                  size={32}
                  className={`${
                    location.pathname === "/signup" ||
                    location.pathname === "/login"
                      ? "hidden"
                      : "block"
                  }`}
                />
                <LuUser
                  size={32}
                  className={`${
                    location.pathname === "/signup" ||
                    location.pathname === "/login" ||
                    location.pathname === "/"
                      ? "hidden"
                      : "block"
                  }`}
                />
              </div>
              {/* {location.pathname === "/" ? (
              <Link to="/card">
                <FaShoppingCart />
              </Link>
            )
              :
              "hidden"
          } */}
            </div>
          )}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Header;
