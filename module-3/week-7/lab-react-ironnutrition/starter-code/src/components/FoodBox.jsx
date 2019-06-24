import foods from './../foods.json'
import React, { Component } from 'react';
import FoodCard from './FoodCard.jsx';
import AddFood from './AddFood'

class FoodBox extends Component {
  constructor() {
    super();
    this.state = {
      arrfoods: foods
    }
    this.addFoodHandler = this.addFoodHandler.bind(this);
  }

  addFoodHandler(OneFood) {
    const foodCopy = [...this.state.arrfoods]
    foodCopy.push(OneFood);
    this.setState({
      arrfoods:foodCopy
    })
  }

  render() {
    return (
      <div className="foods-container">
      <AddFood AddFood={this.addFoodHandler}/>
        {
        this.state.arrfoods.map((OneFood, index) => {
          return <FoodCard key={index} {...OneFood}/>
        })
      }
      </div>
    )  
  }
}

export default FoodBox;
