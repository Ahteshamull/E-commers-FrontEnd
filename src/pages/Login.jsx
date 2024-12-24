import React from "react";
import signUpImg from "../assets/signupImg.png";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <>
      <div className="container max-w-[1305px]  ">
        <div className="flex items-center justify-start gap-[129px] mb-[140px] mt-[60px]">
      <div>
        <img className="w-[805px] h-[781px]" src={signUpImg} alt="" />
      </div>
          <div className=" w-[370px] ">
            <h2 className="text-[35px] font-medium leading-[30px] text-black_rgba font-inter">
              Log in to Exclusive
            </h2>
            <h1 className="text-[16px] font-normal leading-[24px] text-black_rgba font-poppins mt-6 mb-8">
              Enter your details below
            </h1>
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full border-b outline-none pb-[5px] placeholder:text-black/25"
              />{" "}
              <input
                type="text"
                placeholder="Password"
                className="w-full border-b outline-none pb-[5px] mt-[40px] placeholder:text-black/25"
              />{" "}
              <br />
              <div className="flex justify-between items-center mt-[40px] ">
                <button className=" text-[16px] font-poppins font-medium leading-6 bg-orange text-white_rgba py-4 px-12 rounded-[4px]">
                  Login
                </button>

                <Link
                  to={"/login"}
                  className="text-[16px] font-poppins font-normal ml-4 leading-6 text-orange"
                >
                  Forget Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
