import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';


export const Header = ({currentRoute}) => {

    return(
        <header className='flex items-center pl-14 pt-10 header'>
            <article>
                <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/>
                            <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                        </g>
                    </svg>
                </Link>
            </article>
            <hr className='flex mix-blend-normal opacity-25 w-4/12 ml-16 bar'/>
            <nav className='flex-1 nav-bar'>
                <ul className='flex items-center bg-white bg-opacity-5 bg-cover backdrop-blur-3xl text-white text-base tracking-widest'>
                        <li className={` ${currentRoute === '' ? 'active' : ''} mr-10 xl:ml-20 md:ml-10`} >
                            <Link to='/' >
                                <span className='font-bold mr-3 item-id'>00</span>HOME
                            </Link>
                        </li>
                        <li className={` ${currentRoute === 'destination' ? 'active' : ''} mr-10`}>
                            <Link to='/destination'>
                                <span className='font-bold mr-3 item-id'>01</span>DESTINATION
                            </Link>
                        </li>
                        <li className={` ${currentRoute === 'crew' ? 'active' : ''} mr-10`}>
                            <Link to='/crew'>
                                <span className='font-bold mr-3 item-id'>02</span>CREW
                            </Link>
                        </li>
                        <li className={` ${currentRoute === 'technology' ? 'active' : ''}`}>
                            <Link to='/technology'>
                                <span className='font-bold mr-3 item-id'>03</span>TECHNOLOGY
                            </Link>
                        </li>
                </ul>
            </nav>
        </header>
    );
}