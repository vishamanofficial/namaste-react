
import React from "react";
import ReactDOM from "react-dom/client";




const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
            <h3>Meghana Foods</h3>
        </div>
    )
};
const Body = () => {
    return(
        <div className="body">
            <div className="search">
                
            </div>
            <div className="res-container">
                <RestaurantCard/>
            </div>
        </div>
    )
};






const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout/>);

