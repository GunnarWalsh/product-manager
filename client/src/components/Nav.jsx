import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className='d-flex justify-content-evenly align-items-center mb-5 p-3 border-bottom'>
            <div className='w-50 d-flex justify-content-start'>
                <Link className='nav-link' to={'/'}>Home</Link>
            </div>
        </div>
)}

export default Nav;