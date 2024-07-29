
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines } = resData; //?.=Optional chaining
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg text-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg" alt="res-card" src={CDN_URL + resData.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-4">{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(",")}</h4>
            <h5>{resData.info.avgRating}</h5>
        </div>
    );
}

export default RestaurantCard;