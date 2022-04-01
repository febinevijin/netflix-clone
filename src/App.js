import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import {originals,action, Comedy } from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
  <NavBar/>
  <Banner/>
  <RowPost url={originals} title='Netflix orginals'/>
  <RowPost url={action} title='Action ' isSmall/>
  <RowPost url={Comedy} title='Comedy ' isSmall/>

    </div>
  );
}

export default App;
