"use client";
import React, { useState } from 'react'
import { tabs } from '../../constant/data'
import productImage from '@/assets/product-image.png'
import FeatureTab from '@/components/FeatureTab';
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from 'framer-motion';

const Features = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
    const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
    const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

    const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
    const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

    const handleSelectedTab = (index: number) => {
      setSelectedTab(index)
      const animateOptions: ValueAnimationTransition = {
        duration:2,
        ease:'easeInOut',
      }
      animate(backgroundSizeX,[backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],animateOptions);
      animate(backgroundPositionX,[backgroundPositionX.get(), tabs[index].backgroundPositionX],animateOptions);
      animate(backgroundPositionY,[backgroundPositionY.get(), tabs[index].backgroundPositionY],animateOptions);
    };
    
  return (
    <section className='py-20 md:py-24 '>
      <div className='container'>
        <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>Elevate your SEO Efforts.</h2>
        <p className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5 '>From small startups to large enterprises,Our AI-driven tool has revolutionzed the way businesses approach SEO</p>
        <div className='mt-10 flex flex-col gap-3'>
        {tabs.map((tab,tabIndex) => (
         <FeatureTab tab={tab} key={tab.title} onClick={()=>handleSelectedTab(tabIndex)} selected={selectedTab === tabIndex} />
        ))}
        </div>
        <div className='border border-white/20 p-2.5 rounded-xl mt-3 '>
          <motion.div style={{
            backgroundPosition,
            backgroundSize,
            backgroundImage:`url(${productImage.src})`}} className='aspect-video bg-cover border border-white/20 rounded-lg' />
        </div>
      </div>
      
    </section>
  )
}

export default Features
