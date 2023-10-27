// DishInfo.js
import PropTypes from "prop-types";
import React from "react";

export const DishInfo = ({
  dishName = "Dish name",
  className,
  ingredientsText = "Ingredients Text",
  descriptionText = "Description Text",
  storyText = "Story Text",
}) => {
  return (
    <div className={`dish-info ${className}`}>
      <div className="dish-img">
        <img className="img_left" alt="Img" src="https://1@2x.png" />
        <img className="img_center" alt="Img" src="https://c.x.png" />
        <img className="img_right" alt="Img" src="https://c.x.png" />
      </div>
      <div className="dish-name">{dishName}</div>
      <div className="frame">
        <div className="div">
          <div className="text-wrapper">Ingredients:</div>
          <div className="p">{ingredientsText}</div>
        </div>
        <div className="div">
          <div className="text-wrapper">Description:</div>
          <div className="p">{descriptionText}</div>
        </div>
        <div className="div">
          <div className="text-wrapper">Story:</div>
          <div className="p">{storyText}</div>
        </div>
      </div>
    </div>
  );
};

DishInfo.propTypes = {
  dishName: PropTypes.string,
  ingredientsText: PropTypes.node,
  descriptionText: PropTypes.node,
  storyText: PropTypes.node,
};

// DishInfoScreen.js
export const DishInfoScreen = () => {
  return (
    <DishInfo
      className="dish-info-instance"
      dishName="Dish name"
      ingredientsText="List of ingredients for the dish."
      descriptionText="Peking Duck is a famous dish from Beijing that has been prepared since the imperial era. The dish is prized for its thin, crispy skin, with authentic versions of the dish serving mostly the skin and little meat, sliced in front of the diners by the cook."
      storyText={
        <>
          Peking Duck, also known as Beijing Duck, has its origins in Imperial China. The dish&#39;s early renditions
          were served at the imperial court during the Yuan Dynasty (1271-1368). By the time of the Ming Dynasty
          (1368-1644), it had become a favorite in Beijing among commoners. The Qing Dynasty (1644-1912) witnessed its
          popularity spread across the nation, with emperors like Qianlong frequently including it in grand feasts.
          <br />
          Two distinguished Beijing restaurants, Quanjude and Bianyifang, were instrumental in popularizing distinct
          styles of Peking Duck. Quanjude, founded in 1864, used an open oven and fruit tree wood for roasting, giving
          the duck a unique smoky aroma. Meanwhile, Bianyifang, which dates back to 1416, employed a closed oven
          technique.
          <br />
          This dish stands out for its meticulous preparation, embodying the Chinese culinary ethos of technique and
          presentation. It is roasted to achieve a balance of crispy skin and tender meat and is traditionally
          accompanied by pancakes, scallions, and sweet bean sauce.
        </>
      }
    />
  );
};
