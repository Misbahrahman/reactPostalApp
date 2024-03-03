import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Entry() {

    var [pincode , setPincode] = useState("");
    var nav = useNavigate();
    function handleClick() {
        nav("/Info" , { state : pincode });
    }

    return(
        <div>
            <h1>Enter Pincode..</h1>
            <input value={pincode} onChange={(event)=>{setPincode(event.target.value)}} placeholder="Enter Your Pincode"></input>
            <button onClick={handleClick}>Lookup</button>
        </div>
    );
    
}