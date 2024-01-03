import React from 'react';

const FavoriteFood = (props) => {
  const { food } = props;
  return (<div>
    <p>내가 좋아하는 음식은 <span style={{ color: 'red' }}>{food}</span>입니다.</p>
  </div>
  );
};

FavoriteFood.defaultProps = {
  food: "아무거나?",
};


export default FavoriteFood;

