import React from 'react'
import Logo from '../check.png';
import {Button, Modal} from "antd";
import './SuccessReport.css'


const SuccessReport = ({showUpload, setShowUpload}) => {
const handleUpload = () => {
    setShowUpload(true);
  };

  const handleClose = () => {
    setShowUpload(false);
  };

    return (

     <>
     <Modal
        visible={showUpload}
        onOk={handleUpload}
        onCancel={handleClose}
        footer={null}
        closable={false}
        zIndex={2000}
       >
        
        <div className='prop-check'>
            <div className='check-logo'>
                <img src={Logo} alt="check" />
            </div>
            <div className='mssg'>
                <h5>Property Added Successfully</h5>
                <p>Your new property was successfully added</p>
            </div>
            <div className='buttonn'>
                <div style={{paddingBottom: '30px'}}>
                    <Button className='adu' >Add Units</Button>
                </div>
                <Button className='vip'>View Property</Button>
            </div>
        </div>

       </Modal>
       </>
    )
}

export default SuccessReport


