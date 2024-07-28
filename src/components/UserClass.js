import React, { useEffect } from "react";
import { useInRouterContext } from "react-router-dom";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);

        this.state = {
            userInfo: {
                login: "Dummy",
                id: 0,
                // avatar_url: "https://dummy-photo.com"
            },
        };
        // console.log(this.props.name + "child constructor");
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child component did mount");
        //API call's
        const data = await fetch("https://api.github.com/users/swetaprasaddd");
        const json = await data.json();
        // console.log(json);
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount() {
        //just before our component is unmounting
        console.log("component will unmount");
    }

    render() {
        const { login, id, avatar_url } = this.state.userInfo;
        // const { count } = this.state;
        // console.log(this.props.name + "Child render");
        return (
            <div className="user-card">
                <img src={"avatar_url"}></img>
                <h2>Name: {login} </h2>
                <h3>Id: {id}</h3>
                {/* <h4>Contact: {contact}</h4> */}
            </div>
        );
    }
}

export default UserClass;