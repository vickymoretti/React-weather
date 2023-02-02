import React from "react";
import "./Weather.css";

export default function Weather() {
	return (
		<span className="Weather">
			<form className="input-form">
				<input type="text" placeholder=" Search new city" id="search-city" />
				<button className="searchButton">Search</button>
				<button className="currentLocationButton">Current Location</button>
			</form>
			<div className="card card-body background">
				<div className="row">
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body large-card">
								<h1 className="city"> Waterford, ireland</h1>
								<i className="fa-solid fa-cloud-sun-rain big-emoji"></i>
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="card">
							<div className="card-body large-card">
								<h2 className="day">SUNDAY</h2>

								<p className="date"> October 30</p>
								<h2 className="temperature" id="temperature">
									17
								</h2>
								<span className="units">
									<a href="/" id="celsius-link">
										°C
									</a>{" "}
									|
									<a href="/" id="fahrenheit-link">
										°F
									</a>
								</span>
								<ul>
									<li>
										<span id="description"> Clear sky</span>
									</li>
									<li>
										{" "}
										Humidity: <span id="humidity">7</span>%{" "}
									</li>
									<li>
										{" "}
										Feels like: <span id="feels-like">8</span>°C{" "}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="row row-cols-1 row-cols-md-6 g-5 colums">
					<div className="col">
						<div className="card">
							<div className="card-body2">
								<h5 className="card-title"> MON </h5>
								<i className="fa-solid fa-sun emoji"></i>
								<p className="card-text"> 17° | 13° </p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<div className="card-body2">
								<h5 className="card-title">TUE </h5>
								<i className="fa-solid fa-cloud emoji"></i>
								<p className="card-text"> 14° | 12°</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<div className="card-body2">
								<h5 className="card-title">WED </h5>
								<i className="fa-solid fa-cloud-showers-heavy emoji"></i>
								<p className="card-text"> 11° | 9° </p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<div className="card-body2">
								<h5 className="card-title">THU </h5>
								<i className="fa-solid fa-cloud-sun-rain emoji"></i>
								<p className="card-text">13° | 9° </p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<div className="card-body2">
								<h5 className="card-title">FRI </h5>
								<i className="fa-solid fa-cloud-sun-rain emoji"></i>
								<p className="card-text">15° | 10°</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<div className="card-body2">
								<h5 className="card-title">SAT </h5>
								<i className="fa-solid fa-sun emoji"></i>
								<p className="card-text">13° | 8° </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</span>
	);
}
