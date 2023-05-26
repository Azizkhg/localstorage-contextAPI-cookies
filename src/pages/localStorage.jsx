import React,{ useState } from "react";
export function LocalStorage()
{
    const [name,setName]=useState('');
    const [pwd,setPwd]=useState('');
    const handle=()=>
    {
        localStorage.setItem('Name',name);
        localStorage.setItem('Password',pwd);
        return(<div>
        {localStorage.getItem('Name') && (<div>
            Name:<p>{localStorage.getItem('Name')}</p>
        </div>)}
        {localStorage.getItem('Password')&&(<div>
            Password:<p>{localStorage.getItem('Password')}</p>
        </div>)}
        <button onClick={remove}>remove</button>
    </div>)
    }
    function remove()
    {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
        localStorage.clear();
    }

    return(
        <div>
            <h3>Name: <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input></h3>
            <h3>Password: <input type="password" placeholder="Password" value={pwd} onChange={(e)=>setPwd(e.target.value)}></input></h3>
            <button onClick={handle}>store</button>
        </div>
    )
}