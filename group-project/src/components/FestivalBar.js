// This file constructs festival bars (tabs)
// date, festival name, festival dishes, festival picture,

import { Component } from "react";
import FestivalDishCard from "./FestivalDishCard";

class FestivalBar extends Component {
	constructor(props) {
		super(props);
		// this.festival = festival;
	}

	render() {
		return (
			<div className="festival-container">
				<div className="festival-bar-visibel">
					<div id="date-title">
						{
							(this.props.festival.festivalMonth,
							this.props.festival.festivalDate)
						}
					</div>
					<h2 id="festival-name">
						{this.props.festival.festivalName}
					</h2>
					<img
						src={this.props.festival.festivalImage}
						id="festival-img"
						alt="festival-image"
					/>
				</div>
				<div className="expanded-content-container">
					<div className="f-dish-cards-container">
						{/* pass in dish information and create JSX accoringly */}
						{this.props.festival.festivalDishes?.map((dish) => (
							<FestivalDishCard
								className="festival-dish-card"
								dish={dish}
							/>
						))}
					</div>

					<div className="festival-description-container">
						<h2>Description: </h2>
						<p id="festival-description">
							{this.props.festival.festivalDescription}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default FestivalBar;
