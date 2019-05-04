import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
    state = {
        cool: 'Chase',
      };

    render() {
      return (
        <div className="HelloWorld">

          <p>Hello {this.state.cool}</p>
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
          
        </div>
      );
      
    }
  }
  export default HelloWorld