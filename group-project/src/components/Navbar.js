import { Component } from "react";

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar">
				<div className="logo" onClick={this.props.onLogoClick}>FOODTOUR</div>
				<button onClick={this.props.onWorldMapClick}>Countries</button>
				<button onClick={this.props.onEventClick}>Events in Sydney</button>
				<button onClick={this.props.onHelpClick}>Help</button>
                <button onClick={this.props.onAboutClick}>About</button>
			</nav>
		);
	}
}

export default Navbar;
