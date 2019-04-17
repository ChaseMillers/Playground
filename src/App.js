import React, { Component } from 'react';
import './App.css';
import Messages from './messages.js';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import Gun from './state-drills/RouletteGun.js';
import Tabs from './state/Tabs.js';

const tabsProp = [
  { name: '1st tab',
    content: <p>People</p> },
  { name: '2nd tab',
    content: <p>Order</p> },
  { name: '3rd tab',
    content: <p>Our</p> },
  { name: '4th tab',
    content: <p>Potatoes</p> }
];

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
      <Gun/>
      <Tabs tabs={tabsProp}/>
      </div>
    );
  }
}

export default App;