import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1" , 
    {id : "heading", className : "header"} , 
    "Hey! React I'm coming"
); // creating an h1 element using React
const root = ReactDOM.createRoot(document.getElementById("root")); // getting the root div using ReactDOM
root.render(heading); // rendering the heading element to the root div
        
        
const heading2 = React.createElement(
    "h2", 
    {id: "heading2"} , 
    "This is second heading using React"
);
const root2 = ReactDOM.createRoot(document.getElementById("root-final"));
root2.render(heading2);


// Nested React Elements
const parent = React.createElement( 
    "div", 
    {id: "parent"}, 
    React.createElement(
        "div",
        {id:"child"}, 
        React.createElement(
            "h1", 
            {}, 
            "I'm from H1 TAG"
        )
    )
);

const root3 = ReactDOM.createRoot(document.getElementById("root2"));

root3.render(parent);


// Sibling React Elements
const parent2 = React.createElement(
    "div",
    {id:"parent2"}, 
    React.createElement(
        "div",
        {id:"child2"}, 
        [React.createElement("h1", {}, "I'm from H1 testing of siblings") , 
        React.createElement("h2", {}, "I'm from H2 testing of siblings"),
    ])
);

const root4 = ReactDOM.createRoot(document.getElementById("root4"));    
root4.render(parent2);