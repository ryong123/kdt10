import { Component } from 'react';
import PropTypes from 'prop-types';
class ClassComponent extends Component {
  // 클래스형 컴포넌트는 render 함수가 필수
  render() {
    const { name } = this.props;
    return (
      <div>
        {<p>새로운 컴포넌트의 이름은 <b>{this.props.name}</b></p>}
        {<p>새로운 컴포넌트의 이름은 <b>{name}</b></p>}

      </div>
    );
  }
}



ClassComponent.defaultProps = {
  name: 'coding',
};

ClassComponent.propTypes = {
  name: PropTypes.string
};

export default ClassComponent;
