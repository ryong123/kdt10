import { useState } from "react";
import Counter from "./Counter";

// const CounterFunc = () => {
//   const [number, setNumber] = useState(0);
//   const onClickEnter = () => {
//     setNumber(number + 1);
//   };


//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onClickEnter}>Plus 1</button>
//     </div>
//   );

// };
// export default CounterFunc;

const CounterFunc = () => {
  const [counter, setCounter] = useState(0);

  // increase 함수선언
  const increase = () => {
    setCounter(counter + 1);
  };

  // decrease 함수선언
  const decrease = () => {
    setCounter(counter - 2);
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increase}> increase </button>
      <button onClick={decrease}> decrease </button>
    </div>
  );

};

export default CounterFunc;