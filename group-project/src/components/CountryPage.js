import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FestivalContainer from "./FestivalBar";
import CountrySidebar from "./CountrySidebar";
import { DishCard } from "./DishCard";
import { DishInfo } from "./DishInfo";
import { FlipCard } from "./EatingHabitCard";

class CountryPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// const [data, setData] = useState(sdata);

		const countryObj = this.props.country;

		return (
			<section className="countryPage">
				<h1>{this.props.country.countryName}</h1>
				<CountrySidebar
					countryintro={this.props.country.countryIntroduction}
				/>

				{/* default info to show --> eating habits, when user press the button, set visibility of contents to 0 or 100 */}
				<FlipCard />
				{/* <FestivalContainer festivals={this.props.country.festivals} /> */}
				<DishCard />

				{/* <FestivalContainer /> */}
				<Footer
					onWorldMapClick={this.props.onWorldMapClick}
					onRandomCountryClick={this.props.onRandomCountryClick}
				/>
			</section>
		);
	}
}

export default CountryPage;
