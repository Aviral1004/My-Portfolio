import React from 'react'
import { Link } from 'react-scroll'
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from 'framer-motion';

const Footer = () => {

  return (
    <div id='footer' className='footer'>
        <div className="social">
          <motion.div className='arrange' 
          initial = {{opacity: 0, transform: "translateX(-25%)"}} 
          whileInView={{opacity: 1, transform: "translateX(0)"}} 
          transition={{duration: 1}}>
            <p className='arrangeOne one greet' style={{fontSize:"1.5rem", letterSpacing:"0.15rem", fontWeight:"900", color:"#B3B3B3"}}>Dear Sir/Ma'am,</p>
            <p className='arrangeTwo' style={{fontSize:"1rem", letterSpacing:"0.15rem", fontWeight:"bolder", color:"#FFF"}}>I hope that my portfolio have 
            <br />made a good impression on you.
            <br />
              Kindly do contact me.
              <br />
            Thank you for visiting my profile.</p>
          </motion.div>
          <motion.div className='line' style={{width:"1px", height:"90%", background:"#fff", margin:"1rem"}} 
          initial = {{opacity: 0, scale: 0}} 
          whileInView={{opacity: 1, scale: 1}} 
          transition={{duration: 1.75}} />
          <motion.div className='arrange' 
          initial = {{opacity: 0, transform: "translateY(50)"}} 
          whileInView={{opacity: 1, transform: "translateY(0)"}} 
          transition={{duration: 1}}>
            <p className='arrangeOne' style={{fontSize:"1.5rem", letterSpacing:"0.15rem", fontWeight:"bolder", color:"#B3B3B3"}}>Important Links</p>
            <Link to='introduction' smooth={true} duration={500} spy={true}>
                <button className='impLinkBtn arrangeTwo'>Home</button>
            </Link>
            <Link to='techTools' smooth={true} duration={500} spy={true}>
                <button className='impLinkBtn arrangeTwo'>Tech&Tools</button>
            </Link>
            <Link to='myProjects' smooth={true} duration={900} spy={true}>
                <button className='impLinkBtn arrangeTwo'>Projects</button>
            </Link>
            <Link to='contact' smooth={true} duration={900} spy={true}>
                <button className='impLinkBtn arrangeTwo'>Contact Me</button>
            </Link>
          </motion.div>
          <motion.div className='line' style={{width:"1px", height:"90%", background:"#fff", margin:"1rem"}} 
          initial = {{opacity: 0, scale: 0}} 
          whileInView={{opacity: 1, scale: 1}} 
          transition={{duration: 1.75}} />
          <motion.div className='arrange info' 
          initial = {{opacity: 0, transform: "translateY(25%)"}} 
          whileInView={{opacity: 1, transform: "translateY(0)"}} 
          transition={{duration: 1}}>
            <p className='arrangeOne one' style={{fontSize:"1.5rem", letterSpacing:"0.15rem", fontWeight:"bolder", color:"#B3B3B3"}}>Contact Info</p>
            <p className='arrangeTwo' style={{fontSize:"1rem", letterSpacing:"0.15rem", fontWeight:"bolder", color:"#FFF"}}>
              +91 6388883167 
            </p>
            <p className='arrangeTwo email' style={{fontSize:"1rem", letterSpacing:"0.15rem", fontWeight:"bolder", color:"#FFF"}}>
              aviralsrivastava1004@gmail.com 
            </p>
            <p style={{fontSize:"1rem", letterSpacing:"0.15rem", fontWeight:"bolder", color:"#FFF"}}>
              <FaLocationDot style={{color:"#cbc7c7", marginRight:"0.5rem", textAlign:"center", fontSize:"1rem"}} />
              <a href='https://maps.app.goo.gl/VNJow6rHi1k8JigU9' target='_blank' style={{textDecoration:"none", color:"#FFF"}}><p className='impLinkBtn arrangeTwo'>KV Colony, Mau, UP, India</p></a> 
            </p>
          </motion.div>
          <motion.div className='line' style={{width:"1px", height:"90%", background:"#fff", margin:"1rem"}} 
          initial = {{opacity: 0, scale: 0}} 
          whileInView={{opacity: 1, scale: 1}} 
          transition={{duration: 1.75}} />
          <motion.div className='arrange info' 
          initial = {{opacity: 0, transform: "translateX(25%)"}} 
          whileInView={{opacity: 1, transform: "translateX(0)"}} 
          transition={{duration: 1}}>
          <p className='arrangeOne one' style={{fontSize:"1.5rem", letterSpacing:"0.15rem", fontWeight:"bolder", color:"#B3B3B3"}}>Social Links</p>
          <a href='https://www.linkedin.com/in/aviral-srivastava-4a8940211' target='_blank' style={{textDecoration:"none", color:"aliceblue", fontWeight:"bolder", letterSpacing:"0.2rem"}}>
            <FaLinkedin className='socialIcon' style={{color:"#cbc7c7", marginRight:"0.5rem", textAlign:"center", fontSize:"1rem"}} />
              <p className='impLinkBtn arrangeTwo'>LinkedIn</p>
          </a>
          <a href='https://github.com/Aviral1004' target='_blank' style={{textDecoration:"none", color:"#fff", fontWeight:"bolder", letterSpacing:"0.2rem"}}>
            <FaGithub className='socialIcon' style={{color:"#cbc7c7", marginRight:"0.5rem", textAlign:"center", fontSize:"1rem"}} />
              <p className='impLinkBtn arrangeTwo'>Github</p>
          </a>
          <a href='https://www.instagram.com/ae_viralll?igsh=dnhpOG5pMm45M21q' target='_blank' style={{textDecoration:"none", color:"aliceblue", fontWeight:"bolder", letterSpacing:"0.2rem"}}>
            <AiFillInstagram className='socialIcon' style={{color:"#cbc7c7", marginRight:"0.5rem", textAlign:"center", fontSize:"1rem"}} />
              <p className='impLinkBtn arrangeTwo'>Instagram</p>
          </a>
          </motion.div>
        </div>  
      </div>
  )
}

export default Footer