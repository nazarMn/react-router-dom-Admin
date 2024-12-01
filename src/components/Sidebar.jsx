import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const menuItems = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Users', path: '/users' },
        { name: 'Settings', path: '/settings' },
    ];

    return (
        <div style={{ width: '200px', background: '#f4f4f4', height: '100vh', padding: '10px' }}>
            <h3>Admin Panel</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {menuItems.map((item, index) => (
                    <li key={index} style={{ margin: '10px 0' }}>
                        <NavLink
                            to={item.path}
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                color: isActive ? 'blue' : 'black',
                            })}
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
