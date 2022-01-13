import logo from './logo.svg';
import './App.css';

function App() {
  const adobe = ['Adobe PDF','Photoshop','Illustrtor']
  const products =[
    {name:"Photoshop",price:"$34.99"},
    {name:"Premiere Pro", price:"$99.99"},
    {name: "Illustrator", price:"$279.99"},
    {name:"InDesign", price:"$134.99"},
    {name:"After Effects", price:"$199.99"},
    {name: "Lightroom", price:"$299.99"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am exploring React</h1>
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Person name="Parrot"></Person>
        <ul>
          {adobe.map(ad => <li>{ad}</li>)}
        </ul>
      </header>
    </div>
    
  );
}
function Product(probs){
  const productStyle={
    width: '300px',
    height: '250px',
    backgroundColor: '#1A374D',
    margin: '10px'
  }
  const btn={
    borderRadius: '18px',
    backgroundColor: "#1473e6",
    color: 'white',
    margin:'2px',
    border: '2px',
    transition: 'box-shadow'
  }
  return(
    <div style={productStyle}>
      <h3>{probs.name}</h3>
      <h2>{probs.price}</h2>
      <button style={btn}>Buy now</button>
    </div>
  )
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
