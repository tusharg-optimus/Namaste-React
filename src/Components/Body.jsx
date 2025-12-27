import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resObj from "../utils/mockData.js";
import Shimmer from "./Shimmer";


const Body = () => { 

    // Local State variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // Initial value is an empty array

// useEffect hook to make API calls after the body renders then useEffect will call the API
useEffect(() => {
    // API Call
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7354495&lng=77.117477&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


};


// Conditional Rendering
if (listOfRestaurants.length === 0) {
    return <Shimmer />;
}
    // Simple JS variable 

    // let listOfRestaurants = [
    //     {
    //         info: {
    //             id: "12345",
    //             name: "Burger King",
    //             cuisines: ["Burgers", "American"],
    //             avgRating: "4.2",
    //         }
    //     },
    //     {
    //         info: {
    //             id: "12346",
    //             name: "Dominos Pizza",
    //             cuisines: ["Burgers", "American"],
    //             avgRating: "3.8",
    //         }
    //     },
    //     {
    //         info: {
    //             id: "12347",
    //             name: "MCD",
    //             cuisines: ["Burgers", "American"],
    //             avgRating: "4.1",
    //         }
    //     }
    // ];

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.2);
                        setListOfRestaurants(filteredList);
                        console.log(filteredList);
                        }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="rest-container">
                {/* <RestaurantCard resData = {resObj}/>
                <RestaurantCard resData = {resObj}/> */}

                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
                ))} { /* Looping through the restList array to display restaurant cards */}
            </div>
        </div>
    );
};

export default Body;