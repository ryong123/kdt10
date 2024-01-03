import { useState } from "react";

function SayFunction() {
  console.log(useState('welcome!')); // 1번째 값 (메세지) 2번째 값은 함수['welcome!', function]
  const [message, setMessage] = useState('welcome!');
  // message : 메세지 상태
  // setMessage(): message state 값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage("안녕하세요~");
  };

  const onClickLeave = () => {
    setMessage("안녕히 가세요~");
  };


  return (
    <div>
      {/* 
      주의사항 괄호 없음! 
      - HTML에서는 onclick="onclickEnter()" 괄호를 넣음 -> 이말은 문자열 형식으로 호출문 등록
      - js에서 addEventListener("click", onclickEnter) 이런식으로 썻음 괄호를 없애서 함수를
      바로 실행하지 않고, 클릭이 발생 했을 때 함수가 호출 되도록 만듦
      - React: onClick={onclickEnter} -> JS와 동일
       */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default SayFunction;