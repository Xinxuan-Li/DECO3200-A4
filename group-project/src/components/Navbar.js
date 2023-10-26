import { Component } from "react";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<div className="logo">FOODTOUR</div>
				<button>Countries</button>
				<button>Events in Sydney</button>
				<button>About Us</button>
			</nav>
		);
	}
}

export default Navbar;








{/*import { Component } from "react";

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar">
				<div className="logo">FOODTOUR</div>
				<button>Countries</button>
				<button>Events in Sydney</button>
				<button>About Us</button>
			</nav>
		);
	}
}

export default Navbar;*/}
//unecessary porps use in the commented one, (warning)