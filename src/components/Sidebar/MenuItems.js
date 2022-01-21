import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

 export const MenuItems = [
      {
        title: 'Dashboard',
        path: '/Dashboard',
        icon: <MdIcons.MdOutlineGridView />,
    },
    {
        title: 'Properties',
        path: '/properties',
        icon: <MdIcons.MdOutlineApartment/>,
        iconClosed: <MdIcons.MdKeyboardArrowDown />,
        iconOpened: <MdIcons.MdKeyboardArrowUp />,
        subMenu: [
            {
                title: 'Properties',
                path: '/properties/property-details'
            },
            {
                title: 'Units',
                path: '/properties/units',
            }
        ]
    },
    {
        title: 'Applications',
        path: '/applications',
        icon: <MdIcons.MdOutlineDescription />,
    },
    {
        title: 'Rent & Leases',
        path: '/rent-leases',
        icon: <FaIcons.FaBuilding />,
    },
    {
        title: 'Invoies & Payment',
        path: '/invoices-payments',
        icon: <MdIcons.MdOutlineReceiptLong />,
    },
    {
        title: 'Maintenance',
        path: '/maintenance',
        icon: <MdIcons.MdOutlineEngineering />,
    },
    {
        title: 'Facility Management',
        path: '/facility-management',
        icon: <RiIcons.RiHomeGearLine />,
    },
    {
        title: 'Visitors',
        path: '/visitors',
        icon: <MdIcons.MdOutlinePeopleAlt />,
    },
    {
        title: 'Roles',
        path: '/roles',
        icon: <MdIcons.MdPersonAddAlt />,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <MdIcons.MdOutlineSettings />,
    },
    {
        title: 'Log Out',
        path: '/logout',
        icon: <MdIcons.MdLogout />,
    }
]