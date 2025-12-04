// import React, { useState } from 'react'
// import './LoginPopup.css'
// import { assets } from '../../assets/assets'

// const LoginPopup = () => {

//     const [currState,setCurrState] = useState("Login")
//   return (
//     <div className='login-popup'>
//         <form className="login-popup-container">
//             <div className="login-popup-title">
//                 <h2>{currState}</h2>
//                 <img onClick={() =>setShowLogin(false)}src={assets.cross_icon} alt="" />
//             </div>

//             <div className="login-popup-inputs">
//                 {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
//                 <input type="email" placeholder='Your Email' required />
//                 <input type="password" placeholder='Password' required />
//             </div>
//             <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
//             <div className="login-popup-condition">
//                 <input type='checkbox' required/>
//                 <p>By continuing, I agree to the terms of use & privacy policy.</p>
//             </div>
//             {currState==="Login"
//             ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
//             :<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
//             }
//         </form>
//     </div>
//   )
// }

// export default LoginPopup














// LoginPopup.tsx
import React, { useState } from 'react';
import { assets } from '../../assets/assets';

interface LoginPopupProps {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div
      className="
        fixed inset-0 
        bg-black/60 
        grid 
        z-50
        animate-fadeIn
      "
    >
      <form
        className="
          place-self-center
          bg-white 
          flex 
          flex-col 
          gap-[25px]
          p-[25px] 
          px-[30px]
          rounded-[8px]
          text-[14px]
          w-[330px] 
          md:w-[23vw]
        "
      >
        <div className="flex justify-between items-center text-black">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            className="w-[16px] cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-[20px]">
          {currState !== "Login" && (
            <input
              type="text"
              placeholder="Your Name"
              required
              className="
                outline-none 
                border border-[#c9c9c9]
                p-[10px]
                rounded-[4px]
              "
            />
          )}

          <input
            type="email"
            placeholder="Your Email"
            required
            className="
              outline-none 
              border border-[#c9c9c9]
              p-[10px]
              rounded-[4px]
            "
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="
              outline-none 
              border border-[#c9c9c9]
              p-[10px]
              rounded-[4px]
            "
          />
        </div>

        <button
          className="
            bg-[tomato] 
            text-white 
            text-[15px]
            py-[10px]
            rounded-[4px]
            cursor-pointer
            border-0
          "
        >
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-start gap-[8px] -mt-[15px]">
          <input type="checkbox" required className="mt-[5px]" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-[tomato] font-medium cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-[tomato] font-medium cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
