import React from 'react'

interface NavbarItemProps {
    label: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <p className='text-white cursor-pointer hover:text-gray-300 transition-all'>
        {label}
    </p>
  )
}

export default NavbarItem