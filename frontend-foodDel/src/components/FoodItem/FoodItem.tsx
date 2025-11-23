// import React from 'react'
// import './FoodItem.css'

// const FoodItem = ({id,name,price,description,image}) => {
//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={image} alt="" />
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" />
//             </div>
//             <p className="food-item-description">{description}</p>
//             <p className="food-item-price">RS.{price}</p>
//         </div>
//     </div>
//   )
// }

// export default FoodItem



import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

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

    const [itemCount,setItemCount] = useState(0)
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!itemCount
            ?<img className="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
            :<div className="food-item-counter">
                <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
            </div>

        }
        
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">RS.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
