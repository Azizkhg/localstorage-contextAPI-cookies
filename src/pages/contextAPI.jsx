import { useContext } from "react";
import React from "react";
import { MyContext } from "./MyContext";
export function ContextApi()
{
    const {text,setText}=useContext(MyContext);
    return(
        <div>
            <h3>Enter text to update in all components<input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input></h3>
            <button></button>
            <h3>{text}</h3>
        </div>
    )
}