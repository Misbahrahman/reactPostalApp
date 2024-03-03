import { useEffect, useState } from "react";
import { Grid} from "./grid.js";

export function ShowData(props) {
    let [filter , setFilter] = useState("");

    const data = props.data[0];
    const pincode = props.pin;
    const {Message , Status , PostOffice } = data;

    let filteredPostOffice = PostOffice.filter(ele => ele.Name.includes(filter));

    return(<div className="show">
    <h2>Pincode : {pincode}</h2>
    <h2>Message : {Message}</h2>
    <input placeholder="Filter" onChange={(event)=>{setFilter(event.target.value)}} value={filter} ></input>
    <Grid arr={filteredPostOffice}/>
    </div>);
}