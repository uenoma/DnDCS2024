import './App.css';
import Sheet from './Sheet';

function App() {
  return (
    <div className="App">
      <div className="AppHeader">
        <button className="AppHeaderSave">SAVE</button>
        <button className="AppHeaderLoad">LOAD</button>
      </div>
      <Sheet />
    </div>
  );
}

export default App;
