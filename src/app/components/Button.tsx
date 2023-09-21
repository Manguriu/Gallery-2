import React from "react";

type Props = {};

function Button({}: Props) {
  return (
    <section className="max-container">
      <div>
        <h2 className="text-2xl font-bold px-4">
          <span className="text-cyan-600">Click</span> to load more{" "}
          <span>Images</span>
        </h2>
        <p className="mt-5 text-xl text-slate-600 px-4">
          Hello there wanna see something{" "}
          <span className="text-cyan-600 text-2xl ">cool!!</span> click the
          button below and explore some Image search on images from Pixar-bay
          that might exite you also you can play around and re-arrange the
          images on the popular section to your desired order enjoy!!!
        </p>
      </div>

      <div className="mt-5 pb-10 px-4">
        <a href="/client" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-cyan-600 group-hover:-rotate-180 ease"></span>
            <span className="relative">Other-images</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-cyan-600 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </section>
  );
}

export default Button;
