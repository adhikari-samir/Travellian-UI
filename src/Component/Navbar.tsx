"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/Image/Logo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Navbar = () => {
  const [showmenu, setShowmenu] = useState(false);

  const toggleMenu = () => {
    setShowmenu(!showmenu);
  };

  return (
    <>
      <div className="primary-div  bg-lime-500 w-[1920px] h-[1194px]  bg-no-repeat bg-center bg-[url('https://s3-alpha-sig.figma.com/img/ac7b/4316/55447d05c75fa3f3de352e02b80a7bbf?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APfj7uBChTitzRTtjHR~~4eqS81vXIyUXj9F7Is6qqAMPqNvbngRr9axwrvKBcK6lWh7wLBSJGjBZi1F1b8EX32XeD~oyiRw5UEiPKR0yu-GMGMzxRIoKFI00stuC9045nwEyB4wSiG8whyOKzd8QpwweLwzp9C9Xj7dVn-ARD5MB~u7w8EpY-E9~308pkP8-eijAfXgCBd4KY1fA6fNhVGZk8e2Ewm8QN1-vZWnKUmiSG3Oi88Yd700edYl-9J0OnjbHRfPKouLpIlA~cXkDFJt8HZD~zhw5khVpSEDg2VoVA2OpQ4oyCSDiKULI1QjG3wBHr8UGS-WJS~P4Amulg__')]">
        <div className="secondary-div mt-[35px] lg:mt-[20px]  ">
          <div className="flex justify-between">
            {/*Logo*/}
            <div>
              <Image
                className="w-[140px] h-[28px] md:w-[234px] md:h-[45px]  "
                src={Logo}
                alt="Travellian logo"
              />
            </div>
            <div className="">
              {/*Logo*/}
              {/*navbar item*/}
              <div className="hidden lg:block ">
                <ul className="flex flex-col gap-8 md:flex-row lg:flex-row text-black font-regular font-Rubik text-[12px] md:text-[15px] md:mt-2  lg:text-[20px]">
                  <li className="border-b-4 border-orange-300 rounded-sm">
                    <a href="#">Home</a>{" "}
                  </li>
                  <li>
                    <a href="#">Explore</a>{" "}
                  </li>
                  <li>
                    <a href="#">Travel</a>{" "}
                  </li>
                  <li>
                    <a href="#">Blog</a>{" "}
                  </li>
                  <li>
                    <a href="#">Pricing</a>{" "}
                  </li>
                </ul>
              </div>
              {/*navbar item*/}
              {/*nav button*/}
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-4 text-black font-regular font-Rubik  lg:text-[20px] ">
                <button>Login</button>
                <button className="border bg-orange-400 rounded-lg  p-2 border-none">
                  Sign Up
                </button>
              </div>
            </div>
            {/*nav button*/}
            {/*Hamburger menu*/}
            <div className="lg:hidden">
              <div
                className="space-y-1  p-2 h-[50px] w-[50px] rounded-lg  "
                onClick={toggleMenu}
              >
                <div className="bg-black w-6 h-0.5"></div>
                <div className="bg-black w-6 h-0.5"></div>
                <div className="bg-black w-6 h-0.5"></div>
              </div>
              <div
                className={`bg-gray-100 h-[100vh] w-40  absolute top-0 right-0 ${
                  showmenu ? "" : "hidden"
                }`}
              >
                <h1
                  className="text-right mr-3 text-black text-[24px]"
                  onClick={toggleMenu}
                >
                  x
                </h1>
                <ul className="space-y-3 space-x-3 text-black font-regular font-Rubik text-[16px]">
                  <li></li>
                  <li>
                    <a href="#">Home</a>{" "}
                  </li>
                  <li>
                    <a href="#">Explore</a>{" "}
                  </li>
                  <li>
                    <a href="#">Travel</a>{" "}
                  </li>
                  <li>
                    <a href="#">Blog</a>{" "}
                  </li>
                  <li>
                    <a href="#">Pricing</a>{" "}
                  </li>
                </ul>
                <div className="">
                  <div className="flex gap-4 text-black font-regular font-Rubik text-[16px]  mt-5 ml-4">
                    <button>Login</button>
                    <button className="border bg-orange-400 rounded-lg  p-2 border-none">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Hamburger menu*/}

          <div className="flex flex-col gap-[16px]   text-white mt-[100px] ">
            <div className="font-Playfair font-regular text-[39px]  lg:text-[64px] md:w-[728px] md:h-[144px] md:text-[54px] lg:w-[910px] lg:h-[170x]">
              Start your unforgettable journey with us.
            </div>
            <div className=" font-regular font-Rubik text-[18px] w-[288px] lg:text-[24px] md:w-[728px] lg:mt-10 ">
              The best travel for your jouney begins now
            </div>
          </div>
          {/*lastpart*/}
          <div className="mt-[100px] lg:mt-[140px]  bg-white  rounded-lg font-Rubik text-[14px] font-regular text-slate-500 flex flex-col md:flex-row gap-10 md:absolute left-0  md:w-[659px] md:h-[205px] md:text-[16px] lg:w-[1040px] lg:h-[176px] ">
            <div className="flex flex-col md:flex-row gap-12 p-4 md:w-[659px] md:h-[170px] md:gap-10 lg:w-full   lg:gap-0 ">
              <div className="flex flex-col gap-12 lg:flex-row lg:p-[54px] ">
                <div>
                  <label>DESTINATION</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Dubai"
                    className="outline-none border-b border-black w-full font-Playfair text-[14px] font-regular mt-[12px]  text-black"
                  />
                </div>
                <div>
                  <label>PERSON</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="2"
                    className="outline-none border-b border-black w-full font-Playfair text-[14px] font-regular mt-[12px]  text-black"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-12 lg:flex-row lg:p-[54px]">
                <div>
                  <label>CHECK IN</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Sun, 17th Sep 2020"
                    className="outline-none border-b border-black w-full font-Playfair text-[14px] font-regular mt-[12px]  text-black"
                  />
                </div>
                <div>
                  <label>CHECK OUT</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Tue, 17th Oct 2020"
                    className="outline-none border-b border-black w-full font-Playfair text-[14px] font-regular mt-[12px]  text-black"
                  />
                </div>
              </div>
            </div>
            <div className="text-[36px] mt-[30px] w-full h-[128px] flex items-center bg-orange-400 rounded-b-lg font-Playfair justify-between p-4 text-white  md:h-full md:w-[300px] md:mt-0 md:rounded-tr-lg md:rounded-bl-none lg:w-[230px] ">
              <div>BOOK NOW</div>
              <div>
                {" "}
                <HiOutlineArrowLongRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
