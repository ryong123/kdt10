
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import HandlerEx from './HandlerEx';
import HandlerEx2 from './HandlerEx2';
import Practice from './HandlerEx3';
function App() {
  return (
    <div className="App">
      <SyntheticEvent></SyntheticEvent>
      <hr />
      <ClassBind></ClassBind>
      <hr />
      <Counter />
      <hr />
      <HandlerEx />
      <hr />
      <HandlerEx2 />
      <hr />
      <Practice />
    </div>
  );
}

export default App;
