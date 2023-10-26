import { Component } from "react";

class Footer extends Component {
	backToMap() {}

	exploreNext() {}

	render() {
		return (
			<section onClick={() => this.backToMap()} className="footer">
				<div className="back-to-map-btn">
					<div className="arrow-icon-left"></div>
					<img
						src="https://via.placeholder.com/72x72"
						alt="imagehere"
						className="back-to-map-img"
					/>
					<div className="back-to-map-text">Back to World Map</div>
				</div>
				<div className="explore-next-country-btn">
					<div className="arrow-icon-right"></div>
					<img
						src="https://via.placeholder.com/72x72"
						alt="imagehere"
						className="explore-next-img"
					/>
					<div className="explore-next-text">
						Explore Next Country
					</div>
				</div>
			</section>
		);
	}
}

export default Footer;
