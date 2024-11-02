import React from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <header className="bg-black text-white font-poppins py-3">
      <div className="container">
        <div className="  flex justify-center relative  ">
          <h1 className="text-[14px] font-normal leading-[20px]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link className="underline ml-2" to="#">ShopNow</Link>
          </h1>

          <select className="text-[14px] font-normal leading-[20px] bg-black text-white border-none absolute right-0 outline-none">
            <option>English</option>
            <option>Bangla</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
