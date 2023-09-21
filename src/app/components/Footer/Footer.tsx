import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="max-container lg:pt-[5rem] max-sm:pt-2 lg:pb-[5rem] font-montserrat  text-lg mt-6  leading-8 max-sm:ml-4 max-lg:px-4 ">
      <div className=" flex items-center justify-between max-sm:flex-col">
        <div>
          {" "}
          <h1 className="text-2xl font-semibold text-cyan-600">
            |..ImageGala..|
          </h1>
          <p className="mt-5 max-lg:hidden">
            Welcome to The Image Gala Where Every Image Tells a Story. Explore
            now!
          </p>
        </div>

        <div className="flex flex-col">
          <div>
            <h3 className="mt-5 max-sm:ml-10">Socials</h3>{" "}
          </div>
          <div className="flex flex-row text-[30px] gap-4 mt-5">
            <Link href="" className="">
              <AiFillInstagram />
            </Link>
            <Link href="">
              {" "}
              <AiFillLinkedin />
            </Link>
            <Link href="">
              <AiFillFacebook />
            </Link>
            <Link href="">
              {" "}
              <AiFillTwitterCircle />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 max-sm:text-[10px] ">
        @ Copyright 2023 Brian_miruri12 ImageGala
      </div>
    </section>
  );
};

export default Footer;
