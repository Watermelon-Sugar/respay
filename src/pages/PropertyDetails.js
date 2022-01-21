import React from 'react'
import ActionButton from '../components/Buttons/ActionButton';
import 'bootstrap/dist/css/bootstrap.css';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import Splash from '../unsplash_2d4lAQAlbDA.png';
import Kitchen from '../unsplash_MP0bgaS_d1c.png';
import Room from '../unsplash_L7EwHkq1B2s.png';
import './PropertyDetails.css'
const PropertyDetails = () => {
    return (
        
    <div>
        <div className='property'>
            <div className='properties-deets'>
              <div className='property-details' style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '25px'
                }}>
                    <div className='back '>
                        <p className=' pd btn'> <MdIcons.MdOutlineArrowBack /> Back</p>
                        <h1>Properties Details</h1>
                    </div>
                    <ActionButton />
                </div>
            </div>
            <div className="prop-info">
                <div className="tcg-img">
                    <div className="terr">
                        <img src={Splash} alt="home" />
                        <div className='more-info'>
                            <h5>Top Court Garden</h5>
                            <p className='addy'>24, Roland Road, Challenge, Ibadan, Oyo, NG</p>
                            <p className='type'>Property Type: Residential</p>
                            <p className='type'>Property Sub-Type: Semi-Detached</p>
                        </div>
                    </div>
                    <div className="indoor">
                        <div className="ind-img">
                            <img src={Kitchen} alt="home" />
                            <img src={Room} alt="home" /> 
                            <div className=' pd btn'>
                                <span className='view'>View All Images</span>
                            </div>
                            <div className="facilities">
                                <h5>Amenities</h5>
                                <div className="amenities">
                                    <div className="amenities1">
                                        <p> <MdIcons.MdFence /> Fence</p>
                                        <p> <RiIcons.RiHomeGearLine /> Facility Management</p>
                                    </div>
                                    <div className="amenities2">
                                        <p><MdIcons.MdWaves /> Swimming Pool</p>
                                        <p> <MdIcons.MdOutlineYard /> Garden</p>
                                    </div>
                                    <div className="amenities3">
                                        <p><MdIcons.MdFitnessCenter /> Gym</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction">
                    <div className="transaction-unit">
                        <div className="trans">
                            <h5>Transaction Details <span className=' pd btn'>See more <MdIcons.MdOutlineArrowForward /> </span></h5>
                            <p>Total Rentals - 20 <span>NGN500,000,000.00</span></p>
                            <p>Total PM Fees - 20 <span>NGN50,000,000.00</span></p>
                            <p>Total Expenses - 6 <span>NGN100,000,000.00</span></p>
                        </div>
                    </div>
                    <div className="transaction-unit">
                        <div className="uni">
                            <h5>Unit Details</h5>
                            <span className=' pd btn'>See More <MdIcons.MdOutlineArrowForward /></span>
                        </div>
                        <div className="circle">
                           
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}



export default PropertyDetails
