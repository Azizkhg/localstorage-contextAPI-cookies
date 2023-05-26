import logo from './logo.svg';
import './App.css';
//import { LocalStorage } from './localStorage';
import {Todo} from './pages/todo';
//import { Cookiee } from './cookieexample';
import { MyContext } from './pages/MyContext';
import { useState } from 'react';
import { ContextApi } from './pages/contextAPI';
import { ContextAPIex2 } from './pages/contextAPIex2';

function App() {
  const [text,setText]=useState("");
  return (
    <div className="App">
     {/* <LocalStorage/> */}
    <Todo/>
    {/* <Cookiee/> */}
    <h1><br/>---------------context api---------------------<br/></h1>
    <MyContext.Provider value={{ text, setText }}>
        <ContextApi />
        <ContextAPIex2/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
