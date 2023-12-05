import './App.css';
import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';

import ComponentA from './components/ComponentA';
import ComponentC from './components/ComponentC';
import DataFetchingOne from './components/DataFetchingOne';
import DataFilm from './components/DataFilm';
import { UserProvider } from './components/userContext';
import DataFetchAll from './components/DataFetchAll';
import DataTodos from './components/DataTodos';
import DataTodosReducer from './components/DataTodosReducer';
import DataBlogsReducer from './components/DataBlogsReducer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profil from './components/Profil/Profil';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Marketing from './components/Services/Marketing/Marketing';
import Developpement from './components/Services/Developpement/Developpement';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import GestionPost from './components/Admin/GestionPost/GestionPost';

// require('dotenv').config();
// console.log(process.env);

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

export const CountContext = React.createContext();

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
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} >
          <Route path='/services/marketing' element={<Marketing />} />
          <Route path='/services/developpement' element={<Developpement />} />
        </Route>
        <Route path='/admin' element={<Admin />} >
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/gestionpost' element={<GestionPost />} />
        </Route>
        <Route path='/profil/:id' element={<Profil />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

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
      {/*       <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <ComponentA />
      </CountContext.Provider> */}
      {/* <DataFetchingOne/> */}
      {/* <DataFilm/> */}
      {/*       <UserProvider value="LGC">
        <ComponentC />
      </UserProvider> */}
      {/*       <h1>DataFetchAll :</h1>
      <DataFetchAll />
      <DataTodos /> */}
      {/* <DataTodosReducer /> */}
      {/* <DataBlogsReducer />   */}
    </div>
  );
}

export default App;
