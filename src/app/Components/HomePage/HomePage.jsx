import React from "react";

import NaveButtons from "../NaveButtons";
import SearchBar from "../SearchBar";
import { FaArrowUpLong } from "react-icons/fa6";
const HomePage = () => {
  return (
    <div>
        {/* Section 1-------------------------------- */}
      <div className="flex gap-2">
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
            <div className="bg-white w-full rounded-3xl px-7 py-8 flex gap-4 font-semibold clip-path">
              <span>HD Exercise Videos</span>
              <div>
                <h1 className="uppercase text-red-500 font-bold text-2xl leading-6">
                  With Our Effective Workouts,You will get sweat and fast
                  heartbeat in minutes.
                </h1>
                <p className="font-semibold text-lg leading-5 mt-4">
                  No equipement needed just use your bodyweight to work out at
                  home
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side ------------------------------ */}
        <div className=" w-full bg-[#A969FD] rounded-3xl px-5 pt-3">
          <div>
            <h1 className="uppercase text-[#D8E4A5] border-2 font-bold text-xl   w-fit px-4 py-1 rounded-lg">
              FItness Star in a Month
            </h1>
          </div>
          <div className="mt-4 text-center pr-20">
            <span className="text-6xl font-bold  text-white uppercase">
              APP will help you get a stronger
            </span>
          </div>
          <div className="mt-4  ps-16">
            <span className="text-6xl font-bold  text-white uppercase">
              <span className="text-[#C3FE43]"> Back and shoulders</span> in 300
              days
            </span>
          </div>

          <div className=" flex justify-end mt-2">
            <p className="w-1/2 text-white pr-20 leading-5 text-base">
              Each exercise has a corresponding explanations, illustrative
              images and an explanatory videos so that you can perform each
              exercise correctly.
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <button className="flex items-center gap-3 bg-[#C3FE43] py-2 font-semibold w-1/5 justify-center rounded-xl">Get Started <FaArrowUpLong className="rotate-45" /> </button>
          </div>
        </div>
      </div>
      {/* -------------Section 2--------------------- */}
    </div>
  );
};

export default HomePage;
