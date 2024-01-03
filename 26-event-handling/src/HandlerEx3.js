import { useState } from "react";

const Practice = () => {
  let [display, changeDisplay] = useState(true);

  const setDisplay = () => {
    // 기존값 true -> 클릭시 false
    
    changeDisplay(!display);
  };

  return (
    <>
      <button onClick={setDisplay}>{display ? "사라져라" : "보여라"}</button>
      {display && <h4>안녕하세요</h4>}
    </>
  );
};

export default Practice;