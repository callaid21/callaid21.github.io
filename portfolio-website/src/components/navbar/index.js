import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-scroll';

//Icons
import { BurgerSpin } from 'react-burger-icons';

const Navbar = () => {

    const [isClosed, setIsClosed] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const handleClick = () => {
        setIsClosed(!isClosed);
        setMobileNav(!mobileNav);
    }
    
    return(
        <div className='wrapper'>
            <div className='flex center'>
                <div className='nav-container'>
                    <div className='nav-header'>
                        <img src='./icons/logo.svg' alt='logo'/>
                    </div>
                    <ul className={mobileNav ? 'primary-nav' : 'primary-nav none'}>
                        <Link className='nav-link' to='home' smooth={true} duration={500} activeClass='active'>Home</Link>
                        <Link className='nav-link' to='about' smooth={true} duration={500} activeClass='active'>About</Link>
                        <Link className='nav-link' to='projects' smooth={true} duration={500} offset={-80} activeClass='active'>Projects</Link>
                    </ul>
                    <button className='button'><a href='./files/AidanCallahanResume.pdf'>Resume</a></button>
                    <button onClick={handleClick} className='mobile-nav-toggle'>
                        <BurgerSpin isClosed={isClosed} />
                    </button>
                </div>
            </div>
        </div>  
    )
}

export default Navbar;