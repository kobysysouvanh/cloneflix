

import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { getPopularMovies, getPopularShows, getTrendingMovies, getTrendingShows } from "@/utils/themoviedb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Row from "@/components/Row";

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
      <Banner />
      <Row title="Trending Movies" data={trendingMovies}/>
      <Row title="Popular Movies" data={popularMovies}/>
      <Row title="Trending Shows" data={trendingShows}/>
      <Row title="Popular Shows" data={popularShows}/>
    </>
  );
}




