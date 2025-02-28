import React from 'react'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'
import XSocial from '@/assets/social-x.svg'
import Insta from '@/assets/social-instagram.svg'
import Youtube from '@/assets/social-youtube.svg'



const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/15'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
        <div className='flex gap-2 items-center lg:flex-1'>
          <Logo className="h-6 w-6" />
          <div className='font-medium'>AI Starting Landing Page</div>
        </div>
          <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
            <Link href={"#"} className='text-white/70 hover:text-white text-xs transition-all duration-300 md:text-sm' >Features</Link>
            <Link href={"#"} className='text-white/70 hover:text-white text-xs transition-all duration-300 md:text-sm' >Developers</Link>
            <Link href={"#"} className='text-white/70 hover:text-white text-xs transition-all duration-300 md:text-sm' >Company</Link>
            <Link href={"#"} className='text-white/70 hover:text-white text-xs transition-all duration-300 md:text-sm' >Blog</Link>
            <Link href={"#"} className='text-white/70 hover:text-white text-xs transition-all duration-300 md:text-sm' >Changelog</Link>
          </nav>       
          <div className='flex gap-5 lg:flex-1 lg:justify-end '>
            <XSocial className="text-white/40 hover:text-white transition-all duration-200"/>
            <Insta className="text-white/40 hover:text-white transition-all duration-200"/>
            <Youtube className="text-white/40 hover:text-white transition-all duration-200"/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
