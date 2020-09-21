import React from 'react';
import './weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faCloudSunRain,faCloudSun,faCloudRain,faCloudShowersHeavy,faCloud,faSun } from '@fortawesome/free-solid-svg-icons';
import {faCloudRain} from '@fortawesome/free-solid-svg-icons';

const Weather =(props) => {
	if(props.cityname!=null) { 
	return(
		<div className="container text-light mt-5">
		<div className="Card" >
		<div className="CardBody">
		<h1> {props.cityname}, {props.country} </h1>
		<h5 className="py-4">  <FontAwesomeIcon icon={faCloudRain} className="fa-5x" /></h5>
		<h1 className="py-2"> {props.temp_celsius}&deg; </h1>
		<h3> 
		<span className="px-4"> {props.temp_min}&deg; </span>
		<span className="px-4"> {props.temp_max}&deg; </span>
		 </h3>
		 <h4 className="py-2">{props.description} </h4>
		</div>
		</div>
		</div>

		); }
	else {
		return("");
	}
}
export default Weather;