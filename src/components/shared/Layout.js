import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header"
import Navigation from "../Navigation"
import Sidebar from "./Sidebar";
export default function Layout() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div>{<Header/>}</div>
      <div className="">
      <div>{<Navigation/>}</div>
      </div >
      <div className="flex py-3 px-5 flex-col lg:flex-row p-4">
      <div className="w-[70%] justify-center">{<Outlet/>}</div>
       <div className="flex items-center">
            <div className="h-full border-l-2 border-gray-300"></div>
          </div>
      <div className="w-[30%] flex flex-col p-4 bg-white">{<Sidebar/>}</div>
      </div>
      
    </div>
  );
}
