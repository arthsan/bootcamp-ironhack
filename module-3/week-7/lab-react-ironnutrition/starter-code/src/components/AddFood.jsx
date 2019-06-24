import React, { Component } from 'react';

class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: '',
      image: ''
    }
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
  }
  
  handlerChange(event) {
    let { name, value } = event.target;
    console.log(event.target)
    this.setState({[name]: value})
  }

  handlerSubmit(event) {
    event.preventDefault();
    this.props.AddFood(this.state);
    this.setState({
      name: '',
      calories: '',
      image: ''
    })
  }

  render() {
    return (
      <div className="addfood-container">
        <form onSubmit={this.handlerSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handlerChange(e)}></input>
          <label>Calories</label>
          <input type="text" name="calories" value={this.state.calories} onChange={(e)=>this.handlerChange(e)}></input>
          <label>Image</label>
          <input type="text" name="image" value={this.state.image} onChange={(e)=>this.handlerChange(e)}></input>
          <input type="submit" name ="submit" />
        </form>
      </div>
    )  
  }
}

export default AddFood;