import React, { Component } from 'react';
import './App.css';
import Messages from './messages.js';
import HelloWorld from './state-drills/HelloWorld.js'
import Bomb from './state-drills/Bomb.js'
class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
      </div>
      <HelloWorld/>
      <Bomb/>
      </div>
    );
  }
}

export default App;