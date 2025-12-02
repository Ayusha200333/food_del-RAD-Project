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








// import React, { useState } from 'react';
// import { assets } from "../../assets/assets";
// import { Link } from 'react-router-dom';

// const Navbar: React.FC = () => {
//     const [menu, setMenu] = useState<string>("home");

//     return (
//         <div className="py-[20px] flex justify-between items-center">
//             <Link to='/'>
//                 <img 
//                     src={assets.logo_1} 
//                     alt="Logo" 
//                     className="w-[150px] mr-[20px]" 
//                 />
//             </Link>

//             <ul className="flex list-none gap-[20px] text-[#49557e] text-[18px]">
//                 <Link to='/' style={{ textDecoration: 'none' }}>
//                     <li
//                         className={`${menu === "home" ? "pb-[2px] border-b-2 border-[#49557e]" : ""} cursor-pointer`}
//                         onClick={() => setMenu("home")}
//                     >
//                         Home
//                     </li>
//                 </Link>

//                 <li
//                     className={`${menu === "menu" ? "pb-[2px] border-b-2 border-[#49557e]" : ""} cursor-pointer`}
//                     onClick={() => setMenu("menu")}
//                 >
//                     Menu
//                 </li>

//                 <li
//                     className={`${menu === "mobile-app" ? "pb-[2px] border-b-2 border-[#49557e]" : ""} cursor-pointer`}
//                     onClick={() => setMenu("mobile-app")}
//                 >
//                     Mobile-app
//                 </li>

//                 <li
//                     className={`${menu === "contact us" ? "pb-[2px] border-b-2 border-[#49557e]" : ""} cursor-pointer`}
//                     onClick={() => setMenu("contact us")}
//                 >
//                     Contact Us
//                 </li>
//             </ul>

//             <div className="flex items-center gap-[40px]">
//                 <img src={assets.search_icon} alt="Search" />

//                 <div className="relative">
//                     <Link to='/cart'>
//                         <img src={assets.basket_icon} alt="Basket" />
//                     </Link>

//                     <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"></div>
//                 </div>

//                 <button className="bg-transparent text-[16px] text-[#49557e] border border-[tomato] px-[30px] py-[10px] rounded-full cursor-pointer transition duration-300 hover:bg-[#fff4ff]">
//                     Sign in
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Navbar;



















import React, { useState } from 'react';
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [menu, setMenu] = useState<string>("home");

    return (
        <div className="py-[20px] flex justify-between items-center">

            {/* Logo */}
            <Link to='/'>
                <img 
                    src={assets.logo_1} 
                    alt="Logo" 
                    className="
                        w-[150px] mr-[20px]
                        max-[1050px]:w-[140px]
                        max-[900px]:w-[120px]
                    "
                />
            </Link>

            {/* Menu */}
            <ul
                className="
                    flex list-none gap-[20px] text-[#49557e] text-[18px]
                    max-[1050px]:gap-[20px] max-[1050px]:text-[17px]
                    max-[900px]:gap-[15px] max-[900px]:text-[16px]
                    max-[750px]:hidden
                "
            >
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <li
                        className={`${menu === "home" ? "pb-[2px] border-b-2 border-[#49557e]" : ""} cursor-pointer`}
                        onClick={() => setMenu("home")}
                    >
                        Home
                    </li>
                </Link>

                <li
                    className={`${menu === "menu" ? "pb-[2px] border-b-2 border-[#49557e]" : ""} cursor-pointer`}
                    onClick={() => setMenu("menu")}
                >
                    Menu
                </li>

                <li
                    className={`${menu === "mobile-app" ? "pb-[2px] border-b-2 border-[#49557e]" : ""} cursor-pointer`}
                    onClick={() => setMenu("mobile-app")}
                >
                    Mobile-app
                </li>

                <li
                    className={`${menu === "contact us" ? "pb-[2px] border-b-2 border-[#49557e]" : ""} cursor-pointer`}
                    onClick={() => setMenu("contact us")}
                >
                    Contact Us
                </li>
            </ul>

            {/* Right Section */}
            <div 
                className="
                    flex items-center gap-[40px]
                    max-[1050px]:gap-[30px]
                    max-[900px]:gap-[20px]
                "
            >
                <img 
                    src={assets.search_icon} 
                    alt="Search"
                    className="
                        max-[1050px]:w-[22px]
                        max-[900px]:w-[20px]
                    "
                />

                <div className="relative">
                    <Link to='/cart'>
                        <img 
                            src={assets.basket_icon} 
                            alt="Basket"
                            className="
                                max-[1050px]:w-[22px]
                                max-[900px]:w-[20px]
                            "
                        />
                    </Link>

                    <div className="absolute min-w-[10px] min-h-[10px] bg-[tomato] rounded-[5px] top-[-8px] right-[-8px]"></div>
                </div>

                <button
                    className="
                        bg-transparent text-[16px] text-[#49557e] border border-[tomato] 
                        px-[30px] py-[10px] rounded-full cursor-pointer transition duration-300 hover:bg-[#fff4ff]
                        max-[1050px]:px-[25px] max-[1050px]:py-[8px]
                        max-[900px]:px-[20px] max-[900px]:py-[7px] max-[900px]:text-[15px]
                    "
                >
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Navbar;

