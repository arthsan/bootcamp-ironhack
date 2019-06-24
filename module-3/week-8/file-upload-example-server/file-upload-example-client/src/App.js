// App.js

import React, { Component } from 'react';
import './App.css';

import AddThing from './components/AddThing'; // <== !!!

class App extends Component {
  render() {
    return (
      <div className="App">
       <AddThing />
      </div>
    );
  }
}

export default App;
