import React, { Component } from 'react';
class ClassComponent extends Component {
  render() {
    const { valid, text } = this.props;
    return (
      <div>
        <h2>{text}</h2>
        <br />
        <button onClick={valid}>콘솔메세지</button>
      </div>
    );
  }
}

export default ClassComponent;