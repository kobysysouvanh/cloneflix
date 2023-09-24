"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import AccountMenu from "./AccountMenu";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";

const NavbarBackground = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= NavbarBackground) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`p-4 md:px-16 flex items-center transition duration-300 ${
          showBackground ? "bg-zinc-900" : ""
        }`}
      >
        <img src="/logo.png" alt="logo" className="w-[18vw] max-w-[120px]" />
        <div className="ml-8 gap-5 hidden lg:flex lg:text-sm">
          <NavbarItem label="Home" />
          <NavbarItem label="TV Shows" />
          <NavbarItem label="Movies" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by Languages" />
        </div>
        <div
          className="ml-8 flex items-center gap-2 cursor-pointer transition lg:hidden"
          onClick={toggleMobileMenu}
        >
          <p className="text-white text-sm">Browse</p>
          <AiFillCaretDown className="text-white" />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex ml-auto gap-3">
          <div>
            <IoSearchOutline className="text-white h-7 w-7 cursor-pointer" />
          </div>
          <div>
            <BiBell className="text-white h-7 w-7 cursor-pointer" />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex items-center cursor-pointer gap-2"
          >
            <div className="h-7 w-7 rounded-[4px] overflow-hidden">
              <img src="/defaultpfp.jpg" alt="user profile picture" />
            </div>
            <AiFillCaretDown
              className={`text-white transition duration-300 hidden sm:inline ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
