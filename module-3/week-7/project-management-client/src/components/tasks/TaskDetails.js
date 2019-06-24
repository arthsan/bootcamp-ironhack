
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditTask from './EditTask';


class TaskDetails extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.getTheTask();
  }

  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleProject();
    } else {
    //                                                    {...props} => so we can have 'this.props.history' in Edit.js
    //                                                                                          ^
    //                                                                                          |
      return <EditTask theProject={this.state} getTheProject={this.getSingleProject} {...this.props} />
    }
  }

  getTheTask = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/projects/${params.id}/tasks/${params.taskId}`)
    .then( responseFromApi =>{
      const theTask = responseFromApi.data;
      this.setState(theTask);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
    )
  }
}

export default TaskDetails;