// import { createContext, useEffect, useState, ReactNode } from "react";
// import { assets, menu_list, food_list } from "../assets/assets";

// // Define CartItems Type
// interface CartItems {
//   [key: string]: number;
// }

// // Define Context Type
// interface StoreContextType {
//   food_list: typeof food_list;
//   cartItems: CartItems;
//   addToCart: (itemId: string | number) => void;
//   removeFromCart: (itemId: string | number) => void;
// }

// // Create Context with type
// export const StoreContext = createContext<StoreContextType | null>(null);

// // Props for Provider
// interface ProviderProps {
//   children: ReactNode;
// }

// const StoreContextProvider: React.FC<ProviderProps> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItems>({});

//   const addToCart = (itemId: string | number) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
//     }));
//   };

//   const removeFromCart = (itemId: string | number) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: prev[itemId] - 1,
//     }));
//   };

  
//   const getTotalCartAmount = () => {
//       let totalAmount = 0;
//       for(const item in cartItems){
//         if(cartItems[item]>0){
//              let itemInfo = food_list.find((product) => product._id ===item);
//         totalAmount += itemInfo.price*cartItems[item];
//         }
       
//       }
//       return totalAmount;
//   }

//   const contextValue: StoreContextType = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount

//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;











import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

// Define CartItems Type
interface CartItems {
  [key: string]: number;
}

// Define Context Type
interface StoreContextType {
  food_list: typeof food_list;
  cartItems: CartItems;
  setCartItems: React.Dispatch<React.SetStateAction<CartItems>>;
  addToCart: (itemId: string | number) => void;
  removeFromCart: (itemId: string | number) => void;
  getTotalCartAmount: () => number;
}

// Create Context with type
export const StoreContext = createContext<StoreContextType | null>(null);

// Props for Provider
interface ProviderProps {
  children: React.ReactNode;
}

const StoreContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItems>({});

  const addToCart = (itemId: string | number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeFromCart = (itemId: string | number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find(product => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }

    return totalAmount;
  };

  const contextValue: StoreContextType = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
