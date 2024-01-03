import { useState } from "react";


const Practice = () => {
  let [textcolor, changeColor] = useState({ color: "black", text: "검정색" });
  // textcolor: {color: 'black', text: '검정색'}

  const setColor = (color, obj) => {
    changeColor({ color: color, text: obj.innerText });
  };

  return (
    <>
    {/*  <h4 style={{ color: 'black' }}>{'검정색'} 글씨</h4>*/}
      <h4 style={{ color: textcolor.color }}>{textcolor.text} 글씨</h4>
      <button
        onClick={(e) => {
          setColor("red", e.target);
        }}
      >
        빨간색
      </button>
      <button
        onClick={(e) => {
          setColor("blue", e.target);
        }}
      >
        파란색
      </button>
    </>
  );
};

export default Practice;