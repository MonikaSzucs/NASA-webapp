import React from "react";
import Navbar from '../Components/Navbar';

export default function About() {
  return (
    <div>
        <Navbar/>
        
        <div className="container md:flex items-center justify-center mx-auto md:w-4/5 align-middle flex-grow md:h-full ">
            <div className="flex-none"></div>
            <div className="md:col-span-2 md:flex-1 p-3">
              <p className="text-2xl">About</p>
              <div><span className="text-xs text-slate-500">Creator: </span><span className="text-base">Monika Szucs</span></div>
              <div><span className="text-xs text-slate-500">Title: </span><span className="text-base">Developer and Designer</span></div>
              <p><span className="text-xs text-slate-500">Tools used: </span> Heroku, GitHub, HTML, CSS, React, Express, Node.js, NASA API, Photoshop and Illustrator</p>
              <div className="place-content-end">
                <p className="text-lg">Links</p>
                <div className="flex ">
                  <div className="text-xs text-slate-500 pr-4"><a href="">GitHub</a></div>
                  <div className="text-xs text-slate-500 pr-4"><a href="">LinkedIn</a></div>
                  <div className="text-xs text-slate-500 pr-4"><a href="">Behance</a></div>
                  <div className="text-xs text-slate-500"><a href="">Portfolio</a></div>
                </div>
              </div>
            </div>
            <div className="flex-none"></div>
        </div>
    </div>
  );
}
// About