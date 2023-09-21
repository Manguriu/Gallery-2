"use client";
import React, { useState } from "react";
import Card from "./Card";
import Image, { StaticImageData } from "next/image";
import { Himages } from "../data/data";

type Props = {};

function HeroContext() {
  const bigimg1 = "/cool11.webp";
  const [bigImage, setBigImage] = useState(bigimg1);
  return (
    <section className="w-full flex xl:flex-row max-xl:flex-col justify-center gap-10 max-container ">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-12 max-xl:text-[15px]">
        <p className="text-xl  font-palanquin text-cyan-600">
          Some Cool Pictures For You
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[62px] max-sm:leading-[72px] font-bold ">
          <span className="  relative z-10 pr-10  ">Some our</span> <br />
          <span className="text-cyan-600 inline-block mt-3">
            {" "}
            the Cool
          </span>{" "}
          Pictures
        </h1>
        <p className="max-xl:hidden font-montserrat text-slate-400 text-lg lg:mt-6 lg:mb-14 leading-8 sm:max-w-sm">
          Discover the world through our lens. Welcome to The Image Gala Where
          Every Image Tells a Story. Explore now!
        </p>
      </div>

      <div className="relative flex flex-col mt-[5rem] max-lg:mt-1 max-xl:mt-[2rem] items-center flex-1  max-lg:pb-[10rem]">
        <Image
          width={600}
          height={500}
          className="lg:ml-11 max-xl:pb-10 mx-auto object-cover absolute hover:scale-105 transform transition duration-300 ease-in-out"
          src={`${bigImage}`}
          alt={""}
        />
        <div className="grid grid-cols-4 sm:gap-4 absolute lg:mt-[23rem] sm:left-[10%] max-sm:px-6">
          {Himages.map((img: any, index: React.Key | null | undefined) => (
            <div key={index}>
              <Card
                imgURL={img}
                changeImage={(img: React.SetStateAction<StaticImageData>) =>
                  setBigImage(`${img}`)
                }
                bigImage={bigImage}
                heroImg={undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroContext;
