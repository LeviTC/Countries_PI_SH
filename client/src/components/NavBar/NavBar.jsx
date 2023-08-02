import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./NavBar.module.css"

export default function NavBar () {

    const {pathname} = useLocation();
    
    return (
        <div className={style.navContainer} >
            
            {pathname !== "/Home"&&
            <NavLink to="/Home">
                <button className={style.navButtons}>Home</button>
            </NavLink>}
            
            {pathname !== "/About"&&
            <NavLink to="/About">
                <button className={style.navButtons}>About</button>
            </NavLink>}
            
            {pathname !== "/ActivityForm"&&
            <NavLink to="/ActivityForm">
                <button className={style.navButtons}>Create activity</button>
            </NavLink>}
            
            <NavLink to="/">
                <button className={style.navButtons}>Log out</button>
            </NavLink>
        </div>
    )
};