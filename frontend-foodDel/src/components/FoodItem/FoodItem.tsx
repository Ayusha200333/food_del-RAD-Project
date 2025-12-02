
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
import "./FoodItem.css"; // (You can remove this later if unused)
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

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

  if (!store) {
    return <div>Error: StoreContext not available</div>;
  }

  const { cartItems, addToCart, removeFromCart } = store;

  return (
    <div className="w-full mx-auto rounded-[15px] shadow-[0_0_10px_#00000015] transition duration-300 animate-fadeIn">
      <div className="relative">
        <img className="w-full rounded-t-[15px]" src={image} alt={name} />

        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add"
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-2 p-[6px] rounded-full bg-white">
            <img
              onClick={() => removeFromCart(id)}
              className="w-[30px] cursor-pointer"
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              className="w-[30px] cursor-pointer"
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="Rating" />
        </div>

        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-[22px] font-medium text-[tomato] mt-[10px] mb-[10px]">
          RS.{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
