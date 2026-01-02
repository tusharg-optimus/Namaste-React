import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";


const RestaurantMenu = () => {

    const { resId } = useParams();

    // Creating a custom hook - To maintian the Single Responsibility Principle
    const resInfo = useRestaurantMenu(resId);

    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Dish 2</li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;