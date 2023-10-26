import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FestivalContainer from "./FestivalBar";
import { DishInfo } from "./DishInfo";
import { DishCard } from "./DishCard";
import { FlipCard } from "./EatingHabitCard";
import CountrySidebar from "./CountrySidebar";

class CountryTemplate extends Component {
	constructor(props, data) {
		super(props);
		this.data = data;
	}

	render() {
		// const [data, setData] = useState(sdata);

		return (
			<section className="countryPage">
				<Navbar />
				<CountrySidebar
					countryintro={this.data["countryIntroduction"]}
				/>
				{/* default info to show --> eating habits, when user press the button, set visibility of contents to 0 or 100 */}
				<FlipCard />
				<FestivalContainer data={this.data["festivals"]} />
				<DishCard />
				<Footer />
			</section>
		);
	}
}

export default CountryTemplate;
