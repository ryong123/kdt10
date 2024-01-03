import React, { Component } from 'react';



class StateEx extends Component {
  state = {
    counter: 0
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={() => this.setState({ counter: counter + 2 })}>+2</button>
        <button onClick={() => this.setState({ counter: counter - 1 })}>-1</button>
      </div>
    );
  }
}

export default StateEx;