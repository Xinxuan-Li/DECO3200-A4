import React, { useState, useEffect } from 'react';
import '../css/eventcard.css';

function EventCard({ myLink }) {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    if (myLink) {
      fetch(`http://api.linkpreview.net/?key=b3fcaa5da6a9c8e048e0ab3324cb673e&q=${myLink}`)
        .then((response) => response.json())
        .then((data) => setEventData(data))
        .catch((error) => console.error(error));
    }
  }, [myLink]);

  if (!eventData) {
    return null; // You can also render a loading indicator here
  }

  return (
    <div className="a-event-card">
      <a href={eventData.url} target="_blank">
      <img id="event-img" src={eventData.image} alt={eventData.title} />
      <h3 className="event-title">{eventData.title}</h3>
      <p className="event-description">{eventData.description}  </p>
      </a>
    </div>
  );
}

export default EventCard;
