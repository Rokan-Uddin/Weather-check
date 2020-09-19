import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/Weather';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
