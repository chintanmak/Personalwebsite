import React from 'react'
import './style.scss';
import { Outlet } from 'react-router-dom';
import resume from './assets/resume.pdf';
import Home from './pages/Home';

const Navbar=()=> {
    return (
        <>
        <div className='navbar'>

            <div className='navbar-logo'>
            <a href='/' className="logo">Chintan.Mak</a>
            </div>

            <div className='navbar-menu'>
                <a href={resume} className='btn-contact'>Resume</a>
            </div>
        
        </div>  
        <Outlet />
        </>
    );
}

export default Navbar;
