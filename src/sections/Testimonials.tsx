"use client";
import React from 'react'
import { testimonials } from '../../constant/data'
import Image from 'next/image'
import { motion } from 'framer-motion';

const Testimonials = () => {
  
  return (
    <section className='py-20 md:py-24'>
      <div className='container'>
        <h2 className='text-5xl md:text-6xl text-center tracking-tighter font-medium'>Beyond Expectations</h2>
        <p className='text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto'>Our revolutionary AI SEO tools have transformed our client's strategies</p>
        <div className='flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] '>
        <motion.div 
        initial={{translateX:"-50%"}}
        animate={{translateX:"0"}}
        transition={{duration:30,ease:'linear',repeat:Infinity}}
        className='flex gap-5 flex-none'>
        {[...testimonials,...testimonials].map((testimonial) => (
          <div key={testimonial.name} className='border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none '>
            <div className='text-lg tracking-tight md:text-2xl'>{testimonial.text}</div>
            <div className='flex items-center gap-3 mt-5'>
              <div className='relative after:content-[""] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[""] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg '>
                <Image src={testimonial.avatarImg}  alt={`Avatar fro ${testimonial.name}`} className='h-11 w-11 rounded-lg grayscale' />
              </div>
              <div>
                <div>{testimonial.name}</div>
                <div className='text-white/50 text-sm'>{testimonial.title}</div>
              </div>
            </div>
          </div>
        ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
