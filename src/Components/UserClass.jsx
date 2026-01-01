import React from "react";


// Class Based Component
class UserClass extends React.Component {

    constructor(props) {
         super(props);

         // Local State variable for Class Component
         this.state = {
            count: 0,
            userInfo: {
                id: "Dummy Id",
                name: "Dummy Name",
                location: "Dummy Location",
                login: "Dummy Login",
                avatar_url: "Dummy Avatar URL"
            }
         };

         console.log(this.props.name + "Child - Constructor");
    }

    async componentDidMount() {
        console.log(this.props.name + "Child - Component Did Mount");

        const data = await fetch("https://api.github.com/users/tusharg-optimus");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json
        });
    }

    render() {
        console.log(this.props.name + "Child - Render");
        const {name, location, login, id, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="Avatar" />
                <h1>Login: {login}</h1>
                <h2>Id: {id}</h2>
                <h3>Age: 25</h3>
                <h3>Count: {this.state.count}</h3>
            </div>
        );
    }
}

export default UserClass;