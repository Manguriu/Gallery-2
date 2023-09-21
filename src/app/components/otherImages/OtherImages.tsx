import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import SearchC from "../search/SearchC";
import Card from "./Card";

interface ImageData {
  webformatURL: string;
  tags: string;
  id: number;
}

const OtherImages = ({
  images,
  loading,
  term,
}: {
  images: any;
  loading: any;
  term: any;
}) => {
  return (
    <section className="max-container">
      <div className="flex items-center justify-between max-sm:flex-col gap-10 max-lg:px-4">
        <div>
          <h3 className="text-2xl font-bold font-Montserrat capitalize lg:absolute">
            Explore <span className="text-cyan-600">All </span> The
            <span className="text-cyan-600"> Images</span>
          </h3>
        </div>
        <div>
          <SearchC term={term} />
        </div>
      </div>

      <div className="mt-5 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-2 gap-5">
        {loading ? (
          <div>
            <Card />
          </div>
        ) : (
          images.map(
            (image: {
              id: React.Key | null | undefined;
              webformatURL: string | StaticImport;
              tags:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <div
                key={image.id}
                className="p-2 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transform transition duration-100 ease-in-out"
              >
                <div className="h-[200px] relative rounded-lg overflow-hidden">
                  <Image
                    src={image.webformatURL}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-2 text-black rounded-b-lg">
                  <label>{image.tags}</label>
                </div>
              </div>
            )
          )
        )}
      </div>
    </section>
  );
};

export default OtherImages;
