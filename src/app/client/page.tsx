"use client";
// // Remember you must use an AuthProvider for
// // client components to useSession
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import Card from "../components/UserCard";
// import HomeImage from "../components/homeC/HomeImage";
// import dynamic from "next/dynamic";

// export default function ClientPage() {
//   const DraggableComponent = dynamic(
//     () => import("../components/homeC/HomeImage"),
//     {
//       ssr: false, // Render only on the client side
//     }
//   );

//   const { data: session } = useSession({
//     required: true,
//     onUnauthenticated() {
//       redirect("/api/auth/signin?callbackUrl=/client");
//     },
//   });

//   return (
//     <section className="flex flex-col gap-6">
//       <Card user={session?.user} pagetype={"Client"} />
//       <DraggableComponent />
//     </section>
//   );
// }

// import React from "react";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import Card from "../components/UserCard";
// import HomeImage from "../components/homeC/HomeImage";

// export default function ClientPage() {
//   const { data: session } = useSession({
//     required: true,
//     onUnauthenticated() {
//       redirect("/api/auth/signin?callbackUrl=/client");
//     },
//   });

//   // Check if we are on the client side
//   const isClient = typeof window !== "undefined";

//   return (
//     <section className="flex flex-col gap-6">
//       <Card user={session?.user} pagetype={"Client"} />

//       {/* Conditionally render HomeImage only on the client side */}
//       {isClient && <HomeImage />}
//     </section>
//   );
// }

// import React, { useState } from "react";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
// import Card from "../components/UserCard";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult, // Import DropResult
// } from "react-beautiful-dnd";
// import HomeCard from "../components/homeC/HomeCard";
// import { Gimages } from "../components/data/data";

// export default function ClientPage() {
//   const { data: session } = useSession({
//     required: true,
//     onUnauthenticated() {
//       redirect("/api/auth/signin?callbackUrl=/client");
//     },
//   });

//   // Check if we are on the client side
//   const isClient = typeof window !== "undefined";

//   const [items, setItems] = useState(Gimages); // Assuming Gimages is defined somewhere

//   const handleDragEnd = (result: DropResult) => {
//     const { destination, source } = result;

//     // Check if there is no valid destination
//     if (!destination) {
//       return;
//     }

//     const reorderedItems = [...items];
//     const [reorderedItem] = reorderedItems.splice(source.index, 1);
//     reorderedItems.splice(destination.index, 0, reorderedItem);
//     setItems(reorderedItems);
//   };

//   return (
//     <section className="flex flex-col gap-6">
//       <Card user={session?.user} pagetype={"Client"} />

//       {/* Conditionally render HomeImage only on the client side */}
//       {isClient && (
//         <section className="max-sm:mt-12 mt-5 max-container">
//           <div>
//             <h3 className="text-4xl font-bold font-Montserrat capitalize">
//               Image <span className="text-cyan-600">by</span> tags{" "}
//               <span className="text-cyan-600">Popularity</span>
//             </h3>
//           </div>
//           <DragDropContext onDragEnd={handleDragEnd}>
//             <Droppable droppableId="card-container" type="CARD">
//               {(provided) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                   className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-2 gap-5">
//                   {items.map((item, index) => (
//                     <Draggable
//                       key={item.id}
//                       draggableId={item.id.toString()}
//                       index={index}>
//                       {(provided) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}>
//                           <HomeCard {...item} />
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </DragDropContext>
//         </section>
//       )}
//     </section>
//   );
// }

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

  // Check if we are on the client side
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
    <section className="">
      <Card user={session?.user} pagetype={"Client"} />

      {isClient && (
        <section className="max-sm:mt-12 mt-5 max-container">
          <div>
            <h3 className="text-4xl font-bold font-Montserrat capitalize">
              Image <span className="text-cyan-600">by</span> tags{" "}
              <span className="text-cyan-600">Popularity</span>
            </h3>
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

      <section className="mb-[10rem]">
        <OtherImages
          images={images}
          loading={loading}
          term={(text: React.SetStateAction<string>) => setTerm(text)}
        />
      </section>
    </section>
  );
}