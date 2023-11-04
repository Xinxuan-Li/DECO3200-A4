import EventCard from "./EventCard";
import '../css/eventcard.css';

function EventCardsContainer() {
    return(<div className="event-cards-container">
        <EventCard myLink="https://whatson.cityofsydney.nsw.gov.au/events/chinatown-bites-and-culture-treasure-hunt-experience"/>
        <EventCard myLink="https://whatson.cityofsydney.nsw.gov.au/events/tea-ceremony-experience"/>
        <EventCard myLink="https://whatson.cityofsydney.nsw.gov.au/events/extraordinary-day-of-the-dead-party-with-herradura-tequila"/>
        <EventCard myLink="        https://whatson.cityofsydney.nsw.gov.au/events/the-forgotten-cask-7th-bday-party-x-patron"/>
    </div>);
}

export default EventCardsContainer;