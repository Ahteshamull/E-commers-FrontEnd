import React from "react";
import { Link } from "react-router-dom";
import Smled from "../assets/smallled.png";
import Smlremot from "../assets/smallremot.png";

const Card = () => {
  return (
    <div className="container w-[1170px] mx-auto">
      <div className="mt-[80px] mb-[80px] flex items-center gap-1">
        <Link
          className="text-[14px] font-poppins font-normal leading-5 text-black/25"
          to={"/"}
        >
          Home
        </Link>
        /
        <Link
          to={"/card"}
          className="text-[14px] font-poppins font-normal leading-5 text-black/50"
        >
          Card
        </Link>
      </div>
      <div className="px-10 py-6 text-right mb-[80px] border-b border-b-black/25">
        <ul className="flex justify-between">
          <li>Product</li>
          <li>Product</li>
          <li>Product</li>
          <li>Product</li>
        </ul>
      </div>
      <div className="px-10 py-6 text-right mb-[80px] border-b border-b-black/25">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-5">
            <img src={Smled} alt="" />
            <h2>LCD Monitor</h2>
          </div>
          
            <h1>$650</h1>
            <h1>1</h1>
            <h1>$650</h1>
       
        </div>
      </div>
      <div className="px-10 py-6 text-right mb-[80px] border-b border-b-black/25">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <img src={Smlremot} alt="" />
            <h2>H1 Gamepad</h2>
          </div>
          <h1>$550</h1>
          <h1>2</h1>
          <h1>$1100</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
