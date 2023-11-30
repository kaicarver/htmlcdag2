import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import SuperHero from './components/SuperHeros';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UserGreetings from './components/UserGreetings';
import AdminTest from './components/AdminTest';
import NameList from './components/NameList';
import Inline from './components/Inline';
import Stylesheets from './components/Stylesheets';

function App() {
  return (
    <div className="App">       
      <h1>React c'est genial !</h1>
          /* <Greet prenom = "Thomas" age="35 ans">
            Thomas adore react ! Et c'est cool !
          </Greet>
          <Greet prenom = "John" age="20 ans"  />
          <Greet prenom = "Toto" age="21 ans"  />
          <Greet prenom = "Tata" age="89 ans"  />
          <Greet prenom = "Jojo" age="17 ans"  />
          
          
           <Welcome prenom="Tom" age="3 ans"/> 
          <Welcome prenom="Max" age="8 ans"/>  */

        <SuperHero prenom = "Bruce" superheros = "Batman">
        This is children props
        </SuperHero>
        <SuperHero prenom = "Clark" superheros = "Superman" />
        <SuperHero prenom = "Diana" superheros = "Wonder Woman" /> */
        <Message />
        <Counter value={40} />
        <FunctionClick />
        <ClassClick />
        <UserGreetings />
        <AdminTest /> */
        <NameList />
        <Inline />
        <Stylesheets />


    </div>
  );
}

export default App;
