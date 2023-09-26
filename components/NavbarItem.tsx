import Link from "next/link";
import React from "react";

interface NavbarItemProps {
  label: string;
  href: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, href }) => {
  return (
    <Link href={href}>
      <p className="text-white cursor-pointer hover:text-gray-300 transition-all">
        {label}
      </p>
    </Link>
  );
};

export default NavbarItem;
