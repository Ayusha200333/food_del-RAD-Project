// import React from 'react'
// import './Footer.css'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//         <div className="footer-content">
//             <div className="footer-content-left">
//                 <img src={assets.logo_1} alt="" />
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus obcaecati non omnis inventore hic atque pariatur, quo optio velit, explicabo et incidunt blanditiis magni officia molestias! Error, necessitatibus soluta?</p>
//                 <div className="footer-social-icons">
//                     <img src={assets.facebook_icon} alt="" />
//                     <img src={assets.twitter_icon} alt="" />
//                     <img src={assets.linkedin_icon} alt="" />
//                 </div>
//             </div>
//             <div className="footer-content-center">
//                 <h2>COMPANY</h2>
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Delivery</li>
//                     <li>Privacy Policy</li>
//                 </ul>
//             </div>
//             <div className="footer-content-right">
//                 <h2>GET IN TOUCH</h2>
//                 <ul>
//                     <li>0777456743</li>
//                     <li>flavorrun@gmail.com</li>
//                 </ul>
//             </div>
//         </div>
//         <hr />
//         <p className="footer-copyright">Copyright 2025 &copy FlavorRun.com - All Right Reserved</p>
//     </div>
//   )
// }

// export default Footer















import React from "react";
import { assets } from "../assets/assets";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#323232] text-[#d9d9d9] flex flex-col items-center gap-6 px-[8vw] pt-20 pb-10 mt-24">
      
      {/* CONTENT GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <div className="flex flex-col items-start gap-4">
          <img src={assets.logo_1} alt="Logo" className="w-32" />
          <p className="text-sm leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At delectus 
            obcaecati non omnis inventore hic atque pariatur, quo optio velit...
          </p>
          <div className="flex items-center gap-4">
            <img src={assets.facebook_icon} alt="Facebook" className="w-6 cursor-pointer hover:opacity-80" />
            <img src={assets.twitter_icon} alt="Twitter" className="w-6 cursor-pointer hover:opacity-80" />
            <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6 cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* CENTER SECTION */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-white text-lg font-semibold">COMPANY</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-white">Home</li>
            <li className="cursor-pointer hover:text-white">About Us</li>
            <li className="cursor-pointer hover:text-white">Delivery</li>
            <li className="cursor-pointer hover:text-white">Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-white text-lg font-semibold">GET IN TOUCH</h2>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-white">0777456743</li>
            <li className="cursor-pointer hover:text-white">flavorrun@gmail.com</li>
          </ul>
        </div>

      </div>

      {/* LINE */}
      <hr className="w-full border-gray-500" />

      {/* COPYRIGHT */}
      <p className="text-sm">&copy; 2025 FlavorRun.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
