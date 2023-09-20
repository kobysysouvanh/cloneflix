"use client";

import { Movie } from "@/typings";
import { getTrendingMovies } from "@/utils/themoviedb";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const Banner: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const trendingMovies = await getTrendingMovies();

      setData(trendingMovies);
    }

    getData();
  }, []);

  const random = data[Math.floor(Math.random() * data.length)];

  return (
    <div className="relative h-[65vh] transition-all">
      <div className="absolute top-0 left-0 h-[65vh] w-screen -z-10 brightness-50">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            random?.backdrop_path || random?.poster_path
          }`}
          alt="banner"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[40%] mx-16">
        <p className="text-white text-1xl md:text-3xl lg:text-5xl drop-shadow-xl font-bold w-[100%] h-full ">
          {random?.title}
        </p>
        <p className="text-white mt-3 text-[10px] md:text-lg drop-shadow-lg">
          {random?.overview}
        </p>
        <div className="flex relative items-center gap-2 md:mt-8 z-30">
          <button className="flex h-10 w-20 rounded-[4px] bg-white  items-center px-2 hover:opacity-75">
            <BsFillPlayFill className="w-8 h-8" />
            <p className="font-semibold text-xs">Play</p>
          </button>
          <button className="flex h-10 rounded-[4px] bg-gray-400/50 items-center text-white font-semibold text-xs px-2 hover:opacity-75">
            <AiOutlineInfoCircle className="w-6 h-6 mr-2" />
            <p className="font-semibold text-xs">More Info</p>
          </button>
        </div>
      </div>
      <div className="absolute w-full h-20 bg-gradient-to-t from-zinc-900 to-transparent bottom-0 z-20"/>
    </div>
  );
};

export default Banner;
