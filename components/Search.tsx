"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleSearch = () => {
    setIsOpen(true);
  };

  function outsideRefFunction(ref: any) {
    useEffect(() => {
      function handleOutsideClick(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [ref]);
  }

  outsideRefFunction(wrapperRef);

  return (
    <div>
      {isOpen ? (
        <div
          ref={wrapperRef}
          className="flex w-70 h-full border border-white items-center rounded-lg transition-all ease-in duration-500"
        >
          <IoSearchOutline className="p-[2px] w-7 h-7 text-white ml-1" />
          <input
            type="text"
            className="bg-transparent text-white px-1 focus:outline-none"
            placeholder="Movies, Shows..."
          />
        </div>
      ) : (
        <div onClick={toggleSearch}>
          <IoSearchOutline className="w-7 h-7 text-white cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Search;
