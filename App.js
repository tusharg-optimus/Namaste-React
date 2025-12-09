import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Basic Layout of Food Ordering App
 * 
 * Header
 *  - Logo
 *  - Nav Items (Right side)
 *      - Home
 *      - About
 *     - Contact
 *    - Cart
 * Body
 *  - Search Bar
 *   - Restaurant List
 *      - Restaurant Card (many cards)
 *          - Image
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLrcIIhbyqq4cao77BYZwQM7Wvkyitbroug&s" 
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating} = resData?.info;
    return (
        <div className="restaurant-card">
            <img 
                className="restaurant-logo" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9iNW31AM2VQJk17ZdzAH7RFtQo4_Q2QP_Q&s" 
                alt="restaurant-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="rest-container">
                <RestaurantCard resData = {resObj}/>
                <RestaurantCard resData = {resObj}/>

                {/* {restList.map((restaurant) => ( 
                    <RestaurantCard resData = {restaurant}/> 
                // ))} */} { /* Looping through the restList array to display restaurant cards */}
            </div>
        </div>
    );
}

// const restList = [resObj, resObj, resObj, resObj, resObj, resObj, resObj, resObj
// ];


const resObj = {
    info: {
id: "253773",
name: "McDonald's",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/e543a89e-4adc-4aec-a1c5-1170e099d257_253773.JPG",
locality: "Sector 10",
areaName: "Rohini",
costForTwo: "₹400 for two",
cuisines: [
"American"
],
avgRating: 4.4,
parentId: "630",
avgRatingString: "4.4",
totalRatingsString: "7.7K+",
sla: {
deliveryTime: 30,
lastMileTravel: 3,
serviceability: "SERVICEABLE",
slaString: "25-30 mins",
lastMileTravelString: "3.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2025-12-09 01:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹117"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
};

const AppLayout = () => {
    return (
        <div className="app">
            {Header()} {/* Calling the Header component inside AppLayout component */   }
            {Body()}   {/* Calling the Body component inside AppLayout component */     }
        </div>
    );
};




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); // rendering the functional component





//JSX - JavaScript XML => Babel converts JSX to React.createElement() calls
// React Element
const heading = (
    <h1 id="heading">
        Namaste React
    </h1>
); // JSX element or React element

const Title = () => (
 <h1>I'm calling from Title</h1>
);


// React Functional Component

// Component Composition
const HeadingComponent = () => (
    <div id="container">
        {heading} {/* calling or rendering heading react element inside HeadingComponent */}
        <Title /> {/* calling or rendering Title component inside HeadingComponent */}
        {Title()}
        <h1 id="heading"> Namste react from functional Component</h1>
    </div>
);



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>); // rendering the functional component
 




// const heading = React.createElement(
//     "h1" , 
//     {id : "heading", className : "header"} , 
//     "Hey! React I'm coming"
// ); // creating an h1 element using React
// const root = ReactDOM.createRoot(document.getElementById("root")); // getting the root div using ReactDOM
// root.render(heading); // rendering the heading element to the root div
        
        
// const heading2 = React.createElement(
//     "h2", 
//     {id: "heading2"} , 
//     "This is second heading using React"
// );
// const root2 = ReactDOM.createRoot(document.getElementById("root-final"));
// root2.render(heading2);


// Nested React Elements
// const parent = React.createElement( 
//     "div", 
//     {id: "parent"}, 
//     React.createElement(
//         "div",
//         {id:"child"}, 
//         React.createElement(
//             "h1", 
//             {}, 
//             "I'm from H1 TAG"
//         )
//     )
// );

// const root3 = ReactDOM.createRoot(document.getElementById("root2"));

// root3.render(parent);


// Sibling React Elements
// const parent2 = React.createElement(
//     "div",
//     {id:"parent2"}, 
//     React.createElement(
//         "div",
//         {id:"child2"}, 
//         [React.createElement("h1", {}, "I'm from H1 testing of siblings") , 
//         React.createElement("h2", {}, "I'm from H2 testing of siblings"),
//     ])
// );

// const root4 = ReactDOM.createRoot(document.getElementById("root4"));    
// root4.render(parent2);