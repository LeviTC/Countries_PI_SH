import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LogIn.module.css"

export default function LogIn (){
    
    
    return (
        <div >
            <NavLink to="/Home">
                <button className={style.primaryButton}>Travel?</button>
            </NavLink>
        </div>
    )
};