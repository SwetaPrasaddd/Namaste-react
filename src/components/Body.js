import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    //local state variable
    const [listOfRestaurants, setlistOfrestaurants] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [searchText, setSearchText] = useState("");
    // console.log("body rendered");
    // console.log(listOfRestaurants);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setlistOfrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}></input>
                    <button onClick={() => {
                        //filter the restaurant cards and update the UI
                        // console.log(searchText);
                        const filteredRest = listOfRestaurants.filter(
                            (res) =>

                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        // console.log(filteredRest);
                        setFilteredRest(filteredRest);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    // console.log(listOfRestaurants);
                    const filteredList = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating > 4.5
                    );
                    // console.log(filteredList);
                    setFilteredRest(filteredList);
                    // console.log(listOfRestaurants);
                }}>Top-rated Restaurants</button>
            </div>

            <div className="res-container">
                {
                    filteredRest.map((restaurants, index) => (

                        // < RestaurantCard key={index} resData={restaurants} />
                        <Link key={restaurants.info.id}
                            to={"restaurants/" + restaurants.info.id}>
                            < RestaurantCard resData={restaurants} />
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}


export default Body;