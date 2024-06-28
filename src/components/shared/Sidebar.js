import React from "react";
import Message from '../../assets/message-square-01.png';
import User from '../../assets/users-01.png';
import UserCheck from '../../assets/user-check-01.png';
import Views from '../../assets/eye.png';
import Delete from '../../assets/trash-03.png';
import Edit from '../../assets/edit-02.png';

const Sidebar = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col bg-white">
            <div className="flex justify-end mb-4 space-x-5">
              <button className="bg-red-100 flex text-red-500 py-3 px-6 rounded-lg border-2 border-red-500"
                style={{ width: '172px', height: '46px' }}
              >
                <img src={Delete} alt="Delete" className="mr-1" /> Delete job
              </button>
              <button
                className="bg-orange-500 flex text-white py-3 px-6 rounded-lg hover:bg-orange-600 border-2 border-solid border-gray-300"
                style={{ width: '172px', height: '46px' }}
              >
                <img src={Edit} alt="Edit" className="mr-1" /> Edit job
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 flex">
                  <img src={User} alt="Applicants" className="mr-1" />Applicants
                </span>
                <span className="text-black font-bold">400</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between items-center">
                <span className="text-gray-700 flex">
                  <img src={UserCheck} alt="Matches" className="mr-1" />Matches
                </span>
                <span className="text-black font-bold">100</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between items-center">
                <span className="text-gray-700 flex">
                  <img src={Message} alt="Messages" className="mr-1" />Messages
                </span>
                <span className="text-black font-bold">147</span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between items-center">
                <span className="text-gray-700 flex">
                  <img src={Views} alt="Views" className="mr-1" />Views
                </span>
                <span className="text-black font-bold">800</span>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Sidebar;
