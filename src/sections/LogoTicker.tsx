"use client";
import React from 'react'
import acmelogo from '@/assets/logo-acme.png'
import apexlogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulselogo from '@/assets/logo-pulse.png'
import quantumlogo from '@/assets/logo-quantum.png'
import echologo from '@/assets/logo-echo.png'
import { motion } from 'motion/react'

const LogoTicker = () => {
  
  return (
    <section className='py-20 md:py-24'>
      <div className='container'>
          <div className='flex items-center gap-5 '>
            <div className='flex-1 md:flex-none'>
              <h2>Trusted by top innovative teams</h2>
            </div>
            <div className='flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,transparent)] '>
              <motion.div 
                initial={{translateX:"-50%"}}
                animate={{translateX:"0"}}
                transition={{
                  repeat:Infinity,
                  ease:'linear',
                  duration:30,
                }}
              className='flex flex-none gap-14 -translate-x-1/2 pr-14'>
                {[acmelogo,apexlogo,celestialLogo,pulselogo,quantumlogo,echologo,acmelogo,apexlogo,celestialLogo,pulselogo,quantumlogo,echologo].map((logo) => (
                  <img src={logo.src} alt={logo.src} key={logo.src} className='w-auto h-6' />
                ))}
              </motion.div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default LogoTicker
