"use client"

import { Media, SafeUser } from "@/typings";
import { useRouter } from "next/navigation";
import React from "react";
import {
  AiOutlinePlayCircle
} from "react-icons/ai";
import FavoriteButton from "./FavoriteButton";

interface RowItemProps {
  data: Media;
  type?: string
  currentUser: SafeUser | null;
}

const RowItem: React.FC<RowItemProps> = ({ data, type, currentUser }) => {
  const router = useRouter()
  const { id } = data;

  const handleOnClick = () => {
    if (type === "movie") {
      router.push(`/media/movie/${id}`)
    }
    else {
      router.push(`/media/tv/${id}`)
    }
  }


  return (
    <div onClick={handleOnClick} className="mt-4 relative flex h-[24vh] group/item min-w-[180px] md:min-w-[240px] md:h-40 lg:min-w-[280px] lg:h-48 hover:scale-110 transform duration-500 cursor-pointer hover:z-[19] transition-all ">
      <img
        alt="thumbnail picture"
        className="object-cover rounded-md"
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path || data.poster_path}`}
      />
      <div className="invisible flex absolute justify-center items-center bottom-0 group-hover/item:visible w-full gap-2 bg-white bg-opacity-40 py-2 rounded-b-md">
        <button className="hover:text-black/60">
          <AiOutlinePlayCircle className="h-10 w-10" />
        </button>
        <FavoriteButton mediaId={id} currentUser={currentUser}/>
      </div>
    </div>
  );
};

export default RowItem;
