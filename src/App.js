import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css';
import Feed from './components/Feed/Feed';
import Widget from './components/Widget/Widget'
import Login from './components/Login/Login'
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="app">
     {
        user ? (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </>
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
