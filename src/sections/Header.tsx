import React from "react";
import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
import Link from "next/link";
import Button from "@/components/Button";


const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 ">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"/>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative ">
        <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"/>
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link className="text-white/70 hover:text-white transition-all duration-200" href={"#"}>Features</Link>
              <Link className="text-white/70 hover:text-white transition-all duration-200" href={"#"}>Developers</Link>
              <Link className="text-white/70 hover:text-white transition-all duration-200" href={"#"}>Pricing</Link>
              <Link className="text-white/70 hover:text-white transition-all duration-200" href={"#"}>ChangeLog</Link>
              <Link className="text-white/70 hover:text-white transition-all duration-200" href={"#"}>Features</Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button title="Join Waitlist"/>
           <MenuIcon className="md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
