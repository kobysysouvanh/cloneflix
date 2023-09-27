"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getMediaBySearch } from "@/utils/themoviedb";
import Navbar from "./Navbar";
import RowItem from "./RowItem";
import { SafeUser } from "@/typings";

interface SearchPageClientProps {
  currentUser: SafeUser | null;
}

const SearchPageClient: React.FC<SearchPageClientProps> = ({ currentUser }) => {
  const { searchQuery } = useParams();
  const [movieMedia, setMovieMedia] = useState([]);
  const [showMedia, setShowMedia] = useState([]);

  useEffect(() => {
    async function getSearchResults() {
      const movieMedia = await getMediaBySearch(searchQuery, "movie");
      const showMedia = await getMediaBySearch(searchQuery, "tv");

      setMovieMedia(movieMedia);
      setShowMedia(showMedia);
    }

    getSearchResults();
  }, [currentUser, searchQuery]);

  return (
    <div>
      <Navbar />
      <div className="px-4 pb-4 sm:px-16 absolute top-20 w-full">
        <p className="text-white text-xl md:text-2xl lg:text-3xl">Search results</p>
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movieMedia.map((mediaItem: any) => (
            <RowItem
              key={mediaItem.id}
              data={mediaItem}
              currentUser={currentUser}
              type="movie"
            />
          ))}
          {showMedia.map((mediaItem: any) => (
            <RowItem
              key={mediaItem.id}
              data={mediaItem}
              currentUser={currentUser}
              type="tv"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPageClient;
