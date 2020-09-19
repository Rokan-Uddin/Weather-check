import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/Weather';
const API_key= "492fbe1fd058a258ad7871724856f7f6";
// api_call="api.openweathermap.org/data/2.5/weather?q=London,uk";

class App extends React.Component{
  constructor() {
    super();
    this.state= {
      city:undefined,
      country:undefined,
      description:undefined,
      temp:undefined,
      min_temp:undefined,
      max_temp:undefined
    }
    this.getWeather();
  }

  getTemperature(api_temp) {
    const cellcias_temp=Math.floor(api_temp-273);
    return cellcias_temp;
  }

  getWeather = async() => {
    const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=${API_key}`);
    const res=await api_call.json();
    console.log(res);
    this.setState({
      city:res.name,
      country:res.sys.country,
      description:res.weather[0].main,
      temp:this.getTemperature(res.main.temp),
      min_temp:this.getTemperature(res.main.temp_min),
      max_temp:this.getTemperature(res.main.temp_max)
    });
  }
  render() {
    return (
    <div className="App">
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      description={this.state.description}
      temp={this.state.temp}
      min_temp={this.state.min_temp}
      max_temp={this.state.max_temp}
       />
      
      
    
    </div>
  ); 
  }

}

export default App;
