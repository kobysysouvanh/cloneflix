import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Row from "@/components/Row";
import {
  getPopularMovies,
  getPopularShows,
  getTrendingMovies,
  getTrendingShows,
} from "@/utils/themoviedb";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Home = async () => {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }

  const trendingMovies = await getTrendingMovies();
  const popularMovies = await getPopularMovies();
  const trendingShows = await getTrendingShows();
  const popularShows = await getPopularShows();

  return (
    <>
      <Banner data={trendingMovies} type="movie" />
      <Row title="Trending Movies" id="Trending Movies" type="movie" data={trendingMovies} />
      <Row title="Popular Movies" id="Popular Movies" type="movie" data={popularMovies} />
      <Row title="Trending Shows" id="Trending Shows" type="tv" data={trendingShows} />
      <Row title="Popular Shows" id="Popular Shows" type="tv" data={popularShows} />
    </>
  );
}

export default Home