// This file contains dishes card within each country, under traditional dishes tab.


import React, { Component } from "react";

class DishCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property1: this.props.property1 || "default",
        };
        this.dish = {
            dishName: this.props.dishName,
            dishNameCountry: this.props.dishNameCountry,
            dishIntro: this.props.dishIntro,
            cardType: this.props.cardType,
        };
    }

    handleMouseEnter() {
        this.setState({ property1: "hover" });
    }

    handleMouseLeave() {
        this.setState({ property1: "default" });
    }

    render() {
        return (
            <div
                className={`dish-card ${this.state.property1}`}
                onMouseLeave={this.handleMouseLeave.bind(this)}
                onMouseEnter={this.handleMouseEnter.bind(this)}
            >
                <div className="overlap-group">
                    {this.state.property1 === "hover" && (
                        <>
                            <p className="card-name">
                                <span className="text-wrapper">
                                    {this.dish.dishName}
                                    <br />
                                </span>
                            
                                {this.dish.dishNameCountry.split("\n").map((line, index) => (
                                    <span key={index} className={index === 0 ? "dish-name-line" : "text-wrapper"}>
                                        {line}
                                    </span>
                                ))}
                            </p>
                            <div className="card-text">Learn More &gt;</div>
                        </>
                    )}
                </div>
                {this.state.property1 === "default" && (
                    <>
                        <div className="overlap">
                            <div className="card-name-2">{this.dish.dishName}</div>
                            <img
                                className="card-deco-line"
                                alt="Card deco line"
                                src="https://c..svg"
                            />
                            <img className="card-img" alt="Card img" src="https://c..png" />
                            <p className="card-intro">{this.dish.dishIntro}</p>
                        </div>
                        <div className="card-text-2">{this.dish.cardType}</div>
                        <div className="card-indication">&gt;</div>
                    </>
                )}
                {this.state.property1 === "hover" && (
                    <>
                        <img className="img" alt="Card img" src="https://x.png" />
                        <img
                            className="card-deco-line-2"
                            alt="Card deco line"
                            src="https://2.svg"
                        />
                    </>
                )}
            </div>
        );
    }
}

export default DishCard;
