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
      </div>
      <div className="flex items-center justify-around">
      <div className="w-[70%] justify-center">{<Outlet/>}</div>
      <div className="w-[30%]">{<Sidebar/>}</div>
      </div>
      
    </div>
  );
}
