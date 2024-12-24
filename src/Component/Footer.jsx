import React from 'react'
import { IoSendOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import QrImg from "../assets/qr.png"
const Footer = () => {
  return (
    <footer className="text-white bg-black">
      <div className="container max-w-[1170px] mx-auto">
        <div className="flex  justify-between pt-[80px] pb-[60px] ">
          <div>
            <h1 className="font-bold text-[24px] font-inter leading-6  text-white_rgba">
              Exclusive
            </h1>
            <ul className="mb-[18px]">
              <li className="mb-6 mt-6 text-[20px] font-normal leading-7 font-poppins">
                Subscribe
              </li>
              <li className="text-[16px] font-poppins leading-6 font-normal">
                Get 10% off your first order
              </li>
            </ul>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email..."
                className="bg-black px-1 py-1 placeholder:text-white_rgba placeholder:w-[130px] border placeholder:px-3 border-white_rgba rounded-md placeholder:text-[16px] placeholder:font-poppins placeholder:font-normal outline-none"
              />
              <IoSendOutline
                size={16}
                className="absolute right-[30px] bottom-[9px] text-white"
              />
            </div>
          </div>
          <div className="w-[175px]">
            <h1 className="  text-[20px] font-normal leading-7 font-poppins">
              Support
            </h1>
            <ul className="mt-6">
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </li>
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
                exclusive@gmail.com
              </li>
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal ">
                +88015-88888-9999
              </li>
            </ul>
          </div>
          <div>
            <h1 className="  text-[20px] font-normal leading-7 font-poppins">
              Account
            </h1>
            <ul className="mt-6">
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
                My Account
              </li>
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
                Login / Register
              </li>
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
                Cart
              </li>
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
                Wishlist
              </li>
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal ">
                Shop
              </li>
            </ul>
          </div>
          <div>
            <h1 className="  text-[20px] font-normal leading-7 font-poppins">
              Quick Link
            </h1>
            <ul className="mt-6">
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
                Privacy Policy
              </li>
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
                Terms Of Use
              </li>
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
                FAQ
              </li>
              <li className="text-[16px] text-white_rgba font-poppins leading-6 font-normal ">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h1 className=" text-[20px] font-normal leading-7 font-poppins">
              Download App
            </h1>
            <p className="mt-6 text-[16px] text-white_rgba font-poppins leading-6 font-normal pb-4">
              Save $3 with App New User Only
            </p>
            <img src={QrImg} alt="QrImg" />
            <div className="flex gap-[24px] mt-6">
              <FaFacebookF  size={24}  className='text-white_rgba'/>
              <FaTwitter size={24}  className='text-white_rgba'/>
              <FaInstagram size={24}  className='text-white_rgba'/>
              <FaLinkedinIn size={24} className='text-white_rgba' />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full text-w_rgba" />
      <p className="text-center text-white_rgba ">
        @ Copyright Hasan 2024. All right reserved
      </p>
    </footer>
  );
}

export default Footer