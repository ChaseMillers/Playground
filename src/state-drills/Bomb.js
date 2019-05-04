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
    
      /*this is so if we leave the page, 
      the component wont keep counting*/
      componentWillUnmount() {
        clearInterval(this.interval)
      }

      renderDisplay(){
      const { start } = this.state
      if (start >= 8) {
        clearInterval(this.interval)
        return 'BOOM!!!!'
      } else if (start % 2 === 0) {
        return 'tick'
      } else {
        return 'tock'
      }
    }

    render() {
      return (
        <div className="Bomb">
          <p> {this.renderDisplay()} {this.state.start}</p>
        </div>
      )}
      
    }