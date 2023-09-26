"use client";

import { Media, SafeUser } from "@/typings";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import RowItem from "./RowItem";

interface RowClientProps {
  title: string;
  data: Media[];
  id: string;
  type: string
  currentUser: SafeUser | null;
}

const RowClient: React.FC<RowClientProps> = ({ title, data, id, type, currentUser }) => {
  const slideLeft = () => {
        var slider = document.getElementById(id);
        slider!.scrollLeft -= 1100;
      };
    
      const sliderRight = () => {
        var slider = document.getElementById(id);
        slider!.scrollLeft += 1100;
      };
    
      return (
        <div className="px-6 my-6 flex flex-col transition-all">
          <h2 className="text-white md:mx-10 text-2xl md:text-2xl lg:text-3xl font-semibold">
            {title}
          </h2>
          <div className="relative flex items-center w-full group transition-all duration-300">
            <button
              onClick={slideLeft}
              className="hidden items-center absolute ml-10 left-0 z-[20] h-60 w-12 bg-zinc-900 bg-opacity-60 text-white rounded-r-md transition-all group-hover:md:block"
            >
              <BsChevronCompactLeft className="w-10 h-10" />
            </button>
            <div
              id={id}
              className="flex items-center h-64 md:mx-10 w-full gap-3 overflow-x-scroll scroll whitespace-nowrap scrollbar-hide scroll-smooth"
            >
              {data.map((item) => (
                <RowItem key={item.id} data={item} currentUser={currentUser} type={type} />
              ))}
            </div>
            <button
              onClick={sliderRight}
              className="hidden items-center absolute mr-10 right-0 z-[20] h-60 w-12 bg-zinc-900 bg-opacity-60 text-white rounded-l-md group-hover:md:block"
            >
              <BsChevronCompactRight className="w-10 h-10" />
            </button>
          </div>
        </div>
      );
}

export default RowClient