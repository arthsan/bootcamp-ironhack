import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddProject from './AddProject';
import './projects.css';

class ProjectList extends Component {
  constructor(){
      super();
      this.state = { listOfProjects: [] };
  }

  getAllProjects = () =>{
    axios.get(`http://localhost:5000/api/projects`, {withCredentials:true})
    .then(responseFromApi => {
      this.setState({
        listOfProjects: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllProjects();
  }

  render(){
    return(
      <div className="projects-list">
        <strong>ProjectList</strong>
        <AddProject getData={() => this.getAllProjects()}/> {/* <== !!! */}
        { this.state.listOfProjects.map( project => {
          return (
            <div key={project._id}>
              <Link to={`/projects/${project._id}`}>
                <h3>{project.title}</h3>
              </Link>
              <ul>
                { project.tasks.map((task, index) => {
                  return <li key={index}>{task.title}</li>
                }) }
              </ul>  
            </div>
          )})
        }
      </div>
    )
  }
}

export default ProjectList;