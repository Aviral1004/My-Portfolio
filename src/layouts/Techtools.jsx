import { motion } from 'framer-motion';
import React from 'react'

const Techtools = () => {
  return (
    <div id='techTools'>
      <p style={{fontSize: "4rem", fontWeight:"bolder"}}>
        SKILLS
      </p>
      <div className="types">
        <motion.div className='mainContainer' 
         initial = {{opacity: 0, transform: "translateY(25%)"}} 
         whileInView={{opacity: 1, transform: "translateY(0)"}} 
         transition={{duration : 0.5}}>
          <div className="card">
            <div className="face front">
              <h2>Basic<br/>Languages</h2>
            </div>
            <div className="face back">
              <div className="skill">
                <h5 >HTML</h5>
                <h5 >CSS/SCSS</h5>
                <h5 >Javascript</h5>
                <h5>Typescript</h5>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className='mainContainer' 
        initial = {{opacity: 0, transform: "translateY(25%)"}} 
        whileInView={{opacity: 1, transform: "translateY(0)"}} 
        transition={{duration : 0.7}}>
          <div className="card">
            <div className="face front">
              <h2>Major<br/>Libraries/Frameworks</h2>
            </div>
            <div className="face back">
              <div className="skill">
                <h5>ReactJS</h5>
                <h5>Redux</h5>
                <h5>TailwindCSS</h5>
                <h5>PostgreSQL</h5>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className='mainContainer' 
        initial = {{opacity: 0, transform: "translateY(25%)"}} 
        whileInView={{opacity: 1, transform: "translateY(0)"}} 
        transition={{duration : 0.8}}>
          <div className="card">
            <div className="face front">
              <h2>Minor<br/>Libraries/Frameworks</h2>
            </div>
            <div className="face back">
              <div className="skill">
                <h5>Bootstrap</h5>
                <h5>Chakra UI</h5>
                <h5>react<br/>slick</h5>
                <h5>framer<br/>motion</h5>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className='mainContainer' 
        initial = {{opacity: 0, transform: "translateY(25%)"}} 
        whileInView={{opacity: 1, transform: "translateY(0)"}} 
        transition={{duration : 0.9}}>
          <div className="card">
            <div className="face front">
              <h2>Tools</h2>
            </div>
            <div className="face back">
              <div className="skill">
                <h5>VS Code</h5>
                <h5>Bootstrap</h5>
                <h5>Canva</h5>
                <h5>Firebase</h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Techtools