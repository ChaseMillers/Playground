import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    state = {
        cool: 'Chase',
      };

    render() {
      return (
        <div className="HelloWorld">
        <hr/>
          <p>Hello, {this.state.cool}</p>
          <button
          onClick={() => this.setState({cool:'Chase'})}
          >Cool
          </button>

          <button
          onClick={() => this.setState({cool:'Adam'})}
          >Lame
          </button>

          <button
          onClick={() => this.setState({cool:'Sofia'})}
          >Sexy
          </button>
          <hr/>
        </div>
      );
      
    }
  }
  export default HelloWorld