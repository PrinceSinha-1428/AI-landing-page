import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import React, { useEffect, useRef } from "react";
import { tabs } from "../../constant/data";
import {motion, animate, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";


interface FeaturetabProps {
  tab: (typeof tabs)[number],
  onClick?: ()=> void,
  selected?:boolean,
}


const FeatureTab = ({ tab,onClick,selected }: FeaturetabProps) => {


    const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
    const tabRef = useRef<HTMLDivElement>(null);

    const xPercentage = useMotionValue(0);
    const yPercentage = useMotionValue(0);

    const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

    useEffect(()=>{
        if(!tabRef.current || !selected) return;
        xPercentage.set(0);
        yPercentage.set(0);
        const {height,width} = tabRef.current?.getBoundingClientRect();
        const circumference = height * 2 + width * 2;
        const times = [0, width / circumference,(width + height) / circumference, (width * 2 + height) / circumference ,1]
        const options: ValueAnimationTransition  = {
            times,
            duration:4,
            repeat:Infinity,
            ease:'linear',
            repeatType:'loop'
        }
        animate(xPercentage,[0,100,100,0,0],options)
        animate(yPercentage,[0,0,100,100,0],options)
    },[selected]);

    const handleHover = () => {
        if(dotLottieRef.current === null) return;
        dotLottieRef.current.seek(0);
        dotLottieRef.current.play();
        
    };
    
  return (
    <div  onClick={onClick}  ref={tabRef} onMouseEnter={handleHover} className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center relative lg:flex-1">
       {selected &&  <motion.div style={{maskImage,}} className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl  "/>}
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex justify-center items-center">
        <DotLottiePlayer ref={dotLottieRef} src={tab.icon}  className="h-5 w-5" />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold ">new</div>
      )}
    </div>
  );
};

export default FeatureTab;
