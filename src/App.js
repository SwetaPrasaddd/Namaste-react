import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "../src/components/About.js";
import Contact from "../src/components/Contact.js";
import Error from "../src/components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantCard from "./components/RestaurantCard.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/* if my path is /  */}
            {/* <Body /> */}
            {/* if my path is /about */}
            {/* <About /> */}
            {/* if my path is /contact */}
            {/* <Contact /> */}
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId", //: means resId is dynamic , changed acc to the ID of the restaurants
                element: <RestaurantMenu />
            },
        ],
        errorElement: <Error />,
    },


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);