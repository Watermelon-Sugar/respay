import React from 'react';
import SaveButton from '../components/Buttons/SaveButton';
import * as MdIcons from 'react-icons/md';

const AddFile = () => {
    return (
        <div>
            <div className='back '>
                <p className=' pd btn'> <MdIcons.MdOutlineArrowBack /> Back</p>
                <h1>Properties Details</h1>
            </div>

            <div className="file">

            </div>

            <SaveButton />
        </div>
    )
}

export default AddFile
