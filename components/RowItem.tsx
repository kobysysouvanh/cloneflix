import { Movie } from "@/typings";
import Image from "next/image";
import React from "react";

interface RowItemProps {
  data: Movie;
}

const RowItem: React.FC<RowItemProps> = ({ data }) => {
  return (
    <div className="mt-4 relative flex h-[24vh] min-w-[180px] md:min-w-[220px] md:h-36 lg:min-w-[280px] lg:h-48 hover:scale-110 transform duration-500 cursor-pointer hover:z-[19] transition-all hover:mx-2">
      <img
        alt="thumbnail picture"
        className="object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
      />
      <div className="hidden aboslute bottom-0">
        
      </div>
    </div>
  );
};

export default RowItem;
