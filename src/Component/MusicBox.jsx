import React from 'react'
import musicBox from "../assets/speacker.png"

const MusicBox = () => {
  return (
    <div className="container w-[1170px] mx-auto mt-[81px]">
      <div className="bg-black text-white">
        <div className="flex justify-start">
          <div className=" ml-[56px] mt-[69px] mb-[49px]">
            <h1 className="text-green_rgba text-[16px] font-poppins leading-5 font-normal">
              Categories
            </h1>
            <h2 className="mt-[32px] w-[443px] text-[48px] font-inter leading-[60px] font-semibold text-white_rgba">
              Enhance Your Music Experience
            </h2>
            <div className="flex items-center text-center gap-[24px] mt-[32px]">
              <div className=" w-[62px] h-[62px] rounded-full bg-white text-black">
                <h1 className="mt-[10px] text-[11px] ">
                  23 <br /> Hour
                </h1>
              </div>
              <div className=" w-[62px] h-[62px] rounded-full bg-white text-black">
                <h1 className="mt-[10px] text-[11px] ">
                  05 <br /> Days
                </h1>
              </div>
              <div className=" w-[62px] h-[62px] rounded-full bg-white text-black">
                <h1 className="mt-[10px] text-[11px] ">
                  59 <br /> Minutes
                </h1>
              </div>
              <div className=" w-[62px] h-[62px] rounded-full bg-white text-black">
                <h1 className="mt-[10px] text-[11px] ">
                  35 <br /> Seconds
                </h1>
              </div>
            </div>
            <button className="mt-[40px] bg-green_rgba text-[16px] font-poppins rounded-[4px] leading-6 py-4 px-12 font-medium">
              Buy Now
            </button>
          </div>
          <div>
            <img src={musicBox} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicBox