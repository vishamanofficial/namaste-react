// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_URL } from "../utils/constants";
 
const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() =>{
    //     fetchMenu();
    // }, []);  
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_URL + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);       
    // };

    const  name  = resInfo?.cards[2]?.card?.card?.info?.name;
    const  cuisines  = resInfo?.cards[2]?.card?.card?.info?.cuisines;
    const  costForTwoMessage  = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;
    const  areaName  = resInfo?.cards[2]?.card?.card?.info?.areaName;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    
    // console.log(itemCards);

    return(
        <div className="menu">
            {name ?  <h1>{name}</h1> : <h1>Loading...</h1>}
            {cuisines ?  <h2>{cuisines.join(", ")}</h2> : <h1>Loading...</h1>}
            {costForTwoMessage ?  <h2>{costForTwoMessage}</h2> : <h1>Loading...</h1>}
            {areaName ?  <h2>{areaName}</h2> : <h1>Loading...</h1>}
            {/* <ul>
                {itemCards?.map(item => 
                <li 
                key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - {" "} 
                {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}  
                </li>)}
            </ul> */}

        </div>
    )
};

export default RestaurantMenu;