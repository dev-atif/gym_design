import React from "react";

import NaveButtons from "../NaveButtons";
import SearchBar from "../SearchBar";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import user1 from "../../../../public/images.jpg";
import user2 from "../../../../public/beautiful-woman-smiling-wallpaper-2048x1536_26.jpg";
import user3 from "../../../../public/Max-R_Headshot (1).jpg";
import Image from "next/image";
import ClipPathSVG from "../Clippath";
const user = [{ image: user1 }, { image: user2 }, { image: user3 }];
const HomePage = () => {
  return (
    <div>
      {/* Section 1-------------------------------- */}
      <div className="flex md:flex-row flex-col-reverse  gap-2">
        <div className=" w-2/3">
          {/* Buttons---------------- */}
          <div className="flex gap-2">
            <div className="w-1/2">
              <NaveButtons name="Home" />
            </div>

            <div className="w-1/2 ">
              <NaveButtons name="About" />
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="w-1/2">
              <NaveButtons name="Workout" label={"New"} />
            </div>

            <div className="w-1/2 ">
              <NaveButtons name="Contact" />
            </div>
          </div>
          {/* ---------Search bar--------------------- */}
          <div className="mt-2">
            <SearchBar />
          </div>
          {/* --------- */}
          <div className=" mt-2 flex gap-2 ">
            <div className="bg-white w-[21%] px-5 py-8 flex flex-col gap-3 rounded-3xl">
              <span>
                <h1 className="text-[#A969FD] font-bold  text-3xl">1.2M+</h1>
                <p className="text-sm font-semibold leading-4">
                  Users-in the world
                </p>
              </span>
              <span>
                <h1 className="text-[#A969FD] font-bold  text-3xl">4.9</h1>
                <p className="text-sm font-semibold leading-4">
                  Satifaction Score
                </p>
              </span>
              <span>
                <h1 className="text-[#A969FD] font-bold  text-3xl">5.2K+</h1>
                <p className="text-sm font-semibold leading-4">Reviews</p>
              </span>
            </div>
            <div
              className="bg-white w-full rounded-3xl px-7 py-8 flex gap-8 font-semibold relative"
              style={{ clipPath: `url(#white-ClipPath)` }}
            >
              {/* Clip path Svg ------------------------------ */}
              <svg
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 254 176"
                className="absolute inset-0 "
              >
                <defs></defs>
                <clipPath
                  id="white-ClipPath"
                  data-name="Layer 1"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    class="cls-1"
                    d="m0.933,0.886 H0.424 c-0.014,0,-0.028,0.007,-0.04,0.019 l-0.072,0.076 c-0.011,0.012,-0.025,0.019,-0.04,0.019 H0.067 c-0.037,0,-0.067,-0.043,-0.067,-0.097 V0.097 C0,0.043,0.03,0,0.067,0 h0.866 c0.037,0,0.067,0.043,0.067,0.097 v0.693 c0,0.053,-0.03,0.097,-0.067,0.097"
                  />
                </clipPath>
              </svg>
              {/* ----------------------------------------------- */}
              <span>HD Exercise Videos</span>
              <div>
                <h1 className="uppercase text-red-500 font-bold text-2xl leading-6">
                  With Our Effective Workouts,You will get sweat and fast
                  heartbeat in minutes.
                </h1>
                <p className="font-normal text-lg leading-5 mt-4">
                  No equipement needed just use your bodyweight to work out at
                  home
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side ------------------------------ */}

        <div
          className=" w-full bg-[#A969FD] rounded-3xl px-5 pt-3 relative "
          style={{ clipPath: `url(#myClipPath)` }}
        >
          {/* Clip path SVG ------------------- */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
            className="inset-0 absolute h-0 w-0 "
          >
            <defs>
              <clipPath id="myClipPath" clipPathUnits="objectBoundingBox">
                <path d="M1,1 H0.447 C0.441,1 0.435,0.996 0.431,0.988 L0.394,0.922 C0.39,0.913 0.384,0.909 0.378,0.909 H0.032 C0.015,0.909 0,0.894 0,0.877 V0.032 C0,0.015 0.015,0 0.032,0 H0.968 C0.985,0 1,0.015 1,0.032 V1 Z" />
              </clipPath>
            </defs>
            <rect
              width="1"
              height="1"
              style={{ clipPath: "url(#myClipPath)" }}
            />
          </svg>
          {/* -------------------------------------- */}
          <div>
            <h1 className="uppercase text-[#D8E4A5] border-2 font-bold lg:text-xl   w-fit px-4 py-1 rounded-lg">
              FItness Star in a Month
            </h1>
          </div>
          <div className="mt-7 text-center pr-20">
            <span className="lg:text-6xl font-bold  text-white uppercase">
              APP will help you get a stronger
            </span>
          </div>
          <div className="mt-4  ps-16">
            <span className="lg:text-6xl font-bold  text-white uppercase">
              <span className="text-[#C3FE43]"> Back and shoulders</span> in 300
              days
            </span>
          </div>

          <div className=" flex justify-end mt-2">
            <p className="lg:w-1/2 text-white lg:pr-20 leading-5 text-base">
              Each exercise has a corresponding explanations, illustrative
              images and an explanatory videos so that you can perform each
              exercise correctly.
            </p>
          </div>
          <div className="flex justify-end lg:mt-6 mt-2 mb-3">
            <button className="flex items-center gap-3 bg-[#C3FE43] py-2 font-semibold lg:w-1/5 justify-center rounded-xl">
              Get Started <FaArrowUpLong className="rotate-45" />{" "}
            </button>
          </div>
        </div>
      </div>
      {/* -------------Section 2--------------------- */}
      <div className="flex gap-2 -mt-9">
        <div className=" w-[29%]">
          <div
            className="bg-[#FE4F30] w-full rounded-3xl px-7 pb-6 pt-14 flex gap-8 font-semibold relative"
            style={{ clipPath: `url(#orange-ClipPath)` }}
          >
            {/* Svg Clip Path------------------ */}
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 270 154"
              className="absolute inset-0 w-0 h-0"
            >
              <defs></defs>
              <clipPath
                id="orange-ClipPath"
                data-name="Layer 1"
                clipPathUnits={"objectBoundingBox"}
              >
                <path
                  class="cls-1"
                  d="m0.063,0.13 h0.539 c0.013,0,0.026,-0.008,0.037,-0.021 l0.067,-0.087 c0.011,-0.014,0.024,-0.021,0.037,-0.021 h0.193 c0.035,0,0.063,0.049,0.063,0.11 v0.779 c0,0.061,-0.028,0.11,-0.063,0.11 H0.063 c-0.035,0,-0.063,-0.049,-0.063,-0.11 V0.24 c0,-0.061,0.028,-0.11,0.063,-0.11"
                />
              </clipPath>
            </svg>
            {/* ------------------------------- */}
            <span className="text-white">Custom Workouts</span>
            <div>
              <h1 className="uppercase text-white font-bold text-2xl leading-6">
                Build your own workout with the workout builder.
              </h1>
              <p className="text-white font-normal text-lg leading-5 mt-4">
                Chose from over 850 exercises and challenge yourself with your
                very own training
              </p>
            </div>
          </div>
          <div
            className="bg-[#C3FF45] px-4 pt-2 pb-4 rounded-3xl mt-2 relative"
            style={{ clipPath: `url(#user-ClipPath)` }}
          >
            {/* SVG PAth -------------------------------------------- */}
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200.8 62.67"
              className="absolute inset-0 w-0 h-0"
            >
              <defs></defs>
              <clipPath
                id="user-ClipPath"
                data-name="Layer 1"
                clipPathUnits={"objectBoundingBox"}
              >
                <path
                  class="cls-1"
                  d="m0.915,1 H0.085 C0.038,1,0,0.878,0,0.729 v-0.457 C0,0.121,0.038,0,0.085,0 h0.239 c0.017,0,0.034,0.017,0.049,0.049 l0.006,0.015 c0.014,0.031,0.031,0.049,0.048,0.049 l0.145,0.005 c0.018,0.001,0.036,-0.018,0.051,-0.053 l0.005,-0.011 c0.015,-0.035,0.032,-0.053,0.05,-0.053 h0.238 c0.047,0,0.085,0.121,0.085,0.271 v0.457 c0,0.15,-0.038,0.271,-0.085,0.271"
                />
              </clipPath>
            </svg>
            {/* ---------------------------------------------------- */}
            <span className="flex items-center justify-between">
              <h1 className="font-semibold">Support</h1>
              <p className="">
                <RiDoubleQuotesR size={35} />
              </p>
            </span>
            <div className="flex items-center justify-between mt-6">
              <div className="flex -space-x-3 overflow-hidden">
                {user.map((item, index) => (
                  <div>
                    <Image
                      src={item.image}
                      className="w-8 h-8 rounded-full inline-block  ring-2 ring-white"
                    />
                  </div>
                ))}
              </div>
              <div className="font-bold text-3xl">$3944.00</div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------- */}

        <div
          className="w-[55%] rounded-3xl relative "
          style={{ clipPath: `url(#Video-ClipPath)` }}
        >
          {/* ---Svg clip path ------------------------ */}
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1 1"
            className="absolute inset-0 w-0 h-0"
          >
            <defs></defs>
            <clipPath
              id="Video-ClipPath"
              data-name="Layer 1"
              clipPathUnits={"objectBoundingBox"}
            >
              <path
                class="cls-1"
                d="m0.959,1 H0.041 c-0.023,0,-0.041,-0.042,-0.041,-0.094 V0.094 C0,0.042,0.018,0,0.041,0 h0.546 c0.009,0,0.018,0.007,0.026,0.021 l0.038,0.07 c0.007,0.013,0.016,0.021,0.026,0.021 h0.282 c0.023,0,0.041,0.042,0.041,0.094 v0.701 c0,0.052,-0.018,0.094,-0.041,0.094"
              />
            </clipPath>
          </svg>
          {/* ----------------------------------------- */}
          <video
            controls
            className="absolute rounded-3xl inset-0 w-full h-full object-cover "
          />
        </div>

        {/* ----------------------------------------------------- */}
        <div className="mt-12">
          <div className="bg-[#2A2A2A] px-4 py-4 rounded-3xl flex flex-col gap-3 justify-center">
            <div className="text-white bg-[#3F3F3F] w-16 h-16 flex items-center justify-center rounded-xl">
              <FaFacebook size={40} />
            </div>
            <div className="text-white bg-[#3F3F3F] w-16 h-16 flex items-center justify-center rounded-xl">
              <FaTelegramPlane size={40} />
            </div>
            <div className="text-white bg-[#3F3F3F] w-16 h-16 flex items-center justify-center rounded-xl">
              <FaTwitter size={40} />
            </div>
            <div className="text-white bg-[#3F3F3F] w-16 h-16 flex items-center justify-center rounded-xl">
              <FaYoutube size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
