import React, { Component } from 'react';
//import './Bomb.css';

export default class Bomb extends Component {
    state = {
        start: 0,
      };
    
    componentDidMount() {
       this.interval = setInterval(() => {
        console.log("logged")
         this.setState({
           start: this.state.start + 1
         })
        }, 1000)
      }
    
      componentWillUnmount() {
        clearInterval(this.interval)
      }

    render() {
      return (
        <div className="Bomb">
        <hr/>
          <p>tick, tock, BOOM! {this.state.start}</p>
        <hr/>
        </div>
      )}
      
      componentWillUnmount() {
        clearInterval(this.interval)     
        }
    }