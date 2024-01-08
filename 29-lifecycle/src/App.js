import LifeCycleClass from "./LifeCycleClass";
import LifeCycleFunc from "./LifeCycleFunc";
import PostList from './LifeCycleEx';


function App() {
  return (
    <div className="App">
      {/* 클래스형 컴포넌트 라이프사이클 */}
      <LifeCycleClass></LifeCycleClass>

      {/* 함수형 컴포넌트 라이프사이클 */}
      <LifeCycleFunc />

      <PostList />
    </div>
  );
}

export default App;
