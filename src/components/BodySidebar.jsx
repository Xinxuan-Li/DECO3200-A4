// import "../css/countrytemplate.css";

function BodySidebar({
    country,
    isInCountryPage,
    onDishButtonClick,
    onHabitButtonClick,
    onFestivalButtonClick,
}) {
    const eventDescription =
        "Sydney's food events serve as a passport to the world's kitchens, presenting a rich tapestry of traditional cuisines. Attendees are invited to embark on a culinary voyage, sampling authentic dishes that tell the stories of their origins. From the hearty, spice-infused aromas of Chinatown's street markets to the ceremonial elegance of tea traditions, each offering is a chapter from a different country's recipe book. These events are gateways to global cultures, meticulously prepared by those who hold the heritage of their homeland's flavors. Delight in the traditional tastes that have traveled across oceans to find a home in the heart of Sydney.";

    return (
        <section className="sideBar">
            <p className="sideBar-text">
                {isInCountryPage
                    ? country.countryIntroduction
                    : eventDescription}
            </p>
            {/* if it is a country page, return the buttons, if it is not it is an event page, return nothing */}
            {isInCountryPage ? (
                <div className="country-sidebar-button-container">
                    <button
                        className="country-sidebar-button"
                        onClick={onDishButtonClick}
                    >
                        <div className="fill-button"></div>
                        Traditional Dishes
                    </button>
                    <button
                        className="country-sidebar-button"
                        onClick={onHabitButtonClick}
                    >
                        <div className="fill-button"></div>
                        Eating Habits
                    </button>
                    <button
                        className="country-sidebar-button"
                        onClick={onFestivalButtonClick}
                    >
                        <div className="fill-button"></div>
                        Festival
                    </button>
                </div>
            ) : (
                // it is event, return nothing
                <></>
            )}
        </section>
    );
}

export default BodySidebar;
