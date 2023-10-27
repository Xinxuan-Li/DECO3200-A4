// This file construct each eating habit cards
import React, { Component } from 'react';

class FlipCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            property1: props.property1 || 'front'
        };

        this.backText = props.backText;
        this.frontText = props.frontText ;
    }

    dispatch(action) {
        if (this.state.property1 === "front") {
            if (action === "mouse_enter") {
                this.setState({ property1: "hover" });
            }
        } else if (this.state.property1 === "hover") {
            if (action === "mouse_leave") {
                this.setState({ property1: "front" });
            } else if (action === "click") {
                this.setState({ property1: "mid-1" });
            }
        }
    }

    render() {
        return (
            <div
                className={`flip-card ${this.state.property1} ${this.props.className}`}
                onMouseEnter={() => this.dispatch("mouse_enter")}
                onMouseLeave={() => this.dispatch("mouse_leave")}
                onClick={() => this.dispatch("click")}
            >
                <div className="card">
                    {this.state.property1 === "front" && (
                        <>
                            <div className="text">
                                <div className="cat">
                                    Table
                                    <br />
                                    Manner
                                </div>
                            </div>
                            <p className="content">{this.frontText}</p>
                        </>
                    )}

                    {["back", "hover", "mid-1", "mid-2"].includes(this.state.property1) && (
                        <div className="overlap-group">
                            {["back", "mid-1", "mid-2"].includes(this.state.property1) && <div className="bkg" />}
                            {["mid-1", "mid-2"].includes(this.state.property1) && (
                                <>
                                    <div className="div">
                                        <p className="text-wrapper">{this.frontText}</p>
                                        <div className="want-to-know-why">
                                            Want to know
                                            <br />
                                            why?
                                        </div>
                                    </div>
                                    <img className="vector" alt="Vector" src="/img/vector.svg" />
                                </>
                            )}
                            {["back", "hover"].includes(this.state.property1) && (
                                <div className="text-2">
                                    <div className="content-2">
                                        {this.state.property1 === "hover" && <p className="p">{this.frontText}</p>}
                                        {this.state.property1 === "back" && <p className="p">{this.backText}</p>}
                                    </div>
                                    {this.state.property1 === "hover" && (
                                        <div className="want-to-know-why">
                                            Want to know
                                            <br />
                                            why?
                                        </div>
                                    )}
                                </div>
                            )}
                            {this.state.property1 === "hover" && <img className="img" alt="Vector" src="/img/vector-4.svg" />}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default FlipCard;
