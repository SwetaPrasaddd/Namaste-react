import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js";

// const apiData=fetch("https://random-data-api.com/api/v2/users").then((data)=>{
//     return (data.json()).then((d)=>console.log(d));

// })
// console.log(apiData);

const Footer = () => {
    return (
        <div>

        </div>
    )
}
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
        <Footer />
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);