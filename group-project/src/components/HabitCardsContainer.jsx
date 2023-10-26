import HabitCard from "./HabitCard";

function HabitCardsContainer({ habits }) {
    return (
        <section className="page-body-container">
            <div className="section-title">Eating Habits & Table Manners</div>
            <div className="cards-container">
                {habits.map((habit) => (
                    <HabitCard
                        key={habit.eatingHabitName}
                        habit={habit}
                    />
                ))}
            </div>
        </section>
    );
}

export default HabitCardsContainer;
