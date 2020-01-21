import React from "react";
import Employees from "../../Employees.json";

function SortBy() {

  function sort() {
    console.log("sort");
    const sorted = [].concat(Employees) 
      .sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
      console.log(sorted);
  }

  return (
    <div>
    {/* <button type="button" className="btn btn-info" onClick</div>)>Sort by First Name</button> */}
    <button type="button" className="btn btn-info" onClick = { sort } >Sort by Last Name</button>
    </div>
  )
}

export default SortBy;