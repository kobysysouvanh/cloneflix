"use client";

import { useRef } from "react";
import RowItem from "./RowItem";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

interface RowProps {
  title: string;
  data: [];
  id: string
}

const Row: React.FC<RowProps> = ({ title, data, id }) => {

  const slideLeft = () => {
    var slider = document.getElementById(id)
    slider!.scrollLeft -= 1100
  }

  const sliderRight = () => {
    var slider = document.getElementById(id)
    slider!.scrollLeft += 1100
  }

  return (
    <div className="px-6 my-6 flex flex-col transition-all">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
        {title}
      </h2>
      <div className="relative flex items-center w-full group transition-all duration-300">
        <button onClick={slideLeft} className="hidden items-center absolute left-0 z-[20] h-60 w-12 bg-zinc-900 bg-opacity-60 text-white rounded-l-md transition-all group-hover:md:block">
          <BsChevronCompactLeft className="w-10 h-10" />
        </button>
        <div
          id={id}
          className="flex items-center h-64 w-full gap-3 overflow-x-scroll scroll whitespace-nowrap scrollbar-hide scroll-smooth"
        >
          {data.map((item) => (
            <RowItem key={item} data={item} />
          ))}
        </div>
        <button
          onClick={sliderRight}
          className="hidden items-center absolute right-0 z-[20] h-60 w-12 bg-zinc-900 bg-opacity-60 text-white rounded-l-md group-hover:md:block"
        >
          <BsChevronCompactRight className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default Row;
