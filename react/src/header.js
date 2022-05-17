import React, { Component } from "react";
import "./header.css";


class header extends Component {
  render() {
      return (
        <div className="">
          <div className="flex items-center justify-between py-10">
            <div className="w-1/12">
              <p className="text-3xl">EVELO</p>
              <p className="text-xs text-right">Lorem, ipsum.</p>
            </div>
            <div className="w-2/5">
              <ul className="flex itams-center justify-between text-xs">
                <li>
                  <a href="#">BIKES</a>
                </li>
                <li>
                  <a href="#">ACCESSDRIS</a>
                </li>
                <li>
                  <a href="#">SERVICE</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </div>
            <div className="w-1/12">
              <span className="absolute shop-s right-0 top-0 p-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {/* <shopping-bag-icon size="1.5x" className="custom-className"></shopping-bag-icon> */}
              </span>
            </div>
          </div>
        </div>
      );
  }
}
export default header;
