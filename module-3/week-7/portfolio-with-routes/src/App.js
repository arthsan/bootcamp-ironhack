
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import { Projects } from './components/projects/Projects';
import ProjectDetails from './components/project-details/ProjectDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route path="/project-detail" component={ProjectDetails} /> */}
        </Switch>
        <p>Footer</p>
      </div>
    );
  }
}

export default App;
