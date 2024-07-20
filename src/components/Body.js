import RestaurantCard from "./RestaurantCard.js";
// import resList from "../utils/mockData.js"

import { useState } from "react";

const Body = () => {
    //local state variable
    const [listOfRestaurants, setlistOfrestaurants] = useState([{
        "avgRating": "3.7",
        "cuisines": ["Pizzas", "Italian", "Pastas", "Desserts"],
        "name": "Domino's Pizza",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    },
    {
        "avgRating": "4.7",
        "cuisines": ["Pizzas", "Italian", "Desserts"],
        "name": "KFC",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    },
    {
        "avgRating": "4.1",
        "cuisines": ["Pizzas", "Desserts"],
        "name": "Momo Hut",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    }]);

    //     let listOfRestaurants = [{
    //         "avgRating": "3.7",
    //         "cuisines": ["Pizzas", "Italian", "Pastas", "Desserts"],
    //         "name": "Domino's Pizza",
    //         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    //     }, {
    //         "avgRating": "4.7",
    //         "cuisines": ["Pizzas", "Italian", "Desserts"],
    //         "name": "KFC",
    //         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    //     }, {
    //         "avgRating": "4.1",
    //         "cuisines": ["Pizzas", "Desserts"],
    //         "name": "Momo Hut",
    //         "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
    //     }];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.avgRating > 4
                    );
                    setlistOfrestaurants(filteredList);
                    // console.log(listOfRestaurants);
                }}>Top-rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurants, index) => (

                        < RestaurantCard key={index} resData={restaurants} />
                    ))
                }
            </div>
        </div >
    )
}


export default Body;