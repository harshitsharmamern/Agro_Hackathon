import React from 'react'
import '../../Css/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div>Hello to website</div>
            <div className='links'>
                <div className='ele'> <NavLink to="/">home </NavLink> </div>
                <div className='ele'><NavLink to="/services">service </NavLink></div>
                <div className='ele'><NavLink to="/signup">signup </NavLink></div>
                <div className='ele'>login</div>
            </div>

        </div>
    )
}

export default Navbar