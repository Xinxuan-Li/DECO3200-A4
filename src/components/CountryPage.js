import Footer from "./Footer";
import PageTitle from "./PageTitle";
import PageBody from "./PageBody";
import "../css/countrytemplate.css";

function CountryPage({ country, onWorldMapClick, onRandomCountryClick }) {
	return (
		<div className="country-page">
			<PageTitle country={country} isInCountryPage={true} />
			<PageBody country={country} isInCountryPage={true} />
			<Footer
				onWorldMapClick={onWorldMapClick}
				onRandomCountryClick={onRandomCountryClick}
				isInCountryPage={true}
			/>
		</div>
	);
}

export default CountryPage;
