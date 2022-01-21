import React from 'react'
import * as MdIcons from 'react-icons/md';
import {Button, Modal} from "antd";
import './Rent.css'
import SaveButton from '../../Buttons/SaveButton';


const Rent = ({showUpload, setShowUpload}) => {
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
        <p className='p-3' > <span style={{
          cursor: "pointer",    
          fontFamily: 'MetaPro, serif',
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '21px',
          letterSpacing: '-0.41px',
          color: '#767272',
        }}onClick={handleClose}><MdIcons.MdOutlineArrowBack /> Back</span></p>

        <h1>Add New Rent/Leases </h1>

        <h6>Upload Property Images</h6>

        <div className='drag' style={{ marginTop: 16, height: 180 }}>

            <input type='file' />
        </div>

        <div className='save' >
            <Button style={{
                width: '100%',
                background: '#038618',
                borderRadius: '4px',
                fontFamily: 'MetaPro, serif',
                fontWeight: 'bold',
                fontSize: '16px',
                lineHeight: '22px',            textAlign: 'center',
                height: '62px',
                color: '#ffffff'
            }}>Save</Button>
        </div>

       </Modal>
       </>
    )
}

export default Rent


