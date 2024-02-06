import RestaurantCard from "./RestaurantCard";
//importing useState hook from react
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {

    //rules of hooks
    // 1 hooks can only be called inside react functional component
    // 2 hooks can only be called at the top level of a component
    // 3 hooks can not be conditional

    // calling useState Hook
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    return(
        <div className="body">
            
            <div className="res-tital">
            <h2>Top restaurant chains in Bangalore</h2>

            <div className="filter">
                <button className="filter-btn" 
                // writing logic for filtering data 
                onClick={()=>{
                    const filterdList = listOfRestaurants.filter(
                        (resList) => resList.info.avgRating >= 4
                    );
                    // us filterd data ko useState ki madad se update kr rhe hain 
                    setListOfRestaurant(filterdList);
                }}>
                    Click here to see top rated restaurants.
                </button>
            </div>  
            </div>
     
            <div className="res-container">      
            {/* yaha pe list of restauratnts se map karwana hai */}
            {listOfRestaurants.map((restaurent) => <RestaurantCard key={restaurent.info.id}   resData={restaurent}/>)
            }
            </div>
            
        </div>
    )
};


export default Body;