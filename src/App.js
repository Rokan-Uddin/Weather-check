import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/Weather';
const API_key= "492fbe1fd058a258ad7871724856f7f6";
// api_call="api.openweathermap.org/data/2.5/weather?q=London,uk";

class App extends React.Component{
  constructor() {
    super();
    this.state= {}
    this.getWeather();
  }

  getWeather = async() => {
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_key}`);
    const res=await api_call.json();
    console.log(res);
  }
  render() {
    return (
    <div className="App">
      <Weather />
    </div>
  ); 
  }

}

export default App;
