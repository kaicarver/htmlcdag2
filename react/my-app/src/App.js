import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Message />
      <Counter value="10"/>
      <Counter value={42}/>
      <Counter value={-42}/>
      {/* 
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
      <Welcome prenom="Tom" age="3"></Welcome>
      <Welcome prenom="Max" age="5"></Welcome>
      */}
    </div>
  );
}

export default App;
