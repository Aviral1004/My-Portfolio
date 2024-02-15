import React, { useState } from 'react';
import "../App.css";
import { Link } from 'react-scroll';
import Logo from "../assets/aviralNameLogo.png";
import { motion } from 'framer-motion';
import Resume from "../assets/Aviral_Srivastava_ResumeFED.pdf";

const Navbar = () => {
    let menuIcon = document.getElementById("mobile");
    let ul = document.querySelector("ul");
    let i = document.querySelector("i");
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);    
    }
    document.onclick =  function(e) {
        if (!menuIcon.contains(e.target) && !ul.contains(e.target)) {
            setClicked(false);
        }
    }
  return (
    <div className='navbar'>
        <motion.div className='logoNav' 
        initial={{opacity: 0, transform: "translateY(-50%)"}} 
        whileInView={{opacity: 1, transform: "translateY(0)"}} 
        transition={{duration:0.8, ease: "circInOut"}}>
            <img src={Logo} className='logo' alt="" />
        </motion.div>
        <div className='sectionNav'>
          <ul className={clicked ? "active" : ""}>
            <motion.li initial={{opacity:"0", transform: "translateY(-50%)"}} 
            whileInView={{opacity:"1", transform: "translateY(0)"}} 
            transition={{duration : 0.5, ease:"circInOut"}}>
                <Link to='techTools' smooth={true} duration={500} spy={true}>
                    <button className='navBtn' onClick ={handleClick}>
                        Skills
                    </button>
                </Link>
            </motion.li>
            <motion.li initial={{opacity:"0", transform: "translateY(-50%)"}} 
            whileInView={{opacity:"1", transform: "translateY(0)"}} 
            transition={{duration : 0.6, ease:"circInOut"}}>
                <Link to='myProjects' smooth={true} duration={500} spy={true}>
                    <button className='navBtn' onClick ={handleClick}>Projects</button>
                </Link>
            </motion.li>
            <motion.li initial={{opacity:"0", transform: "translateY(-50%)"}} 
            whileInView={{opacity:"1", transform: "translateY(0)"}} 
            transition={{duration : 0.7, ease:"circInOut"}}>
                <Link to='contact' smooth={true} duration={900} spy={true}>
                    <button className='navBtn' onClick ={handleClick}>Contact Me</button>
                </Link>
            </motion.li>
            <motion.li initial={{opacity:"0", transform: "translateY(-50%)"}} 
            whileInView={{opacity:"1", transform: "translateY(0)"}} 
            transition={{duration : 0.8, ease:"circInOut"}}>
                <a href={Resume} className='resume' target='_blank' download>
                    Resume
                </a>
            </motion.li>
          </ul>
        <motion.div id="mobile" onClick={handleClick} 
        initial={{opacity:"0", transform: "translateY(-50%)"}} 
            whileInView={{opacity:"1", transform: "translateY(0)"}} 
            transition={{duration : 0.8, ease:"circInOut"}}>
            <i id='bar' className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </motion.div>
        </div>   
    </div>
  )
}

export default Navbar