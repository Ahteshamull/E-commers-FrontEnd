import React from "react";
import signUpImg from "../assets/signupImg.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="container max-w-[1305px]  ">
      <div className="flex items-center justify-start gap-[129px] mb-[140px] mt-[60px]">
        <div>
          <img className="w-[805px] h-[781px]" src={signUpImg} alt="" />
        </div>
        <div className="w-[295px] ">
          <h2 className="text-[36px] font-medium leading-[30px] text-black_rgba font-inter">
            Create an account
          </h2>
          <h1 className="text-[16px] font-normal leading-[24px] text-black_rgba font-poppins mt-6 mb-8">
            Enter your details below
          </h1>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b outline-none pb-[5px] placeholder:text-black/25"
            />{" "}
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full border-b outline-none mt-[40px] pb-[5px] placeholder:text-black/25"
            />{" "}
            <input
              type="text"
              placeholder="Password"
              className="w-full border-b outline-none pb-[5px] mt-[40px] placeholder:text-black/25"
            />{" "}
            <br />
            <div className="mt-[40px] ">
              <button className="w-full text-[16px] font-poppins font-medium leading-6 bg-orange text-white_rgba py-4 rounded-[4px]">
                Create Account
              </button>
              <div className="w-full flex gap-4 items-center justify-center border border-black/35 text-center text-[16px] font-poppins font-medium leading-6  text-black_rgba py-4 rounded-[4px] mt-4 mb-8">
                <FcGoogle size={24} className="" />
                <button>Sign up with Google</button>
              </div>
            </div>
            <div className="w-full text-center">
              <p className="text-[16px] font-poppins font-normal leading-6 text-black_rgba">
                Already have account?
                <Link
                  to={"/login"}
                  className="text-[16px] font-poppins font-medium ml-4 leading-6 text-black_rgba"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;


