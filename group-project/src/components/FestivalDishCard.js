// This file construct dish cards within each festival
// Information to be displayed includs dish name, meanings of each dish
// Dish is an JSON object

import { Component } from "react";

class FestivalDishCard extends Component {
	constructor(props, dish) {
		super(props);
		this.dish = dish;
	}

	render() {
		return (
			<div className="festival-dish-per-card-container">
				<img
					src={this.dish["feitivalDishImage"]}
					id="festival-dish-img"
				/>
				<p id="festival-dish-name">{this.dish["feitivalDishName"]}</p>
				<p id="festival-dish-description">
					{this.dish["feitivalDishDescription"]}
				</p>
			</div>
		);
	}
}

export default FestivalDishCard;
