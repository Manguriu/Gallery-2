// "use client";
// import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import HomeCard from "./HomeCard";
// import { Gimages } from "../data/data";

// type Props = {};

// function HomeImage({}: Props) {
//   const [items, setItems] = useState(Gimages);

//   const handleDragEnd = (result: { source: any; destination: any }) => {
//     if (!result.destination) {
//       return;
//     }
//     const reorderedItems = [...items];
//     const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
//     reorderedItems.splice(result.destination.index, 0, reorderedItem);

//     setItems(reorderedItems);
//   };

//   return (
//     <section className="max-sm:mt-12 mt-5 max-container">
//       <div>
//         <h3 className="text-4xl font-bold font-Montserrat capitalize">
//           Image <span className="text-cyan-600">by</span> tags{" "}
//           <span className="text-cyan-600">Popularity</span>
//         </h3>
//       </div>
//       <DragDropContext onDragEnd={handleDragEnd}>
//         <Droppable droppableId="card-container" type="CARD">
//           {(provided) => (
//             <div
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//               className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-2 gap-5">
//               {items.map((item, index) => (
//                 <Draggable
//                   key={item.id}
//                   draggableId={item.id.toString()}
//                   index={index}>
//                   {(provided) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}>
//                       <HomeCard {...item} />
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </section>
//   );
// }

// export default HomeImage;
