import React from 'react';
import * as  MdIcons from 'react-icons/md';
import Logo from '../Ellipse 1.png';


const Navbar = () => {
    return (
        <div>
            <nav className="NavbarItems" style={{
                background: '#ffffff'
            }}>
                <div className="nav-bar" style={{
                    display: "flex",
                    marginLeft: '45%',
                    padding: '20px'
                    }}>
                    
                    <div className='search'>
                        <input type="search" className="searchbox" name="search" placeholder="Search" />
                    </div>
                    <div className='notf-icon' style={{
                        width: '16px',
                        color: '#038618',
                        fontSize: '25px',
                        margin:'0 35px'
                    }}>
                    <MdIcons.MdOutlineNotificationsNone />
                    </div>
                    <div className="profile">
                    <img src={Logo} 
                        alt="profile" />
                    </div>
                    <div className="deets">
                        <p>Seyi Martin</p>
                        <span>Property Owner</span>
                    </div>
                    <div style={{
                        margin: '15px'
                    }}>
                        <MdIcons.MdKeyboardArrowDown/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar