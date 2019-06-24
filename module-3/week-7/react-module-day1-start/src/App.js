import React, { Component } from "react";
import "./App.css";
import ReactPlayer from "react-player";

class App extends Component {

  render() {
    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    }
   
    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl: 'https://st2.depositphotos.com/4849999/7727/i/950/depositphotos_77279004-stock-photo-web-page-code-html.jpg'
    };
    
    const displayAvartar = (user) => {
      if(user.avatarUrl){
        return <img src={user.avatarUrl} />
      } else {
        return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
      }
    }

    const element = (
      <h2>
        Hello, {formatName(user)}!
      </h2>
    );
 
    return (
      <div className="App">
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
        <h1> Hello Ironhackers! </h1>
        {element}
        {displayAvartar(user)}
      </div>
    );
  }
}

export default App;