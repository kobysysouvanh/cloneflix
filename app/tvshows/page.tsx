import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import {
  getGenreShows,
  getPopularShows,
  getTopRatedShows,
  getTrendingShows,
} from "@/utils/themoviedb";
import { redirect } from "next/navigation";
import Row from "@/components/Row";

const TVShowsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const trendingShows = await getTrendingShows();
  const popularShows = await getPopularShows();
  const topRatedShows = await getTopRatedShows();
  const genreAction = await getGenreShows(10759);
  const genreAnimation = await getGenreShows(16);
  const genreComedy = await getGenreShows(35);
  const genreCrime = await getGenreShows(80);
  const genreDocumentary = await getGenreShows(99);
  const genreDrama = await getGenreShows(18);
  const genreFamily = await getGenreShows(10751);
  const genreKids = await getGenreShows(10762);

  return (
    <>
      <Navbar />
      <Banner data={trendingShows} type="tv" />
      <Row
        title="Trending Now"
        id="Trending Now"
        type="tv"
        data={trendingShows}
      />
      <Row title="Popular Now" id="Popular Now" type="tv" data={popularShows} />
      <Row title="Top Rated" id="TopRated" type="tv" data={topRatedShows} />
      <Row
        title="Action and Adventure"
        id="Action and Adventure"
        type="tv"
        data={genreAction}
      />
      <Row title="Animations" id="Animations" type="tv" data={genreAnimation} />
      <Row title="Comedy" id="Comedy" type="tv" data={genreComedy} />
      <Row title="Crime" id="Crime" type="tv" data={genreCrime} />
      <Row
        title="Documentary"
        id="Documentary"
        type="tv"
        data={genreDocumentary}
      />
      <Row title="Drama" id="Drama" type="tv" data={genreDrama} />
      <Row title="Family" id="Family" type="tv" data={genreFamily} />
      <Row title="Kids" id="Kids" type="tv" data={genreKids} />
    </>
  );
};

export default TVShowsPage;
