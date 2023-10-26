import Footer from "./Footer";
import PageTitle from "./PageTitle";
import PageBody from "./PageBody";

function EventPage({ onWorldMapClick, onRandomCountryClick }) {
    return (
        <div className="event-page">
            <PageTitle isInCountryPage={false} />
            <PageBody isInCountryPage={false} />
            <Footer
                onWorldMapClick={onWorldMapClick}
                onRandomCountryClick={onRandomCountryClick}
                isInCountryPage={false}
            />
        </div>
    );
}

export default EventPage;
