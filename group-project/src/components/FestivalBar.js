// This file constructs festival bars (tabs)
// date, festival name, festival dishes, festival picture,

import { Component } from "react";
import FestivalDishCard from "./FestivalDishCard";

class FestivalBar extends Component {
    constructor(props) {
        super(props);
        this.festival = props.festival;
    }

    render() {
        return (
            <section className="toggleBar">
                <div className="visible-content-container">
                    <div id="date-title">
                        {this.festival["festivalMonth"]}{" "}
                        {this.festival["festivalDate"]}
                    </div>
                    <h2 id="festival-name">{this.festival["festivalName"]}</h2>
                    <img
                        src={this.festival["festivalImage"]}
                        id="festival-img"
                        alt="festival-image"
                    />
                    <div className="expanded-content-container">
                        {/* pass in dish information and create JSX accordingly */}
                        {this.festival["festivalDishes"].map((dish, index) => (
                            <FestivalDishCard
                                key={index}
                                className="festival-dish-card"
                                dish={dish}
                            />
                        ))}
                        <div className="festival-description-container">
                            <h2>Description: </h2>
                            <p id="festival-description">
                                {this.festival["festivalDescription"]}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FestivalBar;
