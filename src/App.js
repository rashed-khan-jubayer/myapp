import logo from './logo.svg';
import './App.css';

function App() {
  const adobe = ['Adobe PDF','Photoshop','Illustrtor']
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am exploring React</h1>
        <Person name="Parrot"></Person>
        <ul>
          {adobe.map(ad => <li>{ad}</li>)}
        </ul>
      </header>
    </div>
    
  );
}

function Person(prob){
  const personStyle = {
    border:'2px solid green',
    margin: '10px',
    padding: '2px'
  }
  return(
    <div style={personStyle}>
      <h1>Name: {prob.name}</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default App;
