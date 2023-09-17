import React from 'react'

interface MobileMenuProps {
    visible?: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null
    }

  return (
    <div
    className='absolute transition w-56 top-20 left-[110px] flex flex-col border border-t-white border-gray-600/30 bg-black/70'
    >
        <div className='flex flex-col '>
            <div className='p-4 text-center text-white text-xs hover:bg-gray-500/10'>Home</div>
            <div className='p-4 text-center text-white text-xs hover:bg-gray-500/10'>TV Shows</div>
            <div className='p-4 text-center text-white text-xs hover:bg-gray-500/10'>Movies</div>
            <div className='p-4 text-center text-white text-xs hover:bg-gray-500/10'>New & Popualar</div>
            <div className='p-4 text-center text-white text-xs hover:bg-gray-500/10'>My List</div>
            <div className='p-4 text-center text-white text-xs hover:bg-gray-500/10'>Browse by Languages</div>
        </div>
    </div>
  )
}

export default MobileMenu