import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";
import "../App.css";
import { motion } from 'framer-motion';

const ProjectCard = ({project : {title, imageSrc, description, skills, demo, source}}) => {
  return (
    <motion.div className='projectCard' 
    initial = {{opacity: 0, transform: "translateX(-25%)"}} 
         whileInView={{opacity: 1, transform: "translateX(0)"}} 
         transition={{duration : 1}}>
        <motion.img src={imageSrc} className='imgCard' 
        initial = {{opacity: 0,transform: "translateX(-25%)"}} 
        whileInView={{opacity: 1,transform: "translateY(0)"}} 
        transition={{duration : 1.1}} />
        <h3 className='cardTitle'>{title}</h3>
        <p className='description'>{description}</p>
        <motion.ul className='cardSkills' 
        initial = {{opacity: 0,transform: "translateY(-50%)"}} 
        whileInView={{opacity: 1,transform: "translateY(0)"}} 
        transition={{duration : 1.25}}>
            {skills.map((skill, id) => {
                return <li key={id} className='cardSkill'>
                    {skill}
                </li>
            })}
        </motion.ul>
        <motion.div className="cardLinks" 
        initial = {{scale: 0}} 
        whileInView={{scale: 1}} 
        transition={{duration : 1.5}}>
            <a href={demo} target="_blank"><CgWebsite className="cardLink" /></a>
            <a href={source} target='_blank'><FaGithub className="cardLink" /></a>
        </motion.div>
    </motion.div>
  )
}

export default ProjectCard