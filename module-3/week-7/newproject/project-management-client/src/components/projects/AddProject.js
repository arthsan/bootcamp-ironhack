import React, { Component } from 'react';
import axios from 'axios';
import './projects.css';

class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", description: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    axios.post("http://localhost:5000/api/projects", { title, description }, {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render() {
    return (
      <div className="add-project">
        <strong>AddProject</strong>
        <form onSubmit={this.handleFormSubmit}>
          <p>
            <label>Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          </p>
          <p>
            <label>Description:</label>
            <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    )
  }
}

export default AddProject;