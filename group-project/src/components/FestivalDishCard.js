// This file construct dish cards within each festival
// Information to be displayed includs dish name, meanings of each dish
// Dish is an JSON object

import { Component } from "react";

class FestivalDishCard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="festival-dish-per-card-container">
				<img
					src={this.props.dish.feitivalDishImage}
					id="festival-dish-img"
				/>
				<p id="festival-dish-name">
					{this.props.dish.feitivalDishName}
				</p>
				<p id="festival-dish-description">
					{this.props.dish.feitivalDishDescription}
				</p>
			</div>
		);
	}
}

export default FestivalDishCard;
