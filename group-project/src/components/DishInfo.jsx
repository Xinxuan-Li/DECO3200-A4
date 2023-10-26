function DishInfo({ dish }) {
    return <>
        <div className="dish-image-container">
            <img src={dish.dishImages[0]} alt={dish.dishName} className="dish-image-in-dish-info" />
            <img src={dish.dishImages[1]} alt={dish.dishName} className="dish-image-in-dish-info" />
            <img src={dish.dishImages[2]} alt={dish.dishName} className="dish-image-in-dish-info" />
        </div>
        <h2 className="dish-name-in-dish-info">{dish.dishName}</h2>
        <div className="dish-text-container">
            <h3 className="dish-text-type">Ingredients:</h3>
            <p className="dish-text">{dish.dishIngredients}</p>
        </div>
        <div className="dish-text-container">
            <h3 className="dish-text-type">Description::</h3>
            <p className="dish-text">{dish.dishDescription}</p>
        </div>
        <div className="dish-text-container">
            <h3 className="dish-text-type">Story:</h3>
            <p className="dish-text">{dish.dishStory}</p>
        </div>
    </>;
}
export default DishInfo;
