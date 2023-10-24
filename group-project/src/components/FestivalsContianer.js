import { Component } from "react";
import FestivalBar from "./FestivalBar";
import CountrySidebar from "./CountrySidebar";
// this file contains the following components
// navbar, country title bar, country intro side bar, festival bar, festival dish card

class FestivalContainer extends Component {
	countryName = "";
	countryFlagImage = "";
	countryPatternImage = "";
	countryIntroduction = "";
	traditionalDishes = [];
	festivals = [];
	data = {};

	constructor(props) {
		super(props);
		this.data = this.props.data;
	}

	render() {
		this.countryName = this.data["countryName"];
		this.countryFlagImage = this.data["countryFlagImage"];
		this.countryPatternImage = this.data["countryPatternImage"];
		this.countryIntroduction = this.data["countryIntroduction"];
		this.traditionalDishes = this.data["traditionalDishes"];
		this.festivals = this.data["festivals"];

		return (
			<div className="festival-bar-container">
				{this.festivals.map((festival) => (
					<FestivalBar festival={festival} />
				))}
			</div>
		);
	}
}

export default FestivalContainer;
