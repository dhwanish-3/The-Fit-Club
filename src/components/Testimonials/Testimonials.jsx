import React from 'react';
import './Testimonials.css'
import  {testimonialsData} from '../../data/testimonialsData';
import { useState } from 'react';
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';
import {motion} from 'framer-motion';

const Testimonials=()=>{
    const transition={type: 'tween', duration: 2}
    const [selected,setselected]=useState(0);
    const tLength=testimonialsData.length;
    return (
        <div className="Testimonials" id="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-text'>What they </span>
                <span>say about us</span>
                <motion.span
                key={selected}
                initial={{opacity:0,x:-100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:100}}
                transition={transition}>
                    <span>{testimonialsData[selected].review}</span>                
                    <span>
                        <span style={{color:'var(--orange)'}}>
                            {testimonialsData[selected].name}
                        </span>{" "}
                        - {testimonialsData[selected].status}
                    </span>
                </motion.span>
            </div>
            <div className="right-t">
                <motion.div
                initial={{opacity: 0,x:-100}}
                whileInView={{opacity: 1,x:0}}
                transition={transition}
                ></motion.div>
                <motion.div
                initial={{opacity: 0,x:100}}
                whileInView={{opacity: 1,x:0}}
                transition={transition}
                ></motion.div>
                <motion.img
                key={selected}
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:10}}
                exit={{opacity:0,x:-100}}
                transition={transition}
                src={testimonialsData[selected].image} alt="" />
                <div className="arrows">
                    <img  
                    onClick={()=>{
                        selected===0?
                        setselected(tLength-1):
                        setselected((prev)=>prev-1)
                    }}            
                    src={leftArrow} alt="" />
                    <img 
                    onClick={()=>{
                        selected===tLength-1?setselected(0):
                        setselected((prev)=>prev+1)
                    }}
                    src={rightArrow} alt="" />               
                </div>
            </div>
        </div>
  );
}

export default Testimonials;