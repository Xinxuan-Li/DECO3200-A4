function PageTitle({ country, isInCountryPage }) {
    const PageTitleElement = isInCountryPage ? (
        <>
            <div className="country-flag-and-name-container">
                <img className="country-flag" src={country.countryFlagImage} />
                <h2 className="country-name">{country.countryName}</h2>
            </div>
            <div className="country-pattern-container">
                <img className="country-pattern" src={country.countryPatternImage} />
            </div>
        </>
    ) : (
        <>
            <div className="event-title-container">
                <img className="event-logo" src="./img/icon/event.png" alt="event icon"/>
                <h2 className="event-page-title">Food related Events in Sydney</h2>
            </div>
        </>
    );

    return <section className="page-title">{PageTitleElement}</section>;
}

export default PageTitle;
