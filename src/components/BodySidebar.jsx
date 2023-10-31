// import "../css/countrytemplate.css";

function BodySidebar({
    country,
    isInCountryPage,
    onDishButtonClick,
    onHabitButtonClick,
    onFestivalButtonClick,
}) {
    const eventDescription =
        "Introdunction to this countryLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ";

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
                        Eating Habits & Table Manners
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
