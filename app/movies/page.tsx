import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Banner from "@/components/Banner";
import {
  getGenreMovies,
  getPopularMovies,
  getTrendingMovies,
} from "@/utils/themoviedb";
import Row from "@/components/Row";

const MoviesPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const trendingMovies = await getTrendingMovies();
  const popularMovies = await getPopularMovies();
  const genreAction = await getGenreMovies(28);
  const genreAdventure = await getGenreMovies(12);
  const genreAnimation = await getGenreMovies(16);
  const genreHorror = await getGenreMovies(27);
  const genreRomance = await getGenreMovies(10749);
  const genreComedy = await getGenreMovies(35);
  const genreCrime = await getGenreMovies(80);
  const genreDocumentary = await getGenreMovies(99);
  const genreFamily = await getGenreMovies(10751);
  const genreFantasy = await getGenreMovies(14);

  return (
    <>
      <Banner data={trendingMovies} type="movie" />
      <Row
        title="Trending Movies"
        id="Trending Movies"
        type="movie"
        data={trendingMovies}
      />
      <Row
        title="Popular Movies"
        id="Popular Movies"
        type="movie"
        data={popularMovies}
      />
      <Row title="Action" id="Action" type="movie" data={genreAction} />
      <Row
        title="Adventure"
        id="Adventure"
        type="movie"
        data={genreAdventure}
      />
      <Row
        title="Animation"
        id="Animation"
        type="movie"
        data={genreAnimation}
      />
      <Row title="Horror" id="Horror" type="movie" data={genreHorror} />
      <Row title="Romance" id="Romance" type="movie" data={genreRomance} />
      <Row title="Comedy" id="Comedy" type="movie" data={genreComedy} />
      <Row title="Crime" id="Crime" type="movie" data={genreCrime} />
      <Row
        title="Documentary"
        id="Documentary"
        type="movie"
        data={genreDocumentary}
      />
      <Row title="Family" id="Family" type="movie" data={genreFamily} />
      <Row title="Fantasy" id="Fantasy" type="movie" data={genreFantasy} />
    </>
  );
};

export default MoviesPage;
