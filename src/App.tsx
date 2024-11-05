import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <div className="App-section" id="section-one">
          Section 1
        </div>
        <div className="App-section" id="section-two">
          Section 2
        </div>
        <div className="App-section" id="section-three">
          Section 3
        </div>
        <div className="App-section" id="section-four">
          Section 4
        </div>
      </div>
    </div>
  );
}

export default App;
