import React, { useState } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import * as MdIcons from 'react-icons/md'

function AddButton({isModalVisible, setIsModalVisible}) {

  const [add, setAdd] = useState(false);

  //const handleAdd = () => setAdd(true);

const handleAdd = () => setIsModalVisible(true);

  return (
    <div className="add-prop">
        <div  className="add-button">
          <button className="add-btn" onClick={handleAdd}> 
            <MdIcons.MdAdd style={{
              margin: '5px'
            }}/> Add New Property
          </button>
        </div>
    </div>
  );
}

export default AddButton;