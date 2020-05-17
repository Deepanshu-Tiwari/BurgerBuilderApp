import React from "react";
import "./BuildControl";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label:"Salad" , type:"Salad"},
    {label:"Bacon", type:"Bacon"},
    {label:"Cheese", type:"Cheese"},
    {label:"meat", type:"meat"}
]



const BuildControls = (props)=>{
    return(
        <div className="BuildControls">
            {controls.map(ctrl=>(
                <BuildControl key={ctrl.key}  type={ctrl.label}/>
            ))}
        </div>
    )
}

export default BuildControls;