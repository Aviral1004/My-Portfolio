import React from 'react'
import Aviral from "../assets/Aviral.png";
import "../App.css";
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <div id='introduction'>
        <div className='content'>
            <motion.div className='goal' style={{fontSize:"3.5rem", letterSpacing:"0.4rem", lineHeight:"3.5rem", marginTop:"4rem", fontWeight:"900"}} 
            initial={{opacity: 0, transform: "translateX(-25%)"}} 
            whileInView={{opacity: 1, transform: "translateX(0)"}} 
            transition={{duration: 1, ease: "circInOut"}}>Aspiring to be Frontend Developer</motion.div>
            <motion.div className='iAm' style={{color:'#fff', letterSpacing:"0.09rem"}} initial={{opacity: 0, transform: "translateY(25%)"}} 
            whileInView={{opacity: 1, transform: "translateY(0)"}} 
            transition={{duration: 1, ease: "circInOut"}}>My enthusiasm for front-end development is boundless. Equipped with a foundation in HTML, CSS, SCSS,
and frameworks like Tailwind CSS and Chakra UI, I'm a quick learner, eagerly diving into JavaScript,
Typescript, React JS, and Redux Toolkit. I'm confident that my dedication to code,combined with my
willingness to learn and adapt and problem-solving mindset will make me an asset to your team.</motion.div>
        </div>
        <div className="container">
            <motion.div className="box" 
            initial={{opacity: 0, transform: "translateY(25%)"}} 
            whileInView={{opacity: 1, transform: "translateY(-10%)"}} 
            transition={{duration: 1, ease: "circInOut"}}>
                <div className="circle">
                </div>
                <img src={Aviral} className='img' alt="" />
            </motion.div>
            <motion.p className='myName' style={{fontSize:"3.1rem", letterSpacing:"0.2rem", fontWeight:"bolder", marginLeft:"-9rem"}} 
            initial={{opacity: 0, transform: "translateY(25%)"}} 
            whileInView={{opacity: 1, transform: "translateY(-30%)"}} 
            transition={{duration: 1.1, ease: "circInOut"}}>Aviral Srivastava</motion.p>
        </div>
    </div>
  )
}

export default Introduction