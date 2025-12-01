// import React from "react";
// import "./ExploreMenu.css";
// import { assets, menu_list, food_list } from "../../assets/assets";

// interface MenuItem {
//   menu_name: string;
//   menu_image: string;
// }

// interface ExploreMenuProps {
//   category: string;
//   setCategory: React.Dispatch<React.SetStateAction<string>>;
// }

// const ExploreMenu: React.FC<ExploreMenuProps> = ({ category, setCategory }) => {
//   return (
//     <div className="explore-menu" id="explore-menu">
//       <h1>Explore Our Menu</h1>
//       <p className="explore-menu-text">
//         Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
//       </p>

//       <div className="explore-menu-list">
//         {menu_list.map((item: MenuItem, index: number) => (
//           <div
//             key={index}
//             className="explore-menu-list-item"
//             onClick={() =>
//               setCategory((prev) =>
//                 prev === item.menu_name ? "All" : item.menu_name
//               )
//             }
//           >
//             <img
//               src={item.menu_image}
//               alt={item.menu_name}
//               className={category === item.menu_name ? "active" : ""}
//             />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>

//       <hr />
//     </div>
//   );
// };

// export default ExploreMenu;




















import React from "react";
import { assets, menu_list, food_list } from "../../assets/assets";

interface MenuItem {
  menu_name: string;
  menu_image: string;
}

interface ExploreMenuProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-5" id="explore-menu">
      
      <h1 className="text-[#262626] font-medium">Explore Our Menu</h1>

      <p className="max-w-[60%] text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings and elevate your dining
        experience, one delicious meal at a time.
      </p>

      <div className="flex justify-between gap-8 items-center text-center my-5 overflow-x-scroll scrollbar-hide">
        {menu_list.map((item: MenuItem, index: number) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-[7.5vw] min-w-[80px] rounded-full transition 
                ${category === item.menu_name ? "border-4 border-[tomato] p-1" : ""}
              `}
            />
            <p className="mt-2 text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-2 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;

