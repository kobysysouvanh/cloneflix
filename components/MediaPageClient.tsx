"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Loading from "./Loading";
import Image from "next/image";

interface MediaPageClientProps {
  media: any;
  trailer: any;
  mediaType: string;
}

const MediaPageClient: React.FC<MediaPageClientProps> = ({
  media,
  trailer,
  mediaType,
}) => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  if (!hasWindow) {
    return <Loading />;
  }

  console.log(media);

  return (
    <div className="flex flex-col">
      <div className="flex w-full h-[85vh] mt-10 justify-center items-center">
        <Image
          className="-z-10 opacity-20"
          src={`https://image.tmdb.org/t/p/original${
            media?.backdrop_path || media?.poster_path
          }`}
          alt="banner"
          fill
        />

        {hasWindow && trailer?.key && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer?.key}`}
            controls
            width="60%"
            height="80%"
          />
        )}
      </div>
      <div className="flex bg-zinc-900 h-full w-screen p-4">
        <Image
          src={`https://image.tmdb.org/t/p/original${media.poster_path}`}
          width={200}
          height={400}
          alt="poster image"
          className="rounded-lg object-contain hidden sm:inline"
        />
        <div className="flex-col px-4 space-y-2 items-center">
          <div className="flex space-x-3">
            <h1 className="text-white text-md sm:text-2xl">{media.title || media.name}</h1>
            <div className="flex text-sm sm:text-lg space-x-1 text-white items-center">
              <p className="sm:text-xl">★</p>
              <p>{media.vote_average}</p>
            </div>
          </div>
          <p className="text-white/50 text-left text-xs sm:text-md md:text-lg w-[90%] sm:w-full break-words">{media.overview}</p>
          <div className="flex flex-col text-white/70 pt-2 space-y-2 text-sm sm:text-md">
            <p>Type: {mediaType.toUpperCase()}</p>
            <div className="flex space-x-1 text-xs w-[90%] sm:w-full sm:space-x-2 sm:text-sm md:text-md">
              <p>Genre: </p>
              {media.genres.map((genre: any) => (
                <p>{genre.name}</p>
              ))}
            </div>
            <p>Release: {media.first_air_date || media.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPageClient;
