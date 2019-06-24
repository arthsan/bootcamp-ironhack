
import React from 'react';
import { myProjects } from './../projects/Projects';
import { Link } from 'react-router-dom';
import queryString from 'query-string'

const ProjectDetails = (props) => {
  const { id } = queryString.parse(props.location.search)


  const getProject = (id) => {
    const theProject = oneProject => {
      return oneProject.id === id;
    }
    return myProjects.find(theProject)
  };
  
  const foundProject = getProject(id, 10);
   
  return (
    <div>
      Project detail
      <h2>{ foundProject.name } <span style={{fontSize:"14px"}}>{ foundProject.year }</span></h2>
      <h3>Used technologies: { foundProject.technologies }</h3>
      <p>{ foundProject.description }</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default ProjectDetails;