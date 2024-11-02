import React from 'react'
import bannerImg from "../assets/banner.png";
import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="container w-[1170px] mx-auto">
        <div className="flex justify-start bg-black text-white mt-[40px]">
          <div className="ml-[64px]">
            <div className="flex items-center gap-[24px] mt-[58px]">
              <FaApple className="h-[50px] w-[40px] " />
              <h2 className="font-poppins text-[16px] leading-6 font-normal text-white_rgba">
                iPhone 16 Series
              </h2>
            </div>
            <h1 className="w-[294px] text-[48px] text-white_rgba font-semibold leading-[60px]">
              Up to 10% off Voucher
            </h1>
            <div className="flex gap-3 items-center font-inter mt-[20px] mb-[22px]">
              <button className="underline  font-poppins text-[16px] leading-6 font-normal text-white_rgba">
                Shop Now
              </button>
              <FaArrowRightLong
                size={14}
                className="mt-[4px] text-white_rgba"
              />
            </div>
          </div>
          <div className="mt-4">
            <img src={bannerImg} alt="bannerImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner