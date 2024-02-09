import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {LOGO_URL} />
            </div>
            <div className="location">
                <p>Bengaluru, Karnataka 560034, India</p>
            </div>
            <div className="nav-items">
                <ul>
                    <li><i class="fa-solid fa-magnifying-glass"></i> Search</li>
                    <li><i class="fa-brands fa-ideal"></i> Offers</li>
                    <li><i class="fa-solid fa-handshake-angle"></i> Help</li>
                    <li><i class="fa-solid fa-person-dots-from-line"></i> Sign In</li>
                    <li><i class="fa-solid fa-cart-shopping"></i> Cart</li>
                </ul>
            </div>
        </div>
    )
};


// yaha se export karenge tabhi app.js me import kr payenge
export default Header; 