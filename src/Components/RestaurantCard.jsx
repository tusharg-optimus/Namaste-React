import { RestaurantCardImage_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating} = resData?.info;
    return (
        <div className="restaurant-card">
            <img 
                className="restaurant-logo" 
                src={RestaurantCardImage_URL}
                alt="restaurant-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
};

export default RestaurantCard;