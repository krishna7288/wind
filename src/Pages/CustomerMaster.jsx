import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";



const CustomerMaster = () => {
  const initialstate = {
    name: "",

  };


  const [form, setForm] = useState(initialstate);


  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

 
  };


  return (
    <div
      className="flex flex-col w-full lg:w-4/5 h-auto 
      fixed  md:absolute left-1/5 right-0 top-16  px-6 gap-2 bg-gray-100 shadow-md rounded-md "
    >
      <div className="flex flex-rows justify-center items-center w-full  h-12 my-8 ">
        <h2 className="text-xl md:text-2xl  font-semibold text-gray-500 w-full">
          Customer Master Form
        </h2>
        <Link to="/homepage/roles">
          <FaTimes className="w-12 h-6 cursor-pointer text-gray-500" />
        </Link>
      </div>
      <div className="w-full h-px bg-gray-400"></div>
      <form onSubmit={handleSubmit}>
        <div className="w-full h-full grid grid-cols-1  gap-10">
          <div className="w-full h-full grid grid-cols-2  gap-10">
          <div className="h-28 grid grid-cols-1  items-center p-3 gap-2 sm:mx-4 ">
            <div>
              <label className="text-lg font-medium text-gray-500">Company</label>
            </div>
            <div className="grid grid-cols-1">
              <input
                type="text"
                required
                name="fullname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ener your Company"
                className="px-2 pt-1.5 pb-2 border border-gray-300 rounded-md
        text-md text-gray-400 focus:border-error focus:bg-white focus:text-error   focus:shadow-[0_0_0_1px] focus:shadow-error focus:outline-none
       "
              />
            </div>
          </div>
          <div className="h-28 grid grid-cols-1  items-center p-3 gap-2 sm:mx-4 ">
            <div>
              <label className="text-lg font-medium text-gray-500">Name</label>
            </div>
            <div className="grid grid-cols-1">
              <input
                type="text"
                required
                name="fullname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your Name"
                className="px-2 pt-1.5 pb-2 border border-gray-300 rounded-md
        text-md text-gray-400 focus:border-error focus:bg-white focus:text-error   focus:shadow-[0_0_0_1px] focus:shadow-error focus:outline-none
       "
              />
            </div>
          </div>
          <div className="h-28 grid grid-cols-1  items-center p-3 gap-2 sm:mx-4 ">
            <div>
              <label className="text-lg font-medium text-gray-500">Designation</label>
            </div>
            <div className="grid grid-cols-1">
              <input
                type="text"
                required
                name="fullname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your Destination"
                className="px-2 pt-1.5 pb-2 border border-gray-300 rounded-md
        text-md text-gray-400 focus:border-error focus:bg-white focus:text-error   focus:shadow-[0_0_0_1px] focus:shadow-error focus:outline-none
       "
              />
            </div>
          </div>
          <div className="h-28 grid grid-cols-1  items-center p-3 gap-2 sm:mx-4 ">
            <div>
              <label className="text-lg font-medium text-gray-500">Email Id</label>
            </div>
            <div className="grid grid-cols-1">
              <input
                type="text"
                required
                name="fullname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your Email id"
                className="px-2 pt-1.5 pb-2 border border-gray-300 rounded-md
        text-md text-gray-400 focus:border-error focus:bg-white focus:text-error   focus:shadow-[0_0_0_1px] focus:shadow-error focus:outline-none
       "
              />
            </div>
          </div>
          <div className="h-28 grid grid-cols-1  items-center p-3 gap-2 sm:mx-4 ">
            <div>
              <label className="text-lg font-medium text-gray-500">Phone Number</label>
            </div>
            <div className="grid grid-cols-1">
              <input
                type="text"
                required
                name="fullname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your Phone Number"
                className="px-2 pt-1.5 pb-2 border border-gray-300 rounded-md
        text-md text-gray-400 focus:border-error focus:bg-white focus:text-error   focus:shadow-[0_0_0_1px] focus:shadow-error focus:outline-none
       "
              />
            </div>
          </div>
          <div className="h-28 grid grid-cols-1  items-center p-3 gap-2 sm:mx-4 ">
            <div>
              <label className="text-lg font-medium text-gray-500">GST</label>
            </div>
            <div className="grid grid-cols-1">
              <input
                type="text"
                required
                name="fullname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter Your GST"
                className="px-2 pt-1.5 pb-2 border border-gray-300 rounded-md
        text-md text-gray-400 focus:border-error focus:bg-white focus:text-error   focus:shadow-[0_0_0_1px] focus:shadow-error focus:outline-none
       "
              />
            </div>
          </div>
          <div className="h-28 grid grid-cols-1  items-center p-3 gap-2 sm:mx-4 ">
            <div>
              <label className="text-lg font-medium text-gray-500">Address</label>
            </div>
            <div className="grid grid-cols-1">
              <input
                type="text"
                required
                name="fullname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your Address"
                className="px-2 pt-1.5 pb-2 border border-gray-300 rounded-md
        text-md text-gray-400 focus:border-error focus:bg-white focus:text-error   focus:shadow-[0_0_0_1px] focus:shadow-error focus:outline-none
       "
              />
            </div>
          </div>
          </div>
         
          <div className="flex flex-row justify-center items-center my-24 gap-6 ">
            <button
              className="py-2 px-7 bg-error text-white shadow shadow-error hover:bg-error  ease-in-out duration-300 text-normal font-semibold
      rounded-md "
              type="submit"
            >
              {editMode ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerMaster;