import Footer from "./Footer";
import "../css/countrytemplate.css";

function EmptyCountryPage({ onWorldMapClick, onRandomCountryClick }) {
    return (
        <div className="empty-page">
            <div className="empty-text-container">
                <h1>
                    Sorry, the country you visit is currently unavailable.{" "}
                    <br />
                    <br />
                    Available countries:{" "}
                    <strong>
                        China, France, India, Italy, Japan, Lebanon, Malaysia,
                        Mexico, Russia, Korea, Thailand, Turkey, and Vietnam
                    </strong>
                    .<br />
                    <br />
                    Stay tuned for more updates!
                    <br />
                    <br />
                    Explore available countries using the buttons below.
                </h1>
            </div>
            <Footer
                onWorldMapClick={onWorldMapClick}
                onRandomCountryClick={onRandomCountryClick}
                isInCountryPage={true}
            />
        </div>
    );
}

export default EmptyCountryPage;
