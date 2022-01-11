import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am exploring React</h1>
        <Person name="Parrot"></Person>
      </header>
    </div>
    
  );
}

function Person(prob){
  const personStyle = {
    border:'2px solid red',
    margin: '10px',
    padding: '2px'
  }
  return(
    <div style={personStyle}>
      <h1>Name: {prob.name}</h1>
      <p></p>
    </div>
  );
}

export default App;
