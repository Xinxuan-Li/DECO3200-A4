import FestivalCard from "./FestivalCard";

function FestivalCardsContainer({ festivals }) {
    return (
        <div className="page-body-container-festival">
            <div className="section-title">Festivals</div>
            <div className="cards-container">
                {festivals.map((festival) => (
                    <FestivalCard
                        key={festival.festivalName}
                        festival={festival}
                    />
                ))}
            </div>
        </div>
    );
}

export default FestivalCardsContainer;
