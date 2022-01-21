import './Button.css';
import React from 'react'
import { Link } from "react-router-dom";

function SaveButton ({ handleClick }) {
  return (
    <div className="save-prop">
        <Link to="" className="save-button">
          <button className="save-btn" onClick={() => handleClick()}> 
            Save
          </button>
        </Link>
    </div>
  )
}

export default SaveButton
