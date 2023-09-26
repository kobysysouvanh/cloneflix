import Link from 'next/link'
import React from 'react'

interface MobileMenuProps {
    visible?: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null
    }

    const routes = [
        {
          label: "Home",
          href: "/"
        },
        {
          label: "TV Shows",
          href: "/tvshows"
        },
        {
          label: "Movies",
          href: "/movies"
        },
        {
          label: "New & Popular",
          href: "/new"
        },
        {
          label: "My List",
          href: "/list"
        },
        {
          label: "Browse by Language",
          href: "/language"
        }
      ]

  return (
    <div
    className='absolute transition w-56 top-20 left-[110px] flex flex-col border border-t-white border-gray-600/30 bg-black/70'
    >
        <div className='flex flex-col '>
            {routes.map((route) => (
                <Link key={route.href} href={route.href}>
                    <div className='p-4 text-center text-white text-xs hover:bg-gray-500/10'>{route.label}</div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default MobileMenu