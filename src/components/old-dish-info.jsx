import React, { Component } from "react";


class DishInfo extends Component {
    constructor(props) {
        super(props);
        this.dish = {
            dishName: this.props.dishName,
            dishImages: [this.props.imgLeft, this.props.imgCenter, this.props.imgRight], //ensure that JSON file has three images 
            dishIngredients: this.props.ingredientsText,
            dishDescription: this.props.descriptionText,
            dishStory: this.props.storyText
        };
    }

    render() {
        return (
            <div className={`dish-info ${this.props.className}`}>
                <div className="dish-img">
                    <img className="img_left" alt="Img" src={this.dish.dishImages[0]} />
                    <img className="img_center" alt="Img" src={this.dish.dishImages[1]} />
                    <img className="img_right" alt="Img" src={this.dish.dishImages[2]} />
                </div>
                <div className="dish-name">{this.dish.dishName}</div>
                <div className="frame">
                    <div className="div">
                        <div className="text-wrapper">Ingredients:</div>
                        <div className="p">{this.dish.dishIngredients}</div>
                    </div>
                    <div className="div">
                        <div className="text-wrapper">Description:</div>
                        <div className="p">{this.dish.dishDescription}</div>
                    </div>
                    <div className="div">
                        <div className="text-wrapper">Story:</div>
                        <div className="p">{this.dish.dishStory}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishInfo;



