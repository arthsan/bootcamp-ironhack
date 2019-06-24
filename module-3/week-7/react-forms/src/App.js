import React, { Component } from 'react';
import './App.css';
import MoviesList from './components/movies-list/MoviesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  };

  render() {
    return (
      <div>
        <div className="counter">
          <p>Count is: {this.state.clickCount}</p>
          <button onClick={this.clickHandler}>Click me</button>
        </div>
        <MoviesList />
      </div>
    );
  }
}

export default App;
