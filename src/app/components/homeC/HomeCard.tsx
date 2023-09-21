"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import React from "react";

type Props = {};

function HomeCard({ imgURL, tag }: { tag: any; imgURL: any }) {
  return (
    <div className="p-2 rounded-lg shadow-md hover:scale-105  hover:shadow-lg transform transition duration-100 ease-in-out">
      <div className="h-[200px] relative rounded-lg overflow-hidden">
        <Image src={imgURL} alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="p-2 text-black rounded-b-lg ">
        <label>{tag}</label>
      </div>
    </div>
  );
}

export default HomeCard;
