import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1>Hello React !</h1>
      <Greet prenom="Thomas" age="23" />
      <Greet prenom="Kék" age="3" />
      <Greet prenom="Xi Jinping 习近平" age="72" />
      <Welcome></Welcome>
    </div>
  );
}

export default App;
