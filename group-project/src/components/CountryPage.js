import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import FestivalContainer from "./FestivalBar";
import CountrySidebar from "./CountrySidebar";

class CountryPage extends Component {
	constructor(props, data) {
		super(props);
		this.data = data;
	}

	render() {
		// const [data, setData] = useState(sdata);

		return (
			<section className="countryPage">
				<CountrySidebar countryintro={this.countryIntroduction} />
				{/* <FestivalContainer /> */}
				<Footer />
			</section>
		);
	}
}

export default CountryPage;
