import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SidebarLink = styled( Link )`
  display: flex;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 40px;
  padding: 16px 24px;
  text-decoration: none;
  font-family: "MetaPro, serif";  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;


  &:hover {
      background: #ffffff;
      color: #038618;
      width: 243px;
      position: relative;
      left: 18px;
      border-radius: 8px;
      cursor: pointer;
    }
`;


const SidebarTitle = styled.span`
   margin-left: 14px;
`;

const DropDown = styled(Link)`
   background: #038618;
   margin: 0px 10px;
   display: flex;
   color: #ffffff;
   justify-content: center;
   align-items: center;
   list-style: none;
   height: 40px;
   padding-right: 5rem;
   text-decoration: none;
   font-family: "MetaPro, serif";  font-style: normal;
   font-size: 16px;
`
const SubMenu = ({item}) => {
    const [submenu, setSubmenu] = useState(false);
    const showSubmenu = () => setSubmenu(!submenu);
    return (      
           <>
            <SidebarLink to={item.path} onClick={item.subMenu && showSubmenu}> 
                 <div>
                    { item.icon } 
                    <SidebarTitle>{ item.title }</SidebarTitle>
                 </div>
                 <div>
                    {item.subMenu && submenu ? item.iconOpened : item.subMenu ? item.iconClosed : null } 
                 </div>
             </SidebarLink>
             {submenu && item.subMenu.map((item, index) => {
                 return (
                     <DropDown to={item.path} key={index}>
                         <SidebarTitle>{item.title}</SidebarTitle>
                     </DropDown>
                 )
             })}
           </> 
    )
}

export default SubMenu
