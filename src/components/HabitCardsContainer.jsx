import HabitCard from "./HabitCard";

function HabitCardsContainer({ habits }) {
    return (
        <div className="page-body-container-habits">
            <div className="section-title">Eating Habits & Table Manners</div>
            <div className="habits-cards-container">
                {habits.map((habit) => (
                    <HabitCard
                        key={habit.eatingHabitName}
                        habit={habit}
                    />
                ))}
            </div>
        </div>
    );
}

export default HabitCardsContainer;
