
import useFavorite from "@/hooks/useFavorite";
import { Media, SafeUser } from "@/typings";
import React from "react";
import {
  AiOutlineCheckCircle,
  AiOutlinePlayCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

interface RowItemProps {
  data: Media;
  currentUser: SafeUser | null
}

const RowItem: React.FC<RowItemProps> =  ({ data, currentUser }) => {
  const { id } = data
  const { hasFavorited, toggleFavorite } = useFavorite({ 
    itemId: id,
    currentUser
  })
  


  return (
    <div className="mt-4 relative flex h-[24vh] group/item min-w-[180px] md:min-w-[240px] md:h-40 lg:min-w-[280px] lg:h-48 hover:scale-110 transform duration-500 cursor-pointer hover:z-[19] transition-all ">
      <img
        alt="thumbnail picture"
        className="object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
      />
      <div className="invisible flex absolute justify-center items-center bottom-0 group-hover/item:visible w-full gap-2 bg-white bg-opacity-40 py-2 rounded-b-md">
        <button className="hover:text-black/60">
          <AiOutlinePlayCircle className="h-10 w-10" />
        </button>
        <div 
        onClick={toggleFavorite}
        className="hover:text-black/60">
          {hasFavorited ? (
            <AiOutlineCheckCircle className="h-10 w-10" />
          ) : (
            <AiOutlinePlusCircle className="h-10 w-10" />
          )}
        </div>
      </div>
    </div>
  );
};

export default RowItem;
