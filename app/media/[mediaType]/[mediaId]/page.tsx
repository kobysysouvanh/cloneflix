import { getMediaById, getTrailerById } from '@/utils/themoviedb';
import ReactPlayer from "react-player/youtube"
import React from "react"
import MediaPageClient from '@/components/MediaPageClient';

interface MediaPageProps {
  mediaId: number
  mediaType: string
}

const MediaPage = async ({ params } : { params: MediaPageProps}) => {
  const media = await getMediaById(params.mediaId, params.mediaType)
  const trailer = await getTrailerById(params.mediaId, params.mediaType)

  return (
    <MediaPageClient media={media} trailer={trailer} mediaType={params.mediaType}/>
  )
}

export default MediaPage