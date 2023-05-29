import React from "react";
import "../Game1.css"

const GameCircle=({id,color,children,className,OnCircleClicked})=>{
return <div className={`gameCircle ${className}`} onClick={()=>OnCircleClicked(id)}> 
    {children}
</div>
};
export default GameCircle