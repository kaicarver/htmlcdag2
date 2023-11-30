import './App.css';
import { useReducer } from 'react';

// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import UserGreeting from './components/UserGreeting';
// import AdminTest from './components/AdminTest';
// import NameList from './components/NameList';
// import Stylesheets from './components/Stylesheets';
// import Form from './components/Form';
// import InscriptionForm from './components/InscriptionForm';

function App() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return initialState;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
{/*             <Form/>
            <InscriptionForm/> */}

{/*       <Stylesheets primary={true} />
      <NameList/>
      <AdminTest/>
      <UserGreeting/>
      <FunctionClick/>
      <ClassClick/>
      <Message />
      <Counter value="10"/>
      <Counter value={42}/>
      <Counter value={-42}/> 
      
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
