import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauranMenu";
const RestaurantMenu = () => {

    const { resId } = useParams();
    // console.log(params);

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null)
        return <Shimmer />;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    // console.log(itemCards);

    return (
        < div className="menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <p>
                {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(" , ")} - {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </p>
            <h4> Rating - {resInfo?.cards[2]?.card?.card?.info?.avgRating}</h4>
            <h2>MENU</h2>

            <ul>
                {itemCards.map(item =>
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} = {" Rs."}{item?.card?.info?.price / 100}</li>)};
                {/* <li>{itemCards[1].card.info.name}</li>-{itemCards[1].card.info.price}</li> */}
                {/* <li>{resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</li> */}
            </ul>
        </div >
    );
};

export default RestaurantMenu;
