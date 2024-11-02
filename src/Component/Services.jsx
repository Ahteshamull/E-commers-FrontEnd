import React from 'react'
import blackImg from "../assets/11.png"
import { TbTruckDelivery } from "react-icons/tb";
import { BsHeadset } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Services = () => {
  return (
    <div className="container w-[1170px] mx-auto mt-[80px] mb-[153px]">
      <div className="w-[943px] mx-auto flex gap-[88px] ">
        <div className="justify-items-center">
          <div className="relative ">
            <img src={blackImg} alt="" />
            <TbTruckDelivery
              size={40}
              className="absolute top-[20px] left-[20px] text-white_rgba"
            />
          </div>
          <div className="text-center">
            <h1 className="mt-[34px] text-[20px] font-poppins leading-[28px] font-semibold text-black_rgba">
              FREE AND FAST DELIVERY
            </h1>
            <p className="text-[14px] font-poppins leading-[21px] font-normal text-black_rgba">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div className="justify-items-center">
          <div className="relative ">
            <img src={blackImg} alt="" />
            <BsHeadset
              size={40}
              className="absolute top-[20px] left-[20px] text-white_rgba"
            />
          </div>
          <div className="text-center">
            <h1 className="mt-[34px] text-[20px] font-poppins leading-[28px] font-semibold text-black_rgba">
              24/7 CUSTOMER SERVICE
            </h1>
            <p className="text-[14px] font-poppins leading-[21px] font-normal text-black_rgba">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>
        <div className="justify-items-center">
          <div className="relative ">
            <img src={blackImg} alt="" />
            <MdOutlineVerifiedUser
              size={40}
              className="absolute top-[20px] left-[20px] text-white_rgba"
            />
          </div>
          <div className="text-center">
            <h1 className="mt-[34px] text-[20px] font-poppins leading-[28px] font-semibold text-black_rgba">
              MONEY BACK GUARANTEE
            </h1>
            <p className="text-[14px] font-poppins leading-[21px] font-normal text-black_rgba">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services