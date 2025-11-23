import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

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
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item: MenuItem, index: number) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={category === item.menu_name ? "active" : ""}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
