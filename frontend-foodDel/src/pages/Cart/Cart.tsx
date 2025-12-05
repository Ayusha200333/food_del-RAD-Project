// import React, { useContext } from 'react'
// import'./Cart.css'
// import { StoreContext } from '../../context/StoreContext'
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

//   const navigate = useNavigate();

//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item,index) => {
//           if(cartItems[item._id]>0)
//           {
//             return(
//               <div>
//                   <div className="cart-items-title cart-items-item">
//                   <img src={item.image} alt="" />
//                   <p>{item.name}</p>
//                   <p>Rs.{item.price}</p>
//                   <p>{cartItems[item._id]}</p>
//                   <p>Rs.{item.price*cartItems[item._id]}</p>
//                   <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
//               </div>
//               <hr />
//               </div>
//             )
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Sub Total</p>
//               <p>Rs.{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>Rs.{getTotalCartAmount()===0?0:200}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>Rs.{getTotalCartAmount()===0?0:getTotalCartAmount()+200}</b>
//             </div>
//           </div>
//            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, Enter it here</p>
//             <div className='cart-promocode-input'>
//                 <input type="text" placeholder='promo code'/>
//                 <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Cart














import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

interface FoodItemType {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface StoreContextType {
  cartItems: Record<string, number>;
  food_list: FoodItemType[];
  removeFromCart: (id: string) => void;
  getTotalCartAmount: () => number;
}

const Cart: React.FC = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext) as StoreContextType;

  const navigate = useNavigate();

  return (
    <div className="mt-[100px]">
      <div className="grid gap-2">
        {/* Cart Header */}
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr className="h-[1px] bg-[#e2e2e2] border-none" />

        {/* Cart Items */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center mt-2 text-black">
                  <img src={item.image} alt="" className="w-[50px]" />
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>Rs.{item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => removeFromCart(item._id)}
                    className="cursor-pointer"
                  >
                    x
                  </p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none mt-2" />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Cart Bottom */}
      <div className="mt-[80px] flex gap-[max(12vw,20px)] flex-col-reverse md:flex-row">
        {/* Cart Totals */}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-lg font-semibold">Cart Totals</h2>

          <div>
            <div className="flex justify-between text-[#555]">
              <p>Sub Total</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount() === 0 ? 0 : 200}</p>
            </div>

            <hr className="my-2" />

            <div className="flex justify-between text-[#555] font-bold">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 200}</b>
            </div>
          </div>

          <button
  onClick={() => navigate('/order')}
  className="bg-red-500 w-[max(15vw,200px)] py-3 rounded text-white cursor-pointer hover:bg-red-600 transition"
>
  PROCEED TO CHECKOUT
</button>

        </div>

        {/* Promo Code */}
        <div className="flex-1">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded">
            <input
              type="text"
              placeholder="promo code"
              className="bg-transparent border-none outline-none px-2 py-2 flex-1"
            />
            <button className="w-[max(10vw,150px)] py-3 px-2 bg-black text-white rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
