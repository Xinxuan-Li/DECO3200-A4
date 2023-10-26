import { Component } from "react";

class EventCard extends Component {
	constructor(props, event) {
		super(props);
		this.event = event;
	}

	render() {
		return (
			<div className="event-card-container">
				<img className="event-img" src={this.event["img-path"]} />
				<p id="event-title">{this.event["event-title"]}</p>
				<p id="event-time">{this.event["event-time"]}</p>
				<p id="event-location">{this.event["event-location"]}</p>
			</div>
		);
	}
}

export default EventCard;
