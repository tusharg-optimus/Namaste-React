import { useEffect } from "react";


const RestaurantMenu = () => {

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229");
        const json = await data.json();
        console.log(json);
    };

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