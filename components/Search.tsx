"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const wrapperRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSearch = () => {
    setIsOpen(true);
  };

  const handleSubmit = (e: any) => {
    if (e.key === "Enter" && searchQuery && searchQuery.replace(" ", "%20") && searchQuery.trim() !== "") {
      if (pathname.includes("/search")) {
        router.replace(`/search/${searchQuery}`);
      } else {
        router.push(`/search/${searchQuery}`);
      }
    }
  };

  function useOutsideRefFunction(ref: any) {
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

  useOutsideRefFunction(wrapperRef);

  return (
    <div>
      {isOpen ? (
        <div
          ref={wrapperRef}
          className="flex bg-zinc-900 absolute top-0 left-0 w-full sm:relative  sm:w-70 h-full border border-white items-center"
        >
          <IoSearchOutline className="p-[2px] w-7 h-7 text-white ml-1" />
          <input
            name="search"
            value={searchQuery}
            onKeyUp={handleSubmit}
            onChange={(e) => setSearchQuery(e.target.value)}
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
