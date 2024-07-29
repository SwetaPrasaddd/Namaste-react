import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
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

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>
                Looks like you are offline!!! Check your Internet connectivity!!!
            </h1>
        );
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
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
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        // console.log(listOfRestaurants);
                        const filteredList = listOfRestaurants.filter(
                            (res) => res?.info?.avgRating > 4.5
                        );
                        // console.log(filteredList);
                        setFilteredRest(filteredList);
                        // console.log(listOfRestaurants);
                    }}>Top-rated Restaurants</button>
                </div>
            </div>

            <div className="flex flex-wrap">
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