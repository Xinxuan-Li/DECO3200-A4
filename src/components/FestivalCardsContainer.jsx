import FestivalCard from "./FestivalCard";

function FestivalCardsContainer({ festivals }) {
    return (
        <section className="page-body-container">
            <div className="section-title">Festivals</div>
            <div className="cards-container">
                {festivals.map((festival) => (
                    <FestivalCard
                        key={festival.festivalName}
                        festival={festival}
                    />
                ))}
            </div>
        </section>
    );
}

export default FestivalCardsContainer;
