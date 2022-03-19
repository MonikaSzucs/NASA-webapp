import React from "react";
import Navbar from '../Components/Navbar';

export default function About() {
  return (
    <div className="App h-screen flex flex-col ">
        <Navbar/>
        
        <div className="container md:flex items-center justify-center mx-auto md:w-4/5 align-middle flex-grow md:h-full ">
            <div className="flex-none"></div> 
            <div className="md:col-span-2 space-y-8 md:flex-1 p-3">
              <p className="text-2xl ">About</p>
              <table class="table-auto">
                
                <tbody>
                  <tr>
                    <td><span className="text-xs text-slate-500 text-right">Creator: </span></td>
                    <td><span className="text-base pl-4">Monika Szucs</span></td>
                  </tr>
                  <tr>
                    <td><span className="text-xs text-slate-500 text-right">Title: </span></td>
                    <td><span className="text-base pl-4">Developer and Designer</span></td>
                  </tr>
                  <tr>
                    <td><span className="text-xs text-slate-500 text-right">Tools used: </span></td>
                    <td className="pl-4">Heroku, GitHub, HTML, CSS, React, Express, Node.js, NASA API, Photoshop and Illustrator</td>
                  </tr>
                </tbody>
              </table>
                <div className="place-content-end text-right">
                  <p className="text-lg">Links</p>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 pr-4"><a href="">GitHub</a></span>
                    <span className="text-xs text-slate-500 pr-4"><a href="">LinkedIn</a></span>
                    <span className="text-xs text-slate-500 pr-4"><a href="">Behance</a></span>
                    <span className="text-xs text-slate-500"><a href="">Portfolio</a></span>
                  </div>
                </div>
              
            </div>
            <div className="flex-none"></div>
        </div>
    </div>
  );
}
// About