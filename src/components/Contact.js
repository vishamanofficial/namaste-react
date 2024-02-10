import { LOGO_URL } from "../utils/constants";
import { useState , useEffect } from "react";

const Contact = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");


    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>
            <div className="location">
                <h3>Contact Page</h3>
            </div>
            <div className="nav-items">
                <ul>
                    <li><i class="fa-solid fa-magnifying-glass"></i> Search</li>
                    <li><i class="fa-brands fa-ideal"></i> Offers</li>
                    <li><i class="fa-solid fa-handshake-angle"></i> Help</li>
                    <li><i class="fa-solid fa-person-dots-from-line"></i> Takeaway</li>
                    <li><i class="fa-solid fa-cart-shopping"></i> Cart</li>
                    <button 
                        className="login" 
                        onClick={() => { 
                            btnNameReact === "Login" ?
                            setBtnNameReact("Logout") :
                            setBtnNameReact("Login")
                        }}
                        >
                        {btnNameReact} 
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Contact;
