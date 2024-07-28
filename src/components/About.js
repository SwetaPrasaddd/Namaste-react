import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// import {component} from "react";

// class About extends Component {
class About extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor")
    }

    componentDidMount() {
        // console.log("Parent component did mount");

    }

    render() {
        // console.log("Parents render");
        return (
            <div>
                <h1>About(class)</h1>
                <h2>This is Namaste Food Site</h2>
                <UserClass name={"first (class)"} location={"Bagdogra (class)"} contact={"Sweta@gmail.com (class)"} />
            </div>
        );
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste Food Site</h2>
//             <UserClass name={"Sweta (class)"} location={"Bagdogra (class)"} contact={"Sweta@gmail.com (class)"} />
//         </div>
//     );
// };

export default About;