import React from 'react'
import "../App.css";
import ProjectCard from '../components/ProjectCard';
import projectData from "../projectData.js";

const Myprojects = () => {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div id='myProjects' className='projectOuter'>
      <p className='title' style={{fontSize:"4rem", fontWeight:"bolder", color:"#264653"}}>My Projects</p>
      <div className="projectInner">
          {projectData.map((project, id) => {
            return <div className='slider' key={id}>
              <ProjectCard project={project} />
            </div>
          })}
      </div>
    </div>
  )
}

export default Myprojects