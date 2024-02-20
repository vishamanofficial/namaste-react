import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
 
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    

    useEffect(() =>{
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);

        // original Menu Url : https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467126&lng=80.9460872&restaurantId=101055&catalog_qa=undefined&submitAction=ENTER

        const json = await data.json();

        setResInfo(json.data);
        
    };
   
    console.log(resInfo);   
    const  name  = resInfo?.cards[0]?.card?.card?.info?.name;

    // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    

    return(
        <div className="menu">
            {name ?  <h1>{name}</h1> : <h1>Loading...</h1>}

            <h2>Menu</h2> 

            {/* <ul>
                {itemCards.map(item => 
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