
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines } = resData; //?.=Optional chaining
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-card" src={CDN_URL + resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(",")}</h4>
            <h5>{resData.info.avgRating}</h5>
        </div>
    )
}

export default RestaurantCard;