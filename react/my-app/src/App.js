import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <h1>Hello React !</h1>
      <Greet prenom="Thomas" age="23">
        Thomas adore React !
        Et c'est cool !
      </Greet>
      <Greet prenom="Bruce" alias="Batman" age="3" />
      <Greet prenom="Clark" alias="Superman" age="3" />
      <Greet prenom="Diana" alias="Wonder Woman" age="150" />
      <Greet prenom="Kék" alias="Hulk" age="3" />
      <Greet prenom="Xi Jinping 习近平" alias="Winnie" age="70" />
      <Welcome></Welcome>
    </div>
  );
}

export default App;