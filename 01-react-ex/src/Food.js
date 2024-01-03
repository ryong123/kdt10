function Food(props) {
  const { food } = props;
  return (
    <div>
      내가 좋아하는 <span style={{ color: 'red' }}>{food}</span>
    </div>
  );
}


Food.defaultProps = {
  food: "아무거나?",
};


export default Food;