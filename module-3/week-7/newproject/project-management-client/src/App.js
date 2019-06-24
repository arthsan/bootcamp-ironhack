import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/auth/Signup';
import NavBar from './components/navbar/NavBar';
import ProjectList from './components/projects/ProjectList';
import ProjectDetails from './components/projects/ProjectDetails';
import TaskDetails from './components/tasks/TaskDetails';
import AuthService from './components/auth/auth-service';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/protected-route';


class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
  
  
render() {
  {this.fetchUser()}
  if(this.state.loggedInUser){
    return (
      <div className="App">
        <NavBar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
        <Switch>
          <ProtectedRoute user={this.state.loggedInUser} path='/projects/:id' component={ProjectDetails} />
          <ProtectedRoute user={this.state.loggedInUser} path='/projects' component={ProjectList} />
        </Switch>
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />
          <Switch> 
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path='/' render={() => <Login getUser={this.getTheUser}/>}/>
            <ProtectedRoute user={this.state.loggedInUser} path='/projects/:id' component={ProjectDetails} />
            <ProtectedRoute user={this.state.loggedInUser} path='/projects' component={ProjectList} />
          </Switch>
      </div>
    );
  }
}
}
export default App;
