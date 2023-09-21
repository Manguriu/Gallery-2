import React from "react";
import Image from "next/image";

type Props = {};

const Card = ({ image, label }: { image: any; label: any }) => {
  return (
    <section>
      <div className="p-2 rounded-lg shadow-md   hover:shadow-lg ">
        <div className="h-[200px] relative rounded-lg overflow-hidden">
          <Image src={image} alt="" layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};

export default Card;
