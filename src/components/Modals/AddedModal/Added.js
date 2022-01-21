// import { Modal } from 'bootstrap';
import React, {useState} from 'react';

const Added = (props) => {
        // const [show, setShow] = useState(false);
        // const handleSubmit = () => setShow(false);
        // const handleShow = () => setShow(true);
        return (
                <div>
                        {/* <Modal 
                        onHide={handleSubmit}
                        backdrop="static"
                        keyboard={true}
                        {...props}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"centered />  */}
                        <div className="check">

                        </div>
                        <div className="successful">
                                <h1>Property Added Successfully</h1>
                                <h6>Your new property was successfully added</h6>
                        </div>
                </div>
        )
}

export default Added



