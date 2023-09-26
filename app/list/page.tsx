import { getAllFavorites } from "@/actions/getAllFavorites";
import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "@/components/Navbar";
import RowItem from "@/components/RowItem";
import React from "react";

const ListPage = async () => {
  const favorites = await getAllFavorites();
  const currentUser = await getCurrentUser();

  console.log(favorites)

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-16 absolute top-20">
        <h1 className="text-3xl text-white py-2">My List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((mediaItem: any) => (
            <RowItem data={mediaItem[0]} type={mediaItem[1]} currentUser={currentUser} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ListPage;
