import React from "react";

function SortBy() {

  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sort By
      </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item">First Name</a>
            <a className="dropdown-item">Last Name</a>
            {/* <a className="dropdown-item" href="#">First Name</a>
            <a className="dropdown-item" href="#">Last Name</a> */}
        </div>
    </div>
  )
}

export default SortBy;