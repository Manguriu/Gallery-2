import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

const SearchC = ({ term }: { term: any }) => {
  const [text, setText] = useState("");

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    term(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden  mx-auto">
      <form className="w-full max-w-sm " onSubmit={onSubmit}>
        <div className="flex items-center  border-b-2 border-cyan-600 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search for something...."
          />
          <button
            className="flex-shrink-0 bg-cyan-600 hover:bg-teal-700 border-cyan-600 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchC;
