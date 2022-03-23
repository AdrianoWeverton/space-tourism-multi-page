import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';


export const Header = ({currentRoute}) => {
    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => {
        setOpen(true);
        document.querySelector('.close').style.display = 'block';
        document.querySelector('.hamburger').style.display = 'none';
        document.querySelector('.ul').style.display = 'flex';
    }

    const handleCloseMenu = () => {
        setOpen(false);
        document.querySelector('.hamburger').style.display = 'block';
        document.querySelector('.close').style.display = 'none';
        document.querySelector('.ul').style.display = 'none';
    }

    return(
        <header className='header'>
            <article>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/>
                            <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                        </g>
                    </svg>
                </Link>
            </article>
            <hr className='hr hidden'/>
            <nav className='nav'>
                <ul className='bg-white bg-opacity-5 bg-cover backdrop-blur-3xl ul'>
                        <li className={` ${currentRoute === '' ? 'active' : ''} li`} >
                            <Link to='/' >
                                <span className='span'>00</span>HOME
                            </Link>
                        </li>
                        <li className={` ${currentRoute === 'destination' ? 'active' : ''} li`}>
                            <Link to='/destination'>
                                <span className='span'>01</span>DESTINATION
                            </Link>
                        </li>
                        <li className={` ${currentRoute === 'crew' ? 'active' : ''} li`}>
                            <Link to='/crew'>
                                <span className='span'>02</span>CREW
                            </Link>
                        </li>
                        <li className={` ${currentRoute === 'technology' ? 'active' : ''} li`}>
                            <Link to='/technology'>
                                <span className='span'>03</span>TECHNOLOGY
                            </Link>
                        </li>
                </ul>
                <ul className='mobile-icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" className='hamburger' onClick={handleOpenMenu}>
                        <g fill="#D0D6F9" fill-rule="evenodd">
                            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
                        </g>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" className='close' onClick={handleCloseMenu}>
                        <g fill="#D0D6F9" fill-rule="evenodd">
                            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
                        </g>
                    </svg>
                </ul>
            </nav>
        </header>
    );
}