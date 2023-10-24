// This file contains:
// 1. Introduction to the country
// 2. Three buttons for each each feature, e.g. eating habits, tradtitional dishes and festivals

import { Component } from "react";

class CountrySidebar extends Component {
	render() {
		return (
			<section className="sideBar">
				<div className="countryIntro">{this.props.countryintro}</div>
				<div className="sideBarButtons">
					<button id="tradtional-dish-btn">Traditional Dishes</button>
					<button id="eating-habit-btn">Eating Habits</button>
					<button id="festival-btn">Festivals</button>
				</div>
			</section>
		);
	}
}

export default CountrySidebar;
