import React from "react";
import "../Burger/Burger.css";
import "../Burger/BurgerIngredient/BurgerIngredient.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props)=>{
    const transformedIngredient = Object.keys(props.ingredients)
    .map(igkey=>{
        return[...Array(props.ingredients[igkey])]
        .map((_,i)=>{
            return <BurgerIngredient key={igkey+i} type={igkey}/>
        })
    })
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};

export default Burger;