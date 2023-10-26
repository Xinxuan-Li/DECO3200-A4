import React from "react";

function HabitCard({ habit }) {
    const [isFront, setIsFront] = React.useState(true);

    function toggle() {
        setIsFront(!isFront);
    }

    return (
        <div
            className="habit-card"
            onClick={toggle}
            style={{ border: "1px solid" }}
        >
            {isFront ? (
                <>
                    <h2 className="habit-name">{habit.eatingHabitName}</h2>
                    <p className="habit-description">
                        {habit.eatingHabitDescription}
                    </p>
                </>
            ) : (
                <>
                    <p className="habit-reason">{habit.eatingHabitReason}</p>
                </>
            )}
        </div>
    );
}

export default HabitCard;
