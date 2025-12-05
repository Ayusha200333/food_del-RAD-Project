// import React, { useContext } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../context/StoreContext'

// const PlaceOrder = () => {

//   const {getTotalCartAmount} = useContext(StoreContext)


//   return (
//     <form className="place-order">
//       <div className="place-order-left">
//         <p className="title">Delivery Information</p>
//         <div className="multi-fields">
//           <input type="text" placeholder='First name'/>
//           <input type="text" placeholder='Last name'/>
//         </div>

//         <input type="email" placeholder='Email address'/>
//         <input type="text" placeholder='Street'/>
      
//       <div className="multi-fields">
//           <input type="text" placeholder='City'/>
//           <input type="text" placeholder='State'/>
//       </div>
//       <div className="multi-fields">
//           <input type="text" placeholder='Postal code'/>
//           <input type="text" placeholder='Country'/>
//         </div>
//         <input type="text" placeholder='phone'/>
//       </div>
//       <div className="place-order-right">
//           <div className="cart-total">
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
//            <button>PROCEED TO PAYMENT</button>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default PlaceOrder

















import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

interface StoreContextType {
  getTotalCartAmount: () => number;
}

const PlaceOrder: React.FC = () => {
  const { getTotalCartAmount } = useContext(StoreContext) as StoreContextType;

  return (
    <form className="flex flex-col md:flex-row items-start justify-between gap-[50px] mt-[100px]">
      {/* Left Section */}
      <div className="w-full max-w-[max(30%,500px)]">
        <p className="text-[30px] font-semibold mb-[50px]">Delivery Information</p>

        <div className="flex gap-[10px] mb-[15px]">
          <input
            type="text"
            placeholder="First name"
            className="w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]"
          />
        </div>

        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[tomato]"
        />
        <input
          type="text"
          placeholder="Street"
          className="w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[tomato]"
        />

        <div className="flex gap-[10px] mb-[15px]">
          <input
            type="text"
            placeholder="City"
            className="w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]"
          />
        </div>

        <div className="flex gap-[10px] mb-[15px]">
          <input
            type="text"
            placeholder="Postal code"
            className="w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]"
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full p-[10px] border border-[#c5c5c5] rounded outline-[tomato]"
          />
        </div>

        <input
          type="text"
          placeholder="Phone"
          className="w-full mb-[15px] p-[10px] border border-[#c5c5c5] rounded outline-[tomato]"
        />
      </div>

      {/* Right Section */}
      <div className="w-full max-w-[max(40%,500px)]">
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-[24px] font-semibold">Cart Totals</h2>

          <div>
            <div className="flex justify-between text-[#555] mb-[10px]">
              <p>Sub Total</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr className="border-t border-gray-300 mb-[10px]" />

            <div className="flex justify-between text-[#555] mb-[10px]">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount() === 0 ? 0 : 200}</p>
            </div>
            <hr className="border-t border-gray-300 mb-[10px]" />

            <div className="flex justify-between text-[#555] font-bold mb-[10px]">
              <b>Total</b>
              <b>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 200}</b>
            </div>
          </div>

          <button
            type="button"
            className="mt-[30px] bg-red-500 text-white py-[10px] px-[20px] rounded cursor-pointer hover:bg-red-600 transition"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
