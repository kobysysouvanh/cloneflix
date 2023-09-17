import React from 'react'

interface MediaRowProps {
    title: string,
    data: any
}

const MediaRow: React.FC<MediaRowProps> = ({ title, data }) => {
  return (
    <div className='text-white h-40 absolute -z-10'>{title}</div>
  )
}

export default MediaRow