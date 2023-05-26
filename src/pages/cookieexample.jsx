import React, { useState } from "react";
import { useCookies } from "react-cookie";
export function Cookiee()
{
    const [name,setName]=useState('');
    const [pwd,setPwd]=useState('');
    const [cookies,setCookies]=useCookies([]);
    const storeCookies=()=>{
        setCookies('Name',name,{path:'/'});
        setCookies('Password',pwd,{path:'/'});
    }
    return(
        <div>
            Name:<input value={name} placeholder="enter Name" onChange={(e)=>setName(e.target.value)}></input>
            Password:<input value={pwd} placeholder="enter password" onChange={(e)=>setPwd(e.target.value)}></input>
            <button onClick={storeCookies}>click</button>
            <hr/>

            <h3>Name: {cookies.Name}</h3>
            <h3>Password: {cookies.Password}</h3>
        </div>)
}