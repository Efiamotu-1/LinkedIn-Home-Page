import React from "react";
import './HeaderOption.css'

function HeaderOption({Icon, title, Avatar}) {

    return (
        // <div>
        //    {/* {Icon} */}
        //    <h3>{title}</h3> 
        //    <h3>{Icon}</h3>
        // </div>

         <div className="headerOption">
         {Icon &&<Icon />}
         {Avatar&&(
             <Avatar className="headerOption__icon" src={Avatar}/>
         )}
         <h3 className="headerOption__title ">{title}</h3>
         </div>
    )
}
export default HeaderOption;