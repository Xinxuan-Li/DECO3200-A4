import { Component } from "react";
import FestivalBar from "./FestivalBar";
// this file contains the following components
// navbar, country title bar, country intro side bar, festival bar, festival dish card

class FestivalContainer extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props.festivals);
	}

	render() {
		return (
			<div className="festival-bar-container">
				{this.props.festivals.map(
					(festival) => (
						<FestivalBar
							key={festival.festivalName}
							festival={festival}
						/>
					)
					// console.log(festival)
				)}
			</div>
		);
	}
}

export default FestivalContainer;
