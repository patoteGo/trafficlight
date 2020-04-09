import React from 'react';

// import './App.css';
import './sass/app.sass';
import TrafficLight from './Components/TrafficLight'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>LISTO</h2>
        <TrafficLight/>
      </header>
    </div>
  );
}

export default App;
