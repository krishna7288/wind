import React, { useEffect ,useState} from 'react';
import {
  AiFillDollarCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import {MdAccountCircle } from "react-icons/md";
import {GiProgression } from 'react-icons/gi';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const DashBoard = () => {
    return (
      <>
        <div className="flex flex-row relative">
          <div className="flex flex-col w-full  lg:w-4/5  md:absolute left-1/5 right-0 z-0 ">
            <div className="w-full  flex flex-col py-12 ">
              <div
                className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-4
         px-4"
              >
                <div className="w-full h-52 py-6 px-4 flex flex-col shadow-md rounded-2xl bg-white">
                  <div
                    className="flex flex-row justify-between items-center w-full
          h-1/2 "
                  >
                    <div className="">
                      <span className="text-gray-500 font-semibold">
                        BUDGET
                      </span>
                      <h4 className="font-bold text-2xl mt-4">$24K</h4>
                    </div>
                    <div className="">
                      <AiFillDollarCircle className="w-12 h-12 text-red-500" />
                    </div>
                  </div>
                  <div className="w-full  flex flex-row items-center gap-1 mt-6">
                    <AiOutlineArrowUp className="text-green-500 font-bold text-xl" />
                    <p className="text-green-500 font-semibold text-xl">12%</p>
                    <span className="text-gray-500 ml-3">Since last month</span>
                  </div>
                </div>
                <div className="w-full h-52 py-6 px-4 flex flex-col shadow-md rounded-2xl bg-white">
                  <div
                    className="flex flex-row justify-between items-center w-full
          h-1/2"
                  >
                    <div className="">
                      <span className="text-gray-500 font-semibold">
                        TOTAL CUSTOMERS
                      </span>
                      <h4 className="font-bold text-2xl mt-4">1.6K</h4>
                    </div>
                    <div className="">
                      <MdAccountCircle className="w-12 h-12 text-green-500" />
                    </div>
                  </div>
                  <div className="w-full  flex flex-row items-center gap-1 mt-6">
                    <AiOutlineArrowDown className="text-red-500 font-bold text-xl" />
                    <p className="text-red-500 font-semibold text-xl">16%</p>
                    <span className="text-gray-500 ml-3">Since last month</span>
                  </div>
                </div>
                <div className="w-full  h-52 py-6 px-4 flex flex-col shadow-md rounded-2xl bg-white">
                  <div
                    className="flex flex-row justify-between items-center w-full
          h-1/2"
                  >
                    <div className="">
                      <span className="text-gray-500 font-semibold">
                        TASK PROGRESS
                      </span>
                      <h4 className="font-bold text-2xl mt-4">75.5%</h4>
                    </div>
                    <div className="">
                      <GiProgression className="w-12 h-12 text-orange-500" />
                    </div>
                  </div>
                  <div className="w-full  flex flex-row items-center gap-1 mt-6">
                    <div className="h-1 w-8/12 bg-orange-400 mt-4"></div>
                  </div>
                </div>
                <div className="w-full  h-52 py-6 px-4 flex flex-col shadow-md rounded-2xl bg-white">
                  <div
                    className="flex flex-row justify-between items-center w-full
          h-1/2"
                  >
                    <div className="">
                      <span className="text-gray-500 font-semibold">
                        TOTAL PROFIT
                      </span>
                      <h4 className="font-bold text-2xl mt-4">$15K</h4>
                    </div>
                    <div className="">
                      <AiFillDollarCircle className="w-12 h-12 text-blue-500" />
                    </div>
                  </div>
                  <div className="w-full  flex flex-row items-center gap-1 mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </>
    );
}

export default DashBoard