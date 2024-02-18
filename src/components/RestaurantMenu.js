import { useEffect, useState } from "react";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState([]);

    useEffect(() =>{
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8467126&lng=80.9460872&restaurantId=330433&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        console.log(json);

        setResInfo(json.data);
    };
   
    //isiline se error dikha rha hai 
    const { name } = resInfo?.cards[0]?.card?.card?.info;


    return(
        <div className="menu">
            <h1>{name}</h1>
            <h1>Test</h1>
        </div>
    )
};

export default RestaurantMenu;