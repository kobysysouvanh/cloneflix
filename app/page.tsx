

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Row from "@/components/Row";
import { getPopularMovies, getPopularShows, getTrendingMovies, getTrendingShows } from "@/utils/themoviedb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const trendingMovies = await getTrendingMovies()
  const popularMovies = await getPopularMovies()
  const trendingShows = await getTrendingShows()
  const popularShows = await getPopularShows()


  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <Banner data={trendingMovies}/>
      <Row title="Trending Movies" id="Trending Movies" data={trendingMovies}/>
      <Row title="Popular Movies" id="Popular Movies" data={popularMovies}/>
      <Row title="Trending Shows" id="Trending Shows" data={trendingShows}/>
      <Row title="Popular Shows" id="Popular Shows" data={popularShows}/>
    </>
  );
}




