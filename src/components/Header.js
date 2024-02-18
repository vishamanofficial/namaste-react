import { LOGO_URL } from "../utils/constants";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    // hm yaha pe useState ka use krke login logout button bana rahe hain 
    const [btnNameReact, setBtnNameReact] = useState("Login");

    // if no dependency array is present then then useEffect is called on every render
    // if empty dependency array is present then useEffect is called only on initial render (just once)
    // is something present in depencey array as a dependency then useEffect is called everytime that dependency is updated

    // useEffect( ()=>{
    //     console.log("useEffect callled");
    // }, [btnNameReact]);


    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>
            <div className="location">
                <p>Koramangala, Bengaluru, Karnataka, India</p>
            </div>
            <div className="nav-items">
                <ul>
                    
                    {/* <li><i class="fa-solid fa-magnifying-glass"></i> Search</li> */}
                    <li>
                        <Link to="/">
                        <i class="fa-brands fa-ideal"></i> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                        <i class="fa-brands fa-ideal"></i> About
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/contact"><i class="fa-solid fa-handshake-angle"></i> Contact Us</Link></li>
                    {/* <li><i class="fa-solid fa-person-dots-from-line"></i> Takeaway</li> */}
                    <li><i class="fa-solid fa-cart-shopping"></i> Cart</li>
                    {/* login logout buuton */}
                    <button 
                        className="login" 
                        onClick={() => { 
                            // logic for login logout toggle button 
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
};


// yaha se export karenge tabhi app.js me import kr payenge
export default Header; 