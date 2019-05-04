import React, { Component } from 'react';
import './App.css';
import Messages from './messages.js';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import Gun from './state-drills/RouletteGun.js';
import Tabs from './state/Tabs.js';
import Accordion from './state-drills/Accordion.js';

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

const sectionsObj = [
  {
    title: 'Section 1',
    content: <p>Sometimes I'll start a sentence, and I don't even know where it's going.</p>
  },
  {
    title: 'Section 2',
    content: <p>I just hope I find it along the way.</p>
  },
  {
    title: 'Section 3',
    content: <p>Like an improv conversation.</p>
  },
]

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
      <hr/>
      <Bomb/>
      <hr/>
      <Gun/>
      <hr/>
      <Tabs tabs={tabsProp}/>
      <hr/>
      <Accordion sections={sectionsObj}/>
      </div>
    );
  }
}

export default App;