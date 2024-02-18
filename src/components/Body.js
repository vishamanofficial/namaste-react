import { json } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
//importing useState hook from react
import { useEffect, useState } from "react";
// import resList from "../utils/mockData";

// yaha pe shimmer ko bhi import karna padega
// import Shimmer from "./Shimmer";


const Body = () => {
    //rules of hooks
    // 1 hooks can only be called inside react functional component
    // 2 hooks can only be called at the top level of a component
    // 3 hooks can not be called inside conditional or loop or function

    // calling useState Hook
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    // serach box ke liye ye backchodi ho rhi
    const [filterdRestaurant, setFilterdRestaurant] = useState([]);
    // yaha main khud se logic laga rha hu ki jb click kru to top rated restautent dikhe aur jb dobara click kru to top rated restaurant dikhe
    const [ogList, setOgList] = useState("Click here to see top rated restaurants.");
    // akshay saini sir search button banana sikha rhe
    const [searchText, setSearchText] = useState("");


    // now we will use useEffect hook
    useEffect( () => {
        fetchData();
    }, []);

    //fetching the data from swiggy's API and resolving the promise using async await and converting it into json format
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"            
        );

        const json = await data.json();

        // console.log(json);

        // after getting the data in json form, we will update our state variable jo ki setListOfRestaurant hai use update karennge
        // setListOfRestaurant(json.data.cards[2].data.data.cards); 
        // but this is not good way

        // here comes the concept of optional chaining
        // read about optional chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilterdRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };



    // jab tak hamara page rerender ho rha hai tb tk hm yaha pe ek logic likhenge taki jb tk page load ho tb tk shimmer UI load ho
    // this concept is known as conditional rendering

    // if(listOfRestaurants.length===0){
    //     return<Shimmer/>;
    // }

    // we can also use ternary operator to handle this thing
    // return listOfRestaurants.length === 0 ? < Shimmer /> : ( render body) 

    return(
        <div className="body">
            
            <div className="res-tital">
            <h2>Top Restaurant Chains in City</h2>

            <div className="search">
                <input type="text" placeholder="Search.." className="search-box" 
                value={searchText} 
                
                onChange={(e)=>{
                    setSearchText(e.target.value);
                    }} ></input>
                   
                <button className="search-btn"
                onClick={() => {
                    const filterdRestaurant = listOfRestaurants.filter(
                        (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    ); 
                    setFilterdRestaurant(filterdRestaurant);
                }}>
                    Search
                    </button>
            </div>

            <div className="filter">
                <button className="filter-btn"  
                onClick={()=>{
                    ogList === "Click here to see top rated restaurants." ?
                    setOgList("Click here to see all restaurants.") :
                    setOgList("Click here to see top rated restaurants.")

                    if(ogList === "Click here to see top rated restaurants."){

                     const filterdList = listOfRestaurants.filter(
                        (restaurant) => restaurant.info.avgRating >= 4.5
                    );
                    setFilterdRestaurant(filterdList);
                    }
                    else
                    {
                        setFilterdRestaurant(listOfRestaurants);
                    }                    
                }}>
                    {ogList}
                </button>
            </div>  
            </div>
     
            <div className="res-container">      
            {filterdRestaurant?.map((restaurant) => <RestaurantCard key={restaurant.info.id}   resData={restaurant}/>)
            }
            </div>
            
        </div>
    )
};


export default Body;