import PropTypes from 'prop-types';

// export default function FuncComponent
// function FuncComponent(props) {
function FuncComponent({ name }) {
  // 구조분해 할당 사용 가능
  // const { name } = props;
  return (
    <div>
      <h1>Hi!</h1>
      <p>여기는 Function Component</p>
      {/* <p>새로운 컴포넌트의 이름은 <b>{props.name}</b></p> */}
      <p>새로운 컴포넌트의 이름은 <b>{name}</b></p>
    </div>
  );
}


// 넘겨 받는게 없을 경우 
FuncComponent.defaultProps = {
  name: '길동',
};

// FuncComponent.PropTypes = {
//   name: PropTypes.string,
// };

export default FuncComponent;