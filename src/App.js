import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Class_component';
import Function from './components/Functional_component';
import Hola from './components/Hello';
function App() {
  return (
    <div className="App">
      {/* <h1>Hello World!!!</h1> */}
      {/* <Greet />
      <Welcome />
      <Hello/>
      <Function/> */}
      {/* <Hola/> */}
      <Greet name = 'Ramu' heroname = 'Thor'>
        <p>This is children</p>
      </Greet>
      <Greet name = 'Raju' heroname = 'Superman'>
        <button>Submit</button>
      </Greet>
      <Greet name = 'Ravan'heroname = 'Batman'></Greet>

      {/* Helloworld */}
      <Welcome name = 'Ramu' heroname = 'Thor'></Welcome>
      <Welcome name = 'Raju' heroname = 'Superman'></Welcome>
      <Welcome name = 'Ravan'heroname = 'Batman'></Welcome>
    </div>
  );
}

export default App;
