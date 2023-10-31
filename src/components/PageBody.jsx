import DishCardsContainer from "./DishCardsContainer";
import HabitCardsContainer from "./HabitCardsContainer";
import FestivalCardsContainer from "./FestivalCardsContainer";
import EventCardsContainer from "./EventCardsContainer";
import BodySidebar from "./BodySidebar";
import React from "react";

function PageBody({ country, isInCountryPage }) {
    const [currentSection, setCurrentSection] = React.useState(["dishes", null]);

    function handleDishButtonClick() {
        setCurrentSection(["dishes", null]);
    }

    function handleDishCardClick(dish) {
        setCurrentSection(["dishes", dish])
    }

    function handleHabitButtonClick() {
        setCurrentSection(["habits", null]);
    }

    function handleFestivalButtonClick() {
        setCurrentSection(["festivals", null]);
    }

    React.useEffect(() => {
        setCurrentSection(["dishes", null]);
    }, [country]);

    function renderSection() {
        let contentSectionElement;
        // render different content based on the button clicked. 
        switch (currentSection[0]) {
            case "dishes":
                contentSectionElement = <DishCardsContainer currentDish={currentSection[1]} onDishCardClick={handleDishCardClick} onBackButtonClick={handleDishButtonClick} dishes={country.traditionalDishes}/>;
                break;
            case "habits":
                contentSectionElement = <HabitCardsContainer habits={country.eatingHabits} />;
                break;
            case "festivals":
                contentSectionElement = <FestivalCardsContainer festivals={country.festivals} />;
        }
        return contentSectionElement;
    }

    // If this is a country page or not
    const pageBodyElement = isInCountryPage ? (
        <div className="main-contents-country">
            <BodySidebar
                country={country}
                isInCountryPage={isInCountryPage}
                onDishButtonClick={handleDishButtonClick}
                onHabitButtonClick={handleHabitButtonClick}
                onFestivalButtonClick={handleFestivalButtonClick}
            ></BodySidebar>
            {/* render the content based on the button clicked, this is in the above function */}
            {renderSection()}
        </div>
        
    ) : (
        // if it is not then render the event page content
        <div className="main-contents-country">
            <BodySidebar isInCountryPage={isInCountryPage}></BodySidebar>
            <EventCardsContainer />
        </div>
    );

    return pageBodyElement;
}

export default PageBody;