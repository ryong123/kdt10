// useCallback : 매번 함수를 생성하지 않고, 함수를 기억해뒀다가 필요할 떄마다 재사용
import { useState, useCallback } from 'react';
function UseCallbackEx() {
  const [text, setText] = useState('');

  // [before]
  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };


  // [after]

  // useCallback 훅으로 함수를 기억해서
  // 컴포넌트가 리렌더링 되어도, 의존성 배열에 있는 값이 바뀌지 않는 한 기존 함수를 재사용

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <>
      <h1>useCallback ex</h1>
      <input type="text" onChange={onChangeText} />
      <div>작성한 값 : {text || '없음'}</div>
    </>
  );
}

export default UseCallbackEx;