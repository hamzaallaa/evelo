import React,{Component} from 'react'
import Header from "./header";
import "./slider.css";

class slider extends Component {
  
  render() {
      return (
        <div className="bg  text-white relative ">
          <div>
            <Header className="container mx-auto h-full" />
            <div className="relative">
              <div className="container mx-auto h-full h-full flex items-center rela justify-between mt-32">
                <div className="w-1/6 flex items-center flex-col justify-center">
                  <div className="play-p p-10 rounded-full ">
                    {" "}
                    <svg xmlns="http://www.w3.org/2000/svg" className="custom-class w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className=" mt-20 rotate">PLAY VIDEO</span>
                </div>
                <div className="w-3/6 flex items-center flex-col mt-32">
                  <h1 className="text-8xl text-white title-s font-bold">LIVE LIFE TO THE FULLES?</h1>
                  <p className="text-xs w-3/5  mt-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta optio molestias dolore tempora ab unde consequuntur .</p>
                </div>
                <div className="w-2/6">
                  <div className="shop absolute bottom-0 right-0 py-12 px-32">
                    <a href="/#">SHOP BIKS --- </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 py-20 mt-20 rectangle"></div>
        </div>
      );
  }
}
export default slider;