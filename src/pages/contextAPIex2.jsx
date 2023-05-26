import { useContext } from "react"
import { MyContext } from "./MyContext"
import React from "react"
export function ContextAPIex2()
{
    const {text,setText}=useContext(MyContext);
    return(
        <div>
            <h3>Enter text to update in all components<input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input></h3>
        </div>
    )
}