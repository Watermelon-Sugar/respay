import React from 'react';

import {Button} from "antd";
import * as MdIcons from 'react-icons/md';
import { Link } from 'react-router-dom';


const AddFile = () => {
    return (
        <div>
            <div className='back '>
                <p className=' pd btn'> <MdIcons.MdOutlineArrowBack /> Back</p>
                <h1>Properties Details</h1>
            </div>

            <div className="file">

            </div>

            <Link to="/success-report">
                <Button htmlType="submit" block style={{
                background: '#038618',
                borderRadius: '4px',
                fontFamily: 'MetaPro, serif',
                fontWeight: 'bold',
                fontSize: '16px',
                lineHeight: '22px',
                textAlign: 'center',
                height: '62px',
                color: '#ffffff'}}>
                    Save
                </Button>
            </Link>
        </div>
    )
}

export default AddFile
