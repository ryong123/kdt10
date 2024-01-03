import './App.css';
import Food from './Food';
import Book from './book';
import ClassComponent from './ClassComponent';

function App() {
  const name = '로이';
  const animal = '강아지';

  // 실습 3번 
  const a = 10;
  const b = 8;

  function my_func() {
    console.log("콘솔 메세지 띄우기!");
  }
  return (
    // 실습 1번
    <div className="App">
      <h2>JSX 실습 1번</h2>
      <h2>제 반려 동물의 이름은 <span style={{ textDecoration: 'underline' }}> {name}</span> 입니다.
        <span style={{ textDecoration: 'underline' }}> {name}</span>는 <span className='underline'>{animal}</span> 입니다.</h2>

      <hr />
      {/* 실습 2번 */}
      <h2>JSX 실습 2번</h2>
      {
        3 + 5 == 8 ? '정답입니다' : '오답입니다'
      }

      <hr />
      {/* 실습 3번 */}
      <div>
        <h2> JSX 실습 3번</h2>
        {
          a > b && 'a가 b보다 큽니다.'
        }
      </div>
      <hr />
      {/* 실습 4번 */}
      <div>
        <h2 className="title">Hello World</h2>
        <span>아이디 : </span><input type="text" />
        <br /><br />
        <span>비밀번호 : </span><input type="text" />
      </div>

      <hr />
      <br />

      {/*Props 실습 1번*/}
      <Food food="밥" />
      <Food></Food>
      <hr />
      <br /><br />
      {/* Props 실습 2번 */}

      <Book
        title="이번주 베스트셀러"
        author="나의 하루는 4시 40분에 시작된다."
        price="13500원"
        type="자기계발서"
      />

      <hr />



      <ClassComponent
        text="pros 전달"
        valid={my_func}
      />
      <br /><br /><br /><br />
    </div>



  );
}

export default App;
