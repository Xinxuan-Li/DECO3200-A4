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
                <h1>{this.props.country.countryName}</h1>
                <CountrySidebar countryintro={this.countryIntroduction} />
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
