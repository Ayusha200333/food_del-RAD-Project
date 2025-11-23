// import React, { useState } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';

// const Navbar: React.FC = () => {
//     const [menu, setMenu] = useState<string>("home");

//     return (
//         <div className='navbar'>
//             <img src={assets.logo_1} alt="Logo" className='logo_1' />

//             <ul className="navbar-menu">
//                 <li 
//                     className={menu === "home" ? "active" : ""} 
//                     onClick={() => setMenu("home")}
//                 >
//                     Home
//                 </li>
//                 <li 
//                     className={menu === "menu" ? "active" : ""} 
//                     onClick={() => setMenu("menu")}
//                 >
//                     Menu
//                 </li>
//                 <li 
//                     className={menu === "mobile-app" ? "active" : ""} 
//                     onClick={() => setMenu("mobile-app")}
//                 >
//                     Mobile-app
//                 </li>
//                 <li 
//                     className={menu === "contact us" ? "active" : ""} 
//                     onClick={() => setMenu("contact us")}
//                 >
//                     Contact Us
//                 </li>
//             </ul>

//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="Search" />
//                 <div className="navbar-search-icon">
//                     <img src={assets.basket_icon} alt="Basket" />
//                     <div className="dot"></div>
//                 </div>
//                 <button>Sign in</button>
//             </div>
//         </div>
//     );
// };

// export default Navbar;





import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [menu, setMenu] = useState<string>("home");

    return (
        <div className='navbar'>
            <Link to='/'>
                <img src={assets.logo_1} alt="Logo" className='logo_1' />
            </Link>

            <ul className="navbar-menu">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <li 
                        className={menu === "home" ? "active" : ""} 
                        onClick={() => setMenu("home")}
                    >
                        Home
                    </li>
                </Link>
                <li 
                    className={menu === "menu" ? "active" : ""} 
                    onClick={() => setMenu("menu")}
                >
                    Menu
                </li>
                <li 
                    className={menu === "mobile-app" ? "active" : ""} 
                    onClick={() => setMenu("mobile-app")}
                >
                    Mobile-app
                </li>
                <li 
                    className={menu === "contact us" ? "active" : ""} 
                    onClick={() => setMenu("contact us")}
                >
                    Contact Us
                </li>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search-icon">
                    <Link to='/cart'>
                        <img src={assets.basket_icon} alt="Basket" />
                    </Link>
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
