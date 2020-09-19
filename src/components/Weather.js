import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
const Weather =(props) => {
	return(
		<div className="container">
		<div className="cards">
		<h1> {props.city}, {props.country} </h1>
		<h5 className="py-4">  <FontAwesomeIcon icon={faCloudSunRain} className="fa-5x" /></h5>
		<h1 className="py-2"> {props.temp}&deg; </h1>
		<h3> 
		<span className="px-4"> {props.min_temp}&deg; </span>
		<span className="px-4"> {props.max_temp}&deg; </span>
		 </h3>
		 <h4 className="py-2">{props.description} </h4>
		</div>
		</div>

		);
}
export default Weather;