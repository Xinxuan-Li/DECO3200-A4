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
            {isInCountryPage ? (
                <div className="country-sidebar-button-container">
                    <button
                        className="country-sidebar-button"
                        onClick={onDishButtonClick}
                    >
                        Traditional Dishes
                    </button>
                    <button
                        className="country-sidebar-button"
                        onClick={onHabitButtonClick}
                    >
                        Eating Habits & Table Manners
                    </button>
                    <button
                        className="country-sidebar-button"
                        onClick={onFestivalButtonClick}
                    >
                        Festival
                    </button>
                </div>
            ) : (
                <></>
            )}
        </section>
    );
}

export default BodySidebar;
