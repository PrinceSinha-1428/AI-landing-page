"use client";
import React, { useRef } from 'react'
import Button from '@/components/Button'
import starBg from '@/assets/stars.png'
import gridLines from '@/assets/grid-lines.png'
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { useRelativeMousePosition } from '../../hook/useRelativeMousePosition';

const CallToAction = () => {

  const sectionRef = useRef<HTMLElement>(null);
  const borderDivRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:['start end','end start']
  });
  const backgroundPositionY = useTransform(scrollYProgress,[0,1],[-300,300]);
  const [mouseX,mouseY] =  useRelativeMousePosition(borderDivRef);
  const maskImage =  useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black,transparent)`
  return (
    <section className='py-20 md:py-24' ref={sectionRef} >
      <div className='container'>
        <motion.div ref={borderDivRef}
        animate={{
          backgroundPositionX:starBg.width,
        }}
        transition={{
          duration:30,
          repeat:Infinity,
          ease:'linear',
        }}
        className='border border-white/15 py-24 rounded-xl overflow-hidden relative group' style={{backgroundPositionY,backgroundImage:`url(${starBg.src})`,}}>
        <div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] transition-all duration-700 group-hover:opacity-0 ' style={{backgroundImage:`url(${gridLines.src})`}} />
        <motion.div className='absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay  transition-all duration-700 opacity-0 group-hover:opacity-100 ' style={{maskImage, backgroundImage:`url(${gridLines.src})`}} />
          <div className='relative'>
            <h2 className='text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium'>AI-driven SEO for everyone</h2>
            <p className='text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight'>Achieve clear, impactful results without the complexity</p>
            <div className='flex justify-center mt-8'>
              <Button title='Join Waitlist'/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
