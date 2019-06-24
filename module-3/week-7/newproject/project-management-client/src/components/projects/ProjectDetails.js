import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './projects.css';
import EditProject from './EditProject';
import AddTask from '../tasks/AddTask'

class ProjectDetails extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      this.getSingleProject();
  }

  getSingleProject = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/projects/${params.id}`, {withCredentials:true})
      .then( responseFromApi =>{
          const theProject = responseFromApi.data;
          this.setState(theProject);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleProject();
    } else {
      return <EditProject theProject={this.state} getTheProject={this.getSingleProject} {...this.props} />
        
    }
  }

  ownershipCheck = (project) => {
    console.log(this.props.loggedInUser)
    if(this.props.loggedInUser && project.owner == this.props.loggedInUser._id){
      return (
        <div>
          <div>{this.renderEditForm()} </div>
          <button onClick={() => this.deleteProject(this.state._id)}>Delete project</button>
        </div>
      )
    } 
  }

  deleteProject = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/projects/${params.id}`, {withCredentials:true})
    .then( () =>{
        this.props.history.push('/projects'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderAddTaskForm = () => {
    if(!this.state.title){
        this.getSingleProject();
      } else {     
        return <AddTask theProject={this.state} getTheProject={this.getSingleProject} />
      }
  }

  render(){
    return(
      <div className="project-details">
        <strong>ProjectDetails</strong>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <div >
          {this.ownershipCheck(this.state)}
        </div>
        <Link to={'/projects'}>Back to projects</Link>
      </div>
    )
  }
}

export default ProjectDetails;