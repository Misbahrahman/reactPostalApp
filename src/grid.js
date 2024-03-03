export function Grid(props) {
  var arr = props.arr;
  return (
    <div className="grid_container">
      {arr.map((ele , index) => {
        return <Card ele = {ele} key={index}/>;
      })}
    </div>
  );
}

function Card(props) {
    let ele = props.ele;
    const {
        Name,
        Description,
        BranchType,
        DeliveryStatus,
        Circle,
        District,
        Division,
        Region,
        Block,
        State,
        Country,
        Pincode,
    } = ele;

    return(
        <div className="card">
            <p>Name : {Name}</p>
            <p>BranchType : {BranchType}</p>
            <p>DeliveryStatus : {DeliveryStatus}</p>
            <p>District : {District}</p>
            <p>State : {State}</p>
        </div>
    );
     
    
      
    
}
