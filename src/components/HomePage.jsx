import React from 'react';

import { Outlet } from 'react-router';
import NavBar from './NavBar';
import SideBar from './Side';







const HomePage = () => {
  return (
    <>
    <NavBar/>
    <SideBar/>
    <Outlet/>
    </>
  )
}

export default HomePage