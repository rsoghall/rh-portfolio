import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import About from './About/About';
import WorkExp from './WorkExp/WorkExp';


function App() {
  return (
      <div className="App">
        <NavBar />
        <Main />
        <About />
        <WorkExp />
      </div>
  );
}

export default App;
