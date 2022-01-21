import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function AddUnits() {

  const [add, setAdd] = useState(false);

  const handleAdd = () => setAdd(true);

  return (
    <div className="add-units">
        <Link to="" className="units-button">
          <button className="units-btn" onClick={handleAdd}> 
            Add Units
          </button>
        </Link>
    </div>
  );
}

export default AddUnits;