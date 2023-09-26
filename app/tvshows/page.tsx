import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { getPopularShows, getTopRatedShows, getTrendingShows } from '@/utils/themoviedb'
import { redirect } from 'next/navigation'
import Row from '@/components/Row'

const TVShows = async () => {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/login")
    }

    const trendingShows = await getTrendingShows();
    const popularShows = await getPopularShows();
    const topRatedShows = await getTopRatedShows();

  return (
    <>
        <Navbar/>
        <Banner data={trendingShows}/>
        <Row title="Trending Now" id="Trending Now" type="tv" data={trendingShows}/>
        <Row title="Popular Now" id="Popular Now" type="tv" data={popularShows}/>
        <Row title="Top Rated" id="TopRated" type="tv" data={topRatedShows}/>
    </>
  )
}

export default TVShows