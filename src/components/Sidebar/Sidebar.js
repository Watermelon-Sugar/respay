import React from 'react'
import Logo from '../R2.svg';
import { MenuItems } from './MenuItems';
import SubMenu from './SubMenu';


const Sidebar = () => {
    return (
        <>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        
        <nav style={{
            background: '#038618',
            width: '278px',
            height: '90vh'
        }}>
            {MenuItems.map((item, index) => {
                return <SubMenu item={item} key={index} />;
            })}
        </nav>
        </>
    )
}

export default Sidebar
