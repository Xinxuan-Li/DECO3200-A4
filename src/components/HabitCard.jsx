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
                    <div className=" habit-name">{habit.eatingHabitName}
                    </div>
                    <div className=" habit-description">
                        {habit.eatingHabitDescription}
                    </div>
                    <div className="learn-more-btn" >Want to know why?</div>
                    <div className="arrow-icon">
                    </div>
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
