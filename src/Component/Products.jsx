import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import remote from "../assets/remote.png"         
import keyBoard from "../assets/keyBoard.png"         
import monitor from "../assets/monitor.png";         
import chair from "../assets/cheir.png";         
import { FaRegStar } from "react-icons/fa";

const Products = () => {
  return (
    <div className="container w-[1170px] mx-auto mt-[104px]">
      <div className="flex items-center gap-4">
        <div className="w-[20px] h-[40px] bg-orange rounded-[4px]"></div>
        <h1 className="text-orange text-[16px] font-semibold leading-5">
          Features
        </h1>
      </div>
      <div>
        <h2 className="mt-[24px] text-[36px] font-semibold font-inter leading-[48px] text-black_rgba">
          Features Products
        </h2>
        <div className="flex justify-between mt-[40px] ">
          <div>
            <div className="w-[270px] h-[250px] bg-w_rgba rounded-md relative">
              <button className="bg-orange rounded-[4px] px-3 py-1 mt-4 ml-6 text-white_rgba text-[12px] font-normal leading-4 font-poppins">
                -40%
              </button>
              <div className="absolute right-[12px] top-[12px]">
                <div className="p-[10px] rounded-full bg-white text-black">
                  <FaRegHeart size={14} />
                </div>
                <div className="mt-2 p-[10px] rounded-full bg-white text-black">
                  <IoEyeOutline size={14} />
                </div>
              </div>
              <div className="absolute top-[50px] right-[50px]">
                <img src={remote} alt="" />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-[16px] font-poppins font-medium leading-6 text-black_rgba">
                HAVIT HV-G92 Gamepad
              </h2>
              <div className="mt-2 flex gap-[12px] relative">
                <p className="text-orange text-[16px] font-poppins font-medium leading-6">
                  $120
                </p>
                <p className="text-black_rgba text-[16px] font-poppins font-medium leading-6">
                  $160
                </p>
                <hr className="w-[45px] h-[2px] bg-black_rgba absolute left-[42px] top-[12px]" />
              </div>
              <div className="flex gap-2 items-center mt-2">
                <div className="flex gap-1">
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                </div>
                <h2 className=" text-[14px] font-poppins font-semibold mt-1 text-black_rgba leading-6">
                  (88)
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[270px] h-[250px] bg-w_rgba rounded-md relative">
              <button className="bg-orange rounded-[4px] px-3 py-1 mt-4 ml-6 text-white_rgba text-[12px] font-normal leading-4 font-poppins">
                -35%
              </button>
              <div className="absolute right-[12px] top-[12px]">
                <div className="p-[10px] rounded-full bg-white text-black">
                  <FaRegHeart size={14} />
                </div>
                <div className="mt-2 p-[10px] rounded-full bg-white text-black">
                  <IoEyeOutline size={14} />
                </div>
              </div>
              <div className="absolute top-[80px] right-[50px]">
                <img src={keyBoard} alt="" />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-[16px] font-poppins font-medium leading-6 text-black_rgba">
                AK-900 Wired Keyboard
              </h2>
              <div className="mt-2 flex gap-[12px] relative">
                <p className="text-orange text-[16px] font-poppins font-medium leading-6">
                  $960
                </p>
                <p className="text-black_rgba text-[16px] font-poppins font-medium leading-6">
                  $1160
                </p>
                <hr className="w-[45px] h-[2px] bg-black_rgba absolute left-[42px] top-[12px]" />
              </div>
              <div className="flex gap-2 items-center mt-2">
                <div className="flex gap-1">
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                </div>
                <h2 className="text-[14px] font-poppins font-semibold mt-1 text-black_rgba leading-6">
                  (75)
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[270px] h-[250px] bg-w_rgba rounded-md relative">
              <button className="bg-orange rounded-[4px] px-3 py-1 mt-4 ml-6 text-white_rgba text-[12px] font-normal leading-4 font-poppins">
                -30%
              </button>
              <div className="absolute right-[12px] top-[12px]">
                <div className="p-[10px] rounded-full bg-white text-black">
                  <FaRegHeart size={14} />
                </div>
                <div className="mt-2 p-[10px] rounded-full bg-white text-black">
                  <IoEyeOutline size={14} />
                </div>
              </div>
              <div className="absolute top-[75px] right-[50px]">
                <img src={monitor} alt="" />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-[16px] font-poppins font-medium leading-6 text-black_rgba">
                IPS LCD Gaming Monitor
              </h2>
              <div className="mt-2 flex gap-[12px] relative">
                <p className="text-orange text-[16px] font-poppins font-medium leading-6">
                  $370
                </p>
                <p className="text-black_rgba text-[16px] font-poppins font-medium leading-6">
                  $400
                </p>
                <hr className="w-[45px] h-[2px] bg-black_rgba absolute left-[42px] top-[12px]" />
              </div>
              <div className="flex gap-2 items-center mt-2">
                <div className="flex gap-1">
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                </div>
                <h2 className="text-[14px] font-poppins font-semibold mt-1 text-black_rgba leading-6">
                  (99)
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[270px] h-[250px] bg-w_rgba rounded-md relative">
              <button className="bg-orange rounded-[4px] px-3 py-1 mt-4 ml-6 text-white_rgba text-[12px] font-normal leading-4 font-poppins">
                -25%
              </button>
              <div className="absolute right-[12px] top-[12px]">
                <div className="p-[10px] rounded-full bg-white text-black">
                  <FaRegHeart size={14} />
                </div>
                <div className="mt-2 p-[10px] rounded-full bg-white text-black">
                  <IoEyeOutline size={14} />
                </div>
              </div>
              <div className="absolute top-[50px] right-[90px]">
                <img src={chair} alt="" />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-[16px] font-poppins font-medium leading-6 text-black_rgba">
                S-Series Comfort Chair{" "}
              </h2>
              <div className="mt-2 flex gap-[12px] relative">
                <p className="text-orange text-[16px] font-poppins font-medium leading-6">
                  $375
                </p>
                <p className="text-black_rgba text-[16px] font-poppins font-medium leading-6">
                  $400
                </p>
                <hr className="w-[45px] h-[2px] bg-black_rgba absolute left-[42px] top-[12px]" />
              </div>
              <div className="flex gap-2 items-center mt-2">
                <div className="flex gap-1">
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                  <FaRegStar size={20} className=" text-orange" />
                </div>
                <h2 className="text-[14px] font-poppins font-semibold mt-1 text-black_rgba leading-6">
                  (99)
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-[51px]">
          <button className="text-[16px] font-poppins font-medium leading-6 text-white_rgba bg-orange py-4 px-12 rounded-[4px]">
            View All Products
          </button>
        </div>
      </div>
      <hr className="w-full mt-[59px]" />
    </div>
  );
};

export default Products;
