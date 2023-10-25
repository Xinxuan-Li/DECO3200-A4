// This file contains:
// 1. Introduction to the country
// 2. Three buttons for each each feature, e.g. eating habits, tradtitional dishes and festivals

import { Component } from "react";

class CountrySidebar extends Component {
	render() {
		return (
			<section className="sideBar">
				<div className="countryIntro">{this.props.countryintro}</div>
				<div className="side-bar-btn-wrapper">
					<div id="tradtional-dish-btn">Traditional Dishes</div>
				</div>
				<div className="side-bar-btn-wrapper">
					<div id="eating-habit-btn">Eating Habits</div>
				</div>
				<div className="side-bar-btn-wrapper">
					<div id="festival-btn">Festivals</div>
				</div>
			</section>
		);
	}
}

export default CountrySidebar;
