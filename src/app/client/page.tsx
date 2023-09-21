"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Card from "../components/UserCard";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import HomeCard from "../components/homeC/HomeCard";
import { Gimages } from "../components/data/data";
import OtherImages from "../components/otherImages/OtherImages";
import axios from "axios";

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });

  //api

  const [images, setImages] = useState<ImageData[]>([]); // Specify the type here
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=39541711-c70499494dc9fefad4dcafbe1&q=${term}&image_type=photo&pretty=true`
        );
        setImages(response.data.hits);
        setLoading(false);
        console.log("data", response.data.hits);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [term]);

  const isClient = typeof window !== "undefined";

  const [items, setItems] = useState(Gimages);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const reorderedItems = [...items];
    const [reorderedItem] = reorderedItems.splice(source.index, 1);
    reorderedItems.splice(destination.index, 0, reorderedItem);
    setItems(reorderedItems);
  };

  return (
    <section className="px-4">
      <Card user={session?.user} pagetype={"Client"} />

      {isClient && (
        <section className="max-sm:mt-12 mt-5 max-container">
          <div>
            <h3 className="text-2xl font-bold font-Montserrat capitalize px-4">
              Image <span className="text-cyan-600">by</span> tags{" "}
              <span className="text-cyan-600">Popularity</span>
            </h3>
            <p className="mt-5 text-xl text-slate-600 px-4">
              Play around with images on this Section, From a cool extension
              from React DnD.....Re-arrange to your own liking.
            </p>
          </div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="card-container" type="CARD">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-2 gap-5"
                >
                  {items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <HomeCard {...item} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </section>
      )}

      <section className="mb-[10rem] pt-[7rem]">
        <OtherImages
          images={images}
          loading={loading}
          term={(text: React.SetStateAction<string>) => setTerm(text)}
        />
      </section>
    </section>
  );
}
