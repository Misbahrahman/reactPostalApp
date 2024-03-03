import { useEffect, useState } from "react";
import { ShowData } from "./show";
import { useLocation } from "react-router-dom";

export function Info(props) {
  var [data, setData] = useState(null);

  const location = useLocation();
  const pincode = location.state;

  useEffect(() => {
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
      .then((res) => res.json())
      .then((jsonRes) => {
        if(jsonRes[0].Status == "Error" || !jsonRes)alert("Invalid Pin code");
        else setData(jsonRes);
      })
      .catch((error) => {
        alert("Invalid Pin code..");
      });
  }, []);

  return (
    <>
      {data ?  data[0].Status != "404" ? <ShowData data={data} pin={pincode} /> : <h1>Pincode Invalid</h1> : <Loader />}
    </>
  );
}

function Loader() {
  return (
    <>
      <h1>Loading.....</h1>
    </>
  );
}
