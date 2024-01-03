import './App.css';

function App() {
  const name = 'gildong';
  
  const styles = {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: '40px'
  };

  const name1 = '로이';
  const animal = '강아지';

  const a = 10;
  const b = 8;

  const title = 'Hello world';
  // 외부 주석 사용방법 <<<< 커맨드 슬래슁
  return (
    <div className='App'>
      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소 */}
      {/* 2. javascript 표현식 사용 
            - {}로 감싸면 js 표현식 사용 가능 
            -{}에서 삼항 연산자 사용 가능 (if문은 사용 불가능)
      */}
      <div>{name} 안녕하세요!</div>
      <div>{name === 'gildong' ? ' gildong 입니다 ' : '잘못 아셨네요'} </div>

      {/* 3. style 속성
        - 리액트에서 돔 요소에 스타일 적용시 문자열 X -> 객체 사용
        - 스타일 속성 이름 중에서 하이픈(-) 포함시 camelCase 사용
    */}
      <div style={
        {
          backgroundColor: 'blue',
          color: 'white',
          fontSize: '48px'
        }
      }>
        스타일 적용!
      </div>
      <div style={styles}>스타일 적용2</div>

      {/* 4. className 사용
        - class 속성이 아닌 className 속성 사용!

        5. 종료 태그가 없는 태그의 사용
        - 기존에 종료 태그가 없는 태그를 사용 하더라도 종료 태그를 작성 해야함 or slef-closing
        self-closing
        - <input> -> <input></input> or <input/> 이런식으로 작성해야함
        - <br> -> <br><br> or <br/>

        6. 주석
        - //: jsx 외부 주석 (return 밖)
        - jsx 내부 주석은 지금 작성한것 처럼 작성하면 됨
    */}

      {/* 실습 */}
      {/* 1번 */}
      <h2>제 반려 동물의 이름은 {name1}입니다.</h2>
      <h2>{name1}는 {animal}입니다.</h2>

      {/* 2번 */}
      {3 + 5 == 8 ? '정답입니다.' : '오답입니다.'}
      <br />

      {/* 3번 */}
      {/* 단축평가 && */}
      {/* true && '문자열' */}
      {a > b && 'a가 b 보다 큽니다.'}

      {/* 4번  */}
      <div className='title'>
        {title}
      </div>
      <div>
        아이디 : <input type="text" /> <br />
        비밀번호 : <input type="text" /> <br />
      </div>

    </div>

  );
}

// );

// jsx 실습 1번
// const name = '로이';
// const animal = '강아지';
// let a = 10;
// let b = 5;

// const title = 'Hello World';
// const styles2 = {
//   backgroundColor: 'yellow',
//   color: 'green',
//   fontSize: '40px',
//   margin: '10px 0px'
// };
// const styles3 = {
//   margin: '25px 0px'
// };


// return (
//   <div className='App'>
//     <h2>제 반려 동물의 이름은<span style={{ textDecoration: 'underline' }}>{name}</span>입니다. <span style={{ textDecoration: 'underline' }}>{name}</span>는
//       <span style={{ textDecoration: 'underline' }}>{animal}</span>입니다</h2>
//     <span> {3 + 5 === 8 ? '정답입니다' : '오답입니다'}</span>

//     <div>    {a > b && "a가 b보다 큽니다"}</div>

//     <div></div>

//     <div style={styles2}>{title}</div>
//     <div style={styles3}>아이디:<input type="text" /></div>
//     <div>비밀번호:<input type="text" /></div>

//   </div>

// );






export default App;
