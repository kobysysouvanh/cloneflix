import useFavorite from "@/hooks/useFavorite";
import { SafeUser } from "@/typings";
import React from "react";
import { AiOutlineCheckCircle, AiOutlinePlusCircle } from "react-icons/ai";

interface FavoriteButtonProps {
    currentUser: SafeUser | null
    mediaId: number
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ currentUser, mediaId }) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    mediaId,
    currentUser,
  });

  return (
    <div onClick={toggleFavorite} className="hover:text-white/50 cursor-pointer">
      {hasFavorited ? (
        <AiOutlineCheckCircle className="h-10 w-10" />
      ) : (
        <AiOutlinePlusCircle className="h-10 w-10" />
      )}
    </div>
  );
};

export default FavoriteButton;
