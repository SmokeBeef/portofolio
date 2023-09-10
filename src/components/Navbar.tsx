import React from "react";

const Navbar = () => {
  
  return (
    <div className="h-16 bg-blue-950 flex items-center sticky top-0 z-10">
      <div className="px-4 container mx-auto flex justify-center">
        
        <div className="flex items-center gap-4 text-slate-400">
          <a href="#Top" className="group transition-all hover:text-slate-100 ">
            Start
            <span className="block max-w-0 rounded-sm group-hover:max-w-full h-0.5 bg-sky-300 transition-all"></span>
          </a>
          <a href="#porto" className="group transition-all hover:text-slate-100 ">
            Porto
            <span className="block max-w-0 rounded-sm group-hover:max-w-full h-0.5 bg-sky-300 transition-all"></span>
          </a>
          <a href="" className="group transition-all hover:text-slate-100 ">
            Contact
            <span className="block max-w-0 rounded-sm group-hover:max-w-full h-0.5 bg-sky-300 transition-all"></span>
          </a>
          <a href="" className="group transition-all hover:text-slate-100 ">
            About
            <span className="block max-w-0 rounded-sm group-hover:max-w-full h-0.5 bg-sky-300 transition-all"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
