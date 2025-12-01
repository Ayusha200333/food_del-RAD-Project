
// import React, { useContext } from "react";
// import "./FoodItem.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../../context/StoreContext";

// // Props type definition
// interface FoodItemProps {
//   id: number | string;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
// }

// const FoodItem: React.FC<FoodItemProps> = ({
//   id,
//   name,
//   price,
//   description,
//   image,
// }) => {

//     const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);


//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//         <img className="food-item-image" src={image} alt={name} />
//         {!cartItems[id]
//             ?<img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
//             :<div className="food-item-counter">
//                 <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                 <p>{cartItems[id]}</p>
//                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
//             </div>

//         }
        
//       </div>

//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="Rating" />
//         </div>

//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">RS.{price}</p>
//       </div>
//     </div>
//   );
// };

// export default FoodItem;









import React, { useContext } from "react";
import "./FoodItem.css";
import { assets, menu_list, food_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

// Props type definition
interface FoodItemProps {
  id: number | string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const FoodItem: React.FC<FoodItemProps> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const store = useContext(StoreContext);

  // TypeScript requires checking because context can be null
  if (!store) {
    return <div>Error: StoreContext not available</div>;
  }

  const { cartItems, addToCart, removeFromCart } = store;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>

          {/* Image name NOT changed */}
          <img src={assets.rating_starts} alt="Rating" />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">RS.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
