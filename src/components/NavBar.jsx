import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
// import { RxHamburgerMenu } from "react-icons/rx";
import { VscBellDot } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {MdDashboard} from "react-icons/md";
import user_icon from "../images/user_icon.png";
import {BiNotepad} from "react-icons/bi"
import { IoMdSettings } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import { NavLink } from "react-router-dom";


import logo from "../images/logo.png";




const NavBar = () => {
  const [nav, setNav] = useState(false);

  const [showlog, setShowlog] = useState(false);


  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const menuRef = useRef(null);
  //  const sideRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowlog(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

 

  return (
    <>
      <div
        className="w-full lg:w-4/5  h-16 flex flex-row justify-between px-4 sticky left-1/4
      top-0 right-0 bg-gray-200  z-20 shadow-sm "
      >
        <div className="flex flex-row justify-center items-center">
          <div className="w-12 h-6" onClick={() => setNav(!nav)}>
            <GiHamburgerMenu className="w-6 h-6 sm:w-8 sm:h-6 lg:hidden text-nav-ash cursor-pointer" />
          </div>
          <AiOutlineSearch className="w-6 h-6 sm:w-8 sm:h-6  text-nav-ash" />
        </div>
        <div
          className={`${
            nav &&
            "fixed inset-0 bg-opacity-50 backdrop-blue-[1px] bg-gray-800 duration-700 ease-in-out "
          } `}
        >
          <div
            className={`flex flex-col w-10/12  md:w-8/12 h-screen  lg:hidden absolute left-0 top-0 bottom-0   
                 ${
                   nav ? "translate-x-0" : "-translate-x-full overflow-hidden "
                 } ease-in-out duration-700  border-r-2 border-gray-300`}
          >
            <div className="w-full h-46 px-6 py-8 flex flex-col  bg-gray-800 gap-6">
              <div className="flex flex-row justify-between gap-6">
                {/* <img src={green} alt="RBF" className="w-24 h-20 rounded-sm" /> */}
                <div className=" w-full flex flex-row justify-end items-center">
                  
                  <FaTimes
                    className="w-6 h-6 text-red-500  cursor-pointer"
                    onClick={() => setNav(!nav)}
                  />
                </div>
              </div>
              <div className="flex justify-center w-full h-fit bg-regal-blue px-6 lg:px-10 py-6 rounded-lg">
                <img
                  src={logo}
                  alt="RBF"
                  className="w-full h-fit rounded-sm"
                />
              </div>
              {/* <div className="flex flex-row w-full p-3 justify-between bg-regal-blue rounded-lg">
                <div>
                  <h6 className="font-bold text-xl text-gray-100">Vicky</h6>
                  <p className=" text-gray-400">Production</p>
                </div>
                <div className="flex justify-center items-center">
                  <TiArrowUnsorted className="w-6 h-6 text-gray-300" />
                </div>
              </div> */}
            </div>
            <div className="h-1 w-full bg-gray-600"></div>
         
                <div className="flex flex-col justify-start px-6 gap-1.5  py-6  h-full bg-gray-800 ">
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
           hover:bg-gray-700 rounded-lg  hover:duration-200 hover:ease-in-out" onClick={() => setNav(!nav)}
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
           hover:bg-gray-700 rounded-lg  hover:duration-200 hover:ease-in-out" onClick={() => setNav(!nav)}
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
           hover:bg-gray-700 rounded-lg  hover:duration-200 hover:ease-in-out" onClick={() => setNav(!nav)}
                      >
                        <BiNotepad className="text-xl" /> Booking
                      </li>
                    </NavLink>
                </div>
             
          </div>
        </div>

        <div
          className="flex flex-row justify-center items-center gap-2"
          ref={menuRef}
        >
          <VscBellDot className="w-12 h-6 text-nav-ash" />
          <div
            className="cursor-pointer w-10 h-10 "
            onClick={() => setShowlog(!showlog)}
          >
           
              <img
                src={user_icon}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
           
          </div>
          {showlog && (
            <>
              <div className="fixed top-20 right-4 h-fit w-[145px] bg-white flex flex-col rounded-lg shadow border border-gray-50">
                <div className="flex flex-col p-3 gap-2">
                  <span className="font-semibold  text-gray-800">Account</span>
                  <span className="text-nav-ash font-md capitalize">
                    Arul selvan
                  </span>
                </div>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="w-full flex flex-col p-2 gap-2">
                  <div className="flex flex-col  justify-between">
                    <Link to={``}>
                      {" "}
                      <span
                        className="flex flex-row items-center gap-2 cursor-pointer text-nav-ash px-2 py-1 font-md hover:rounded hover:duration-300  hover:bg-red-500 hover:text-white"
                        onClick={() => setShowlog(!showlog)}
                      >
                        <IoMdSettings className="text-[18px]" /> Setting
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-col  justify-between">
                    <span
                      className="flex flex-row items-center gap-2 cursor-pointer px-2 py-1
                      hover:bg-red-500 hover:text-white hover:rounded hover:duration-300 text-nav-ash font-md"
                      onClick={logOut}
                    >
                      <IoMdLogOut className="text-[18px]" />
                      Log out
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;