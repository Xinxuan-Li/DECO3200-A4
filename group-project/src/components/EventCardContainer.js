import { Component } from "react";

class EventCardContainer extends Component {
	constructor(props, eventList) {
		super(props);
		this.eventList = eventList;
	}

	render() {
		return <div className="event-cards-container"></div>;
	}
}

export default EventCardContainer;
