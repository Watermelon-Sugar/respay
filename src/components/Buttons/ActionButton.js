import './Button.css';
import React from 'react'
import { Link } from "react-router-dom";

function ActionButton ({ handleClick }) {
  return (
    <div className="action-prop">
        <Link to="/residential-prop" className="action-button">
          <button className="action-btn" onClick={() => handleClick()}> 
            Action
          </button>
        </Link>
    </div>
  )
}

export default ActionButton
