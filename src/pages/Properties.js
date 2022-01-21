import React from 'react'
import AddButton from '../components/Buttons/AddButton';
import 'bootstrap/dist/css/bootstrap.css';
import Img from '../Rectangle 3.png';
import * as MdIcons from 'react-icons/md';
import './Properties.css';
import { Link } from 'react-router-dom';
import AddPropertyForm from '../components/Modals/AddPropertyFormModal/AddPropertyForm';
import Rent from '../components/Modals/RentModal/Rent';



const Properties = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [showUpload, setShowUpload] = React.useState(false)
    return (
        <>
        <AddPropertyForm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} showUpload={showUpload} setShowUpload={setShowUpload}/>
        <Rent showUpload={showUpload} setShowUpload={setShowUpload}/>
        <div className='property'>
            <div className='properties'>
                <div className='add-property' style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '25px'
                }}>
                    <h1>Properties</h1>
                    
                    
                        <AddButton isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>
                   
                </div>
            </div>
            <div className="row" >
                <Link to='/property-details'>
                    <div className="prop-deets" style={{width: '341px'}}>
                    <img src={Img} className="card-img-top" alt="apartment-view" />
                    <div className="card-body">
                        <h5 className="card-title">Top Court Garden <span className='unit'>1000  units</span></h5>
                        <div className='btn'>
                            <span className='res'>Residential</span>
                            <MdIcons.MdKeyboardArrowDown />
                        </div>
                        <p className="card-text">Challenge, Ibadan</p>                 
                    </div>
                </div>
                </Link>    
                <div className="prop-deets" style={{width: '21.31rem'}}>
                    <img src={Img} className="card-img-top" alt="apartment-view" />
                    <div className="card-body">
                        <h5 className="card-title">Top Court Garden <span className='unit'>1000 units</span></h5>
                        <div className='btn'>
                            <span className='res'>Residential</span>
                            <MdIcons.MdKeyboardArrowDown />
                        </div>
                        <p className="card-text">Challenge, Ibadan</p>                 
                    </div>
                </div>
                <div className="prop-deets" style={{width: '21.31rem'}}>
                    <img src={Img} className="card-img-top" alt="apartment-view" />
                    <div className="card-body">
                        <h5 className="card-title">Top Court Garden <span className='unit'>1000 units</span></h5>
                        <div className='btn'>
                            <span className='res'>Residential</span>
                            <MdIcons.MdKeyboardArrowDown />
                        </div>
                        <p className="card-text">Challenge, Ibadan</p>                 
                    </div>
                </div>
                <div className="prop-deets" style={{width: '21.31rem'}}>
                    <img src={Img} className="card-img-top" alt="apartment-view" />
                    <div className="card-body">
                        <h5 className="card-title">Top Court Garden <span className='unit'>1000 units</span></h5>
                        <div className='btn'>
                            <span className='res'>Residential</span>
                            <MdIcons.MdKeyboardArrowDown />
                        </div>
                        <p className="card-text">Challenge, Ibadan</p>                 
                    </div>
                </div>
                <div className="prop-deets" style={{width: '21.31rem'}}>
                    <img src={Img} className="card-img-top" alt="apartment-view" />
                    <div className="card-body">
                        <h5 className="card-title">Top Court Garden <span className='unit'>1000 units</span></h5>
                        <div className='btn'>
                            <span className='res'>Residential</span>
                            <MdIcons.MdKeyboardArrowDown />
                        </div>
                        <p className="card-text">Challenge, Ibadan</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default Properties