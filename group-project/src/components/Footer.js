import { Component } from "react";

class Footer extends Component {
	backToMap() {}

	exploreNext() {}

	render() {
		return (
			<footer className="footer">
				<button
					onClick={this.props.onWorldMapClick}
					className="back-to-map-btn"
				></button>
				<button
					onClick={this.props.onRandomCountryClick}
					className="explore-next-country-btn"
				></button>
			</footer>
		);
	}
}

export default Footer;
