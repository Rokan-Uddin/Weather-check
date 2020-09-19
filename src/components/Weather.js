import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
const Weather =() => {
	return(
		<div className="container">
		<div className="cards">
		<h1> Bangladesh </h1>
		<h5 className="py-4">  <FontAwesomeIcon icon={faCloudSunRain} className="fa-5x" /></h5>
		<h1 className="py-2"> 25&deg; </h1>
		<h3> 
		<span className="px-4"> 15&deg; </span>
		<span className="px-4"> 30&deg; </span>
		 </h3>
		 <h4 className="py-2">Slow rain </h4>
		</div>
		</div>

		);
}
export default Weather;