import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import { redirectDocument } from "react-router-dom";

const useRestauranMenu = (resId) => {
    //fetch data
    // const { resId } = useParams();
    // // console.log(params);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
    //     const json = await data.json();
    //     // console.log(json);
    //     setResInfo(json.data);
    // };
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;
};


export default useRestauranMenu;