// import React from 'react'
// import './AppDownload.css'
// import { assets } from '../../assets/assets'

// const AppDownload = () => {
//   return (
//     <div className='app-download' id='app-download'>
//         <p>For Beter Experience Download <br />FlavorRun App</p>
//         <div className="app-download-platforms">
//             <img src={assets.play_store} alt="" />
//             <img src={assets.app_store} alt="" />
//         </div>

//     </div>
//   )
// }

// export default AppDownload














import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div
      className="
        mx-auto mt-[100px] 
        text-center font-medium 
        text-[max(3vw,20px)]
      "
      id='app-download'
    >
      <p>
        For Beter Experience Download <br />FlavorRun App
      </p>

      <div
        className="
          flex justify-center 
          gap-[max(2vw,10px)] 
          mt-[40px]
        "
      >
        <img
          src={assets.play_store}
          alt=""
          className="
            w-[max(30vw,120px)] 
            max-w-[180px] 
            transition 
            ease-in-out 
            duration-500 
            cursor-pointer
            hover:scale-105
          "
        />

        <img
          src={assets.app_store}
          alt=""
          className="
            w-[max(30vw,120px)] 
            max-w-[180px] 
            transition 
            ease-in-out 
            duration-500 
            cursor-pointer
            hover:scale-105
          "
        />
      </div>
    </div>
  )
}

export default AppDownload
