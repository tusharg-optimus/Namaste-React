import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {

    constructor(props) {
        super(props);

        console.log("Parent - Constructor");
    }

    componentDidMount() {
        console.log("Parent - Component Did Mount");
    }

    render() {

        console.log("Parent - Render");
        return (
            <div>
                <h1>About Us Page</h1>
                <p>This is Namaste React Live Course Chapter 07 - Finding the Path</p>
                {/* <User/> */}
                <UserClass name={"First Class Component"} location={"Delhi"}/>
                <UserClass name={"Second Class Component"} location={"Delhi"}/>
            </div>
    );
    }
}


export default About;