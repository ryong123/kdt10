import './App.css';
import UseMemoEx from './UseMemoEx';
import UseCallbackEx from './UseCallbackEx';
import UseCallbackEx2 from './useCallbackEx2';


function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <UseCallbackEx />
      <UseCallbackEx2 postId={9} />
    </div>
  );
}

export default App;
