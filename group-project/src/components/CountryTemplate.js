import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FestivalContainer from "./FestivalBar";

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
				<CountrySidebar countryintro={this.countryIntroduction} />
				{/* <FestivalContainer /> */}
				<Footer />
			</section>
		);
	}
}

export default CountryTemplate;
