import React, { Component } from 'react';

class HandlerEx extends Component {
  constructor(props) {
    super(props);
    // state 초기값 설정
    this.state = { message: 'Hello World!' };
  }

  // 클릭 이벤트 핸들러
  handleClick = () => {
    this.setState({ message: 'Goodbye World!' });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>버튼</button>
      </div>
    );
  }
}

export default HandlerEx;