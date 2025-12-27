import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";

// const restList = [resObj, resObj, resObj, resObj, resObj, resObj, resObj, resObj
// ];

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