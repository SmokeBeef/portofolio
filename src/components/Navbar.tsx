import React from "react";

const Navbar = () => {
  
  return (
    <div className="h-16 bg-blue-950 flex items-center sticky top-0">
      <div className="px-4 container mx-auto flex justify-between">
        <h1 className="text-2xl text-slate-100 font-bold">
        <a href="#top" className="group transition-all  ">
            Porto.Dev
            <span className="block max-w-0 group-hover:max-w-full h-0.5 bg-sky-300 transition-all"></span>
          </a>
        </h1>
        <div className="flex items-center gap-4 text-slate-400">
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
