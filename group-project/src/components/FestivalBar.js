// This file constructs festival bars (tabs)
// date, festival name, festival dishes, festival picture,

import { Component } from "react";
import FestivalDishCard from "./FestivalDishCard";

class FestivalBar extends Component {
	constructor(props, festival) {
		super(props);
		this.festival = festival;
	}

	render() {
		return (
			<div className="festival-container">
				<div className="festival-bar-visibel">
					<div id="date-title">
						{
							(this.festival["festivalMonth"],
							this.festival["festivaldate"])
						}
					</div>
					<h2 id="festival-name">{festival["festivalName"]}</h2>
					<img
						src={this.festival["festivalImage"]}
						id="festival-img"
						alt="festival-image"
					/>
				</div>
				<div className="expanded-content-container">
					<div className="f-dish-cards-container">
						{/* pass in dish information and create JSX accoringly */}
						{this.festival["festivalDishes"].map((dish) => (
							<FestivalDishCard
								className="festival-dish-card"
								dish={dish}
							/>
						))}
					</div>

					<div className="festival-description-container">
						<h2>Description: </h2>
						<p id="festival-description">
							{this.festival["festivalDescription"]}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default FestivalBar;
