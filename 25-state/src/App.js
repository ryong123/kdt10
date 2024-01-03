import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunc from './CounterFunc';
import StateEx from './StateEx';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <hr />
      <SayFunction />
      <hr />

      <CounterFunc />
      <hr />
      <StateEx />
    </div>
  );
}

export default App;
