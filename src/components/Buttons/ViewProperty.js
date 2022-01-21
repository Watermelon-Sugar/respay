import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function ViewProperty() {

  const [add, setAdd] = useState(false);

  const handleAdd = () => setAdd(true);

  return (
    <div className="view">
        <Link to="" className="view-prop">
          <button className="view-btn" onClick={handleAdd}> 
            View Property
          </button>
        </Link>
    </div>
  );
}

export default ViewProperty;