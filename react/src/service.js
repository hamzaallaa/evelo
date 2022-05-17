import React, { Component } from "react";
import "./service.css";

class service extends Component {
  render() {
      return (
        <div className="">
          <div className="container mx-auto mt-64 px-16">
            <div className="flex">
              <div className="w-1/3 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="custom-class w-32 h-32 text-white absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
                <div className="w-full flex justify-end">
                  <div className="w-2/3 ">
                    <h2 className="title font-semibold ">FREE SHIPPING</h2>
                    <p className="text-xs mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atas nihil non culpa!</p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="custom-class w-32 h-32 text-white absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {/* <credit-card-icon className="custom-class w-32 h-32 text-white absolute"></credit-card-icon> */}
                <div className="w-full flex justify-end">
                  <div className="w-2/3 ">
                    <h2 className="title font-semibold ">10 DAY AT-HOME TRIAL</h2>
                    <p className="text-xs mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atas nihil non culpa!</p>
                  </div>
                </div>
              </div>
              <div className="w-1/3 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="custom-class w-32 h-32 text-white absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div className="w-full flex justify-end">
                  <div className="w-2/3 ">
                    <h2 className="title font-semibold ">4-YEAR/20K-MILE WARRANTY</h2>
                    <p className="text-xs mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atas nihil non culpa!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
export default service;
