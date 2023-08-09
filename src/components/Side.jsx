import {
    BsFillBarChartFill,
    BsFillPeopleFill,
  } from "react-icons/bs";
  
  import { MdAccountCircle } from "react-icons/md";
  import { AiFillSetting } from "react-icons/ai";
  
  import { TiArrowUnsorted } from "react-icons/ti";
  import {  NavLink } from 'react-router-dom';
  import { IoIosPeople } from "react-icons/io";
//   import {MdOutlineInventory} from "react-icons/md";
  import {RiUserSettingsFill} from "react-icons/ri"
  import { VscReferences } from "react-icons/vsc";
  import { BsDatabaseFillGear } from "react-icons/bs";
  import {MdShoppingCart} from "react-icons/md";
  import { FaUsers } from "react-icons/fa";
  import { MdPeopleAlt } from "react-icons/md";
  import {MdOutlineAssessment} from "react-icons/md"
  import logo from "../images/logo.png";
  import {BiNotepad} from "react-icons/bi"
  import { useState, useEffect } from "react";
  import {MdDashboard} from "react-icons/md";
  
  
  
  
  const SideBar = () => {
    
    return (
    
        
         
            <>
              <div className="lg:flex flex-col w-1/5  h-screen  hidden md:fixed left-0 top-0 bg-gray-800 ">
                <div className="w-full h-fit px-6 py-8 flex flex-col  bg-gray-800  gap-4">
                  {/* <h1 className="text-2xl font-bold text-red-600 m-auto capitalize">
                    Company Logo
                  </h1> */}
                  <div className="flex justify-center w-full h-fit bg-gray-700 p-5 rounded-lg">
                    <img
                      src={logo}
                      alt="RBF"
                      className="w-full h-fit rounded-sm"
                    />
                  </div>
                </div>
                <div className="h-px w-full bg-gray-600"></div>
                <div className="h-full bg-white">
                  <div className="flex flex-col justify-start px-6 gap-1.5  py-6  h-full bg-gray-800  ">
                    <NavLink
                      to="/homepage/dashboard"
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              backgroundColor: "#364152",
                              borderRadius: "8px",
                              color: "#e3242b",
                            }
                          : {
                              color: "#94a3b4",
                            };
                      }}
                    >
                      <li
                        className="flex flex-row items-center gap-4  p-2  text-base font-bold hover:text-third
           hover:bg-gray-700 rounded-lg  hover:duration-200 hover:ease-in-out"
                      >
                        <MdDashboard className="text-xl" /> DashBoard
                      </li>
                    </NavLink>
                    <NavLink
                      to="/homepage/customermaster"
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              backgroundColor: "#364152",
                              borderRadius: "8px",
                              color: "#e3242b",
                            }
                          : {
                              color: "#94a3b4",
                            };
                      }}
                    >
                      <li
                        className="flex flex-row items-center gap-4  p-2  text-base font-bold hover:text-third
           hover:bg-gray-700 rounded-lg  hover:duration-200 hover:ease-in-out"
                      >
                        <IoIosPeople className="text-xl" /> Customer Master
                      </li>
                    </NavLink>
                    <NavLink
                      to="/homepage/booking"
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              backgroundColor: "#364152",
                              borderRadius: "8px",
                              color: "#e3242b",
                            }
                          : {
                              color: "#94a3b4",
                            };
                      }}
                    >
                      <li
                        className="flex flex-row items-center gap-4  p-2  text-base font-bold hover:text-third
           hover:bg-gray-700 rounded-lg  hover:duration-200 hover:ease-in-out"
                      >
                        <BiNotepad className="text-xl" /> Booking
                      </li>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
        
      
    
    );
  };
  
  export default SideBar