import { Component } from "react";

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar">
				<div className="logo">FOODTOUR</div>
				<ul>
					<li>Countries</li>
					<li>Events in Sydney</li>
					<li>About Us</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
