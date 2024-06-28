import React from 'react'
import Dot from '../assets/_Dot.png';
import Marker from '../assets/marker-pin-01.png';
import Stacked from '../assets/coins-stacked-03.png';
import Figma from '../assets/image 1.png';
import Adobe from '../assets/image 2.png';
import XD from '../assets/image 6.png';

export default function JobPreview() {
  return (
    <div>
        <div className="w-full lg:w-3/4 p-4">
            <div className="py-3">
              <div className="flex space-x-2 items-center">
                <h1 className="text-2xl font-bold">Senior Product Designer</h1>
                <span className="text-gray-600 text-sm">posted 2 days ago</span>
                <span className="inline-block bg-green-100 text-green-800 mt-2 text-xs px-2 py-1 rounded-full flex items-center">
                  <img src={Dot} alt="Dot" className="mr-1" /> Open
                </span>
              </div>
              <div className="flex space-x-10">
                <div className="mt-2">
                  <span className="text-gray-700 flex">
                    <img src={Marker} alt="Location" />  Delaware, USA
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-gray-700 flex">
                    <img src={Stacked} alt="Salary" />$300k-$400k
                  </span>
                </div>
              </div>
            </div>
            <hr className="border-gray-300" />
            <div className="flex item-center space-x-10 mt-2">
              <div className="mb-4">
                <h2 className="text-gray-500">Skills Required</h2>
                <div>
                  <span className="inline-block border-2 border-gray-300 text-gray-800 mt-2 text-xs px-2 py-1 rounded-lg flex items-center">
                    <img src={Figma} alt="Figma" className="mr-1" /> Figma
                  </span>
                  <span className="inline-block border-2 border-gray-300 text-gray-800 mt-2 text-xs px-2 py-1 rounded-lg flex items-center">
                    <img src={Adobe} alt="Adobe Illustrator" className="mr-1" /> Adobe Illustrator
                  </span>
                  <span className="inline-block border-2 border-gray-300 text-gray-800 mt-2 text-xs px-2 py-1 rounded-lg flex items-center">
                    <img src={XD} alt="Adobe XD" className="mr-1" /> Adobe XD
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <h2 className="text-gray-500">Preferred Language</h2>
                <p className="font-bold">English</p>
              </div>
              <div className="mb-4">
                <h2 className="text-gray-500">Type</h2>
                <p className="font-bold">Full time</p>
              </div>
              <div className="mb-4">
                <h2 className="text-gray-500">Years of Experience</h2>
                <p className="font-bold">3+ Years of Experience</p>
              </div>
            </div>
            <hr className="border-gray-300" />
            <div className="mb-4">
              <h2 className="text-gray-500 mt-2">About the job</h2>
              <p>1. Handle the UI/UX research design</p>
              <p>2. Work on researching on latest web applications designs & trends</p>
              <p>3. Work on conceptualizing and visualizing</p>
              <p>4. Work on creating graphics content and other graphic related works</p>
            </div>
            <div className="mb-4">
              <h2 className="">Benefits:</h2>
              <ul className="list-disc list-inside px-2">
                <li>Health insurance</li>
                <li>Provident Fund</li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="">Schedule:</h2>
              <ul className="list-disc list-inside px-2">
                <li>Day shift</li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="">Supplemental pay types:</h2>
              <ul className="list-disc list-inside px-2">
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
              </ul>
            </div>
            <div className="mb-4 flex space-x-2">
              <h2 className="">Work Location:</h2>
              <p>In person</p>
            </div>
            <hr className="border-gray-300" />
            <div className="max-w-md my-5">
              <div>
                <div>
                  <div className="flex items-center">
                    <img
                      src="https://www.atlassian.com/favicon.ico" 
                      alt="Atlassian"
                      className="w-10 h-10"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold text-gray-800">Atlassian</h2>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex space-x-20">
                  <div className="">
                    <div className="flex flex-col mt-2">
                      <span className="text-gray-500">Company size</span>
                      <span className="text-gray-800">1k - 2k Employees</span>
                    </div>
                    <div className="flex flex-col mt-2">
                      <span className="text-gray-500">Sector</span>
                      <span className="text-gray-800">Information Technology, Infrastructure</span>
                    </div>
                    <div className="flex flex-col mt-2">
                      <span className="text-gray-500">Founded In</span>
                      <span className="text-gray-800">2019</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col mt-2">
                      <span className="text-gray-500">Type</span>
                      <span className="text-gray-800">Private</span>
                    </div>

                    <div className="flex flex-col mt-2">
                      <span className="text-gray-500">Funding</span>
                      <span className="text-gray-800">Bootstrapped</span>
                    </div>
                 
                    <div className="flex flex-col mt-2">
                      <span className="text-gray-500">Founded By</span>
                      <span className="text-gray-800">Scott Farquhar, Mike Cannon-Brookes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
