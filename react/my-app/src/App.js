import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1>Hello React !</h1>
      <Greet prenom = "Thomas" />
      <Greet prenom = "Kék" />
      <Greet prenom = "Xi Jinping 习近平" />
    <Welcome></Welcome>
    </div>
  );
}

export default App;
