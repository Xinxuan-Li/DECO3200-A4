// Explore a random country and Discover via world map card in the landing page

function MapCard({ onClick, image, icon, text, description }) {
    return (
        <div className="map-card-container" onClick={onClick}>
            <img className="map-card-img" src={image} alt="map card" />
            <div className="button-description-container">
                <p className="button-description">{description}</p>
            </div>
            <div className="map-card-button">
                <img className="map-card-icon" src={icon} alt="map card icon" />
                <p className="button-text">{text}</p>
                <img
                    className="map-card-arrow"
                    src="./img/icon/button-arrow.svg"
                    alt="map card arrow"
                />
            </div>
        </div>
    );
}

export default MapCard;
