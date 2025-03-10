"use client";
import React, { useRef } from 'react'
import Button from '@/components/Button'
import starsBg from '@/assets/stars.png'
import { motion,useScroll, useTransform } from 'motion/react';

const Hero = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:['start end','end start'],
  });
  const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300])
  return (
    <motion.section
        ref={sectionRef}
     className='h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] '
     style={{
      backgroundImage:`url(${starsBg.src})`,
      backgroundPositionY, 
    }}
      animate={{
        backgroundPositionX: starsBg.width,
        
      }}
      transition={{
        repeat:Infinity,
        ease:'linear',
        duration:60,
      }}
    >
      <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)] '></div>
      <div className='absolute h-64 w-64 md:h-96 md:w-96 rounded-full bg-purple-500 border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)] '/>
      <motion.div 
      style={{ translateX:'-50%', translateY:'-50%',}}
       animate={{
        rotate:'1turn',
      }}
      transition={{
        duration:30,
        repeat:Infinity,
        ease:'linear'
      }}
       className='absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 '/>
      <div className='absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 '/>
      <div className='absolute h-5 w-5 left-full inline-flex justify-center items-center border border-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 '>
      <div className='h-2 w-2 bg-white rounded-full'/>
      </div>
      </motion.div>
      <motion.div   style={{ translateX:'-50%', translateY:'-50%',}}
            animate={{rotate:'-1turn',}}
            transition={{
              duration:60,
              repeat:Infinity,
              ease:'linear'}}
          className='absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full opacity-20 border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed '>
            <div className='absolute h-2 w-2 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 '/>
            <div className='absolute h-3 w-3 left-1/2 bg-white rounded-full top-0 -translate-x-1/2 -translate-y-1/2 '/>
            <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 '/>
        </motion.div>
      <motion.div
      style={{ translateX:'-50%', translateY:'-50%',}}
      animate={{
       rotate:'1turn',
     }}
     transition={{
       duration:90,
       repeat:Infinity,
       ease:'linear'
     }}
      className='absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed '>
      <div className='absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 '/>
      <div className='absolute h-4 w-4 left-full bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 '/>
      </motion.div>
      <div className='container relative mt-16'>
          <h1 className='text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-white text-transparent bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-center'>AI SEO</h1>
          <p className='text-lg md:text-xl max-w-xl mx-auto text-white/70 mt-5 text-center'>Elevate your site's visibility effortlessly with AI, Where smart technology meets user friendly SEO tools.</p>
          <div className='flex justify-center mt-5'>
            <Button title='Join Waitlist'/>
          </div>
      </div>
    </motion.section>
  )
}

export default Hero
