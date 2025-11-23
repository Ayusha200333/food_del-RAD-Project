import { createContext } from "react";
import {food_list} from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{



    const contextValue = {
        food_list
    }
    return(
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider

















// import React, { createContext, type ReactNode } from "react";
// import {food_list} from "../assets/assets";

// interface StoreContextType {

// }

// export const StoreContext = createContext<StoreContextType | null>(null);

// interface StoreContextProviderProps {
//   children: ReactNode;
// }

// const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
//   const contextValue: StoreContextType = {
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
