import React from "react";
import { FaArrowLeft, FaArrowRight, FaHeadphones } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { MdVideogameAsset } from "react-icons/md";


const Category = () => {
  return (
    <div className="container w-[1170px] mx-auto">
      <div className="flex items-center gap-4 mt-[78px]">
        <div className="w-[20px] h-[40px] bg-orange rounded-[4px]"></div>
        <h1 className="text-orange text-[16px] font-semibold leading-5">
          Categories
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="mt-[24px] text-[36px] font-semibold font-inter leading-[48px] text-black_rgba">
          Browse By Category
        </h2>
        <div className="flex items-center gap-2">
          <div className="p-[10px] rounded-full bg-white text-black">
            <FaArrowLeft size={14} />
          </div>
          <div className=" p-[10px] rounded-full bg-white text-black">
            <FaArrowRight size={14} />
          </div>
        </div>
      </div>
      <div className="flex mt-[60px] gap-[30px]">
        <div className="w-[170px] h-[145px] border border-black rounded-[4px] text-center hover:bg-orange hover:text-white_rgba hover:border hover:border-orange ">
          <div className="ml-[50px]">
            <IoPhonePortraitOutline size={56} className=" pt-[30px]" />
            <h1 className="mt-[20px] ml-[-55px] text-[16px] font-normal font-poppins leading-[24px] text-black_rgba">
              Phones
            </h1>
          </div>
        </div>
        <div className="w-[170px] h-[145px] border border-black rounded-[4px] hover:bg-orange hover:text-white_rgba hover:border hover:border-orange text-center">
          <div className="ml-[50px]">
            <HiOutlineDesktopComputer size={56} className=" pt-[30px]" />
            <h1 className="mt-[20px] ml-[-55px] text-[16px] font-normal font-poppins leading-[24px] text-black_rgba">
              Computer
            </h1>
          </div>
        </div>
        <div className="w-[170px] h-[145px] hover:bg-orange hover:text-white_rgba hover:border hover:border-orange border border-black rounded-[4px] text-center">
          <div className="ml-[50px]">
            <BsSmartwatch size={56} className=" pt-[30px]" />
            <h1 className="mt-[20px] ml-[-55px] text-[16px] font-normal font-poppins leading-[24px] text-black_rgba">
              SmartWatch
            </h1>
          </div>
        </div>
        <div className="w-[170px] hover:bg-orange hover:text-white_rgba hover:border hover:border-orange h-[145px] border border-black rounded-[4px] text-center">
          <div className="ml-[50px]">
            <CiCamera size={56} className=" pt-[30px]" />
            <h1 className="mt-[20px] ml-[-55px] text-[16px] font-normal font-poppins leading-[24px] text-black_rgba">
              Camera
            </h1>
          </div>
        </div>
        <div className="w-[170px] h-[145px] hover:bg-orange hover:text-white_rgba hover:border hover:border-orange border border-black rounded-[4px] text-center">
          <div className="ml-[50px]">
            <FaHeadphones size={56} className=" pt-[30px]" />
            <h1 className="mt-[20px] ml-[-55px] text-[16px] font-normal font-poppins leading-[24px] text-black_rgba">
              HeadPhones
            </h1>
          </div>
        </div>
        <div className="w-[170px] h-[145px] hover:bg-orange hover:text-white_rgba hover:border hover:border-orange border border-black rounded-[4px] text-center">
          <div className="ml-[50px]">
            <MdVideogameAsset size={56} className=" pt-[30px]" />
            <h1 className="mt-[20px] ml-[-55px] text-[16px] font-normal font-poppins leading-[24px] text-black_rgba">
              Gamming
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
