
import './App.css';
import Button from './Button';
import FuncComponent from './FuncComponent';
import ClassComponent from './ClassComponent';
import FavoriteFood from './FavoriteFood';
import Book from './book';
import Props from './ClassComponent2';

function App() {
  const my_func = () => {
    console.log("콘솔 띄우기 성공!");
  };

  return (
    <div className="App">
      <FuncComponent name="코딩온" />
      <FuncComponent />
      <hr />

      <Button link="https://www.google.com/">
        Google
      </Button>
      <ClassComponent name="코딩온" />
      <ClassComponent />

      <hr />
      {/* 실습 1 */}
      <FavoriteFood />
      <FavoriteFood food="진짜 아무거나" />

      {/* 실습 2 */}
      <Book
        title="나의 하루는 4시 40분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      />

      {/* 실습 3 */}
      <Props />

      <div>
        <Props
          text="App 컴포넌트에서 넘겨준 text props입니다."
          valid={my_func}
        />
      </div>

    </div>
  );
}

export default App;
