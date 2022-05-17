import React, { Component } from "react";
import "./about.css";

class about extends Component {
  render() {
    return (
       <div className="container mx-auto">
      <div className=" mx-16 mt-12 text-5xl font-bold w-1/12 title">BIKE FEATURES</div>
      <div className="">
          <span></span>
          <div className="relative content" >
              <img className="m-auto w-4/5" src="https://storeno.b-cdn.net/stores/5-2022/1652705755406.png" alt="" />
                <div className="card px-12 py-16">
                    <h2 className="font-extrabold"><span className="relative">MOTIONDRIVE <span className="text-xs mt">TM</span> </span>  <span>SYSTEM</span> </h2>
                    <p className="mt-3 text-xs leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, ex minus! Voluptatibus iure placeat labore minima maxime accusamus fugit ducimus!</p>
                    <div className=" flex justify-end">
                      <p className="next mt-5 px-8 py-2" >
                        <a to="#">Next --</a>
                      </p>
                    </div>
                </div>
          </div>
      </div>
  </div>
    );
  }
}
export default about;
