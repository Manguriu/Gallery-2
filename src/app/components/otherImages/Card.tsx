import React from "react";
import Image from "next/image";

type Props = {};

function Card({}: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto ">
      <div className="flex items-center justify-center -right-6">
        <div>
          <Image
            src="/loading2.svg"
            alt=""
            width={700}
            height={700}
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
