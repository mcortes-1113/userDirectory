import React from "react";

function FilterBy() {

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter By
      </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item">Show All</a>
            <a className="dropdown-item">Department</a>
            <a className="dropdown-item">Active</a>
            <a className="dropdown-item">Inactive</a>
        </div>
    </div>
  )
}

export default FilterBy;