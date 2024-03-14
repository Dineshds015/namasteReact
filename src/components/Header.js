import { set } from "express/lib/application";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header=()=>{

    const [btnNameReact,setbtnNameReact]=useState("Login"); 
    console.log("header rendered");

    //useEffect
    useEffect(()=>{
        console.log("useEffect called");
    },[btnNameReact]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact==="Login"?setbtnNameReact("Logout"):setbtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;