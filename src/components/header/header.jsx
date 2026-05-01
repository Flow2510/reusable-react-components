import { NavLink } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
            <header className='header'>
                <div className='header__wrapper'>
                    <h1>
                        Title
                    </h1>
                    <nav className='header__menu'>
                        <NavLink 
                            to={`/`} 
                            className={({ isActive }) => (
                                isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"
                            )} 
                            href="#"
                        >
                            Playground
                        </NavLink>
                        <NavLink 
                        to={`/verticalcarousel`} 
                        className={({ isActive }) => (
                            isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"
                        )} 
                        href="#"
                        >
                            Vertical Infinite Carousel
                        </NavLink>
                        <NavLink 
                            to={`/horizontalcarousel`} 
                            className={({ isActive }) => (
                                isActive ? "header__menu-link header__menu-link--active" : "header__menu-link"
                            )} 
                            href="#"
                        >
                            Horizontal Zoom Carousel
                        </NavLink>
                    </nav>
                    <button className='header__button' onClick={() => setMenuOpen(prev => !prev)}>
                        {menuOpen ? 
                            "close"
                        :
                            "open"
                        }
                    </button>
                </div>
            </header>
            <AnimatePresence>
                {menuOpen &&
                    <motion.div 
                        key="mobile-menu"
                        initial={{ y: "-113px" }}
                        animate={{ y: "0px" }}
                        exit={{ y: "-113px" }}
                        transition={{ duration: 0.3, type: "tween" }}
                        className='mobile-menu__wrapper'
                    >
                        <nav className='mobile-menu'>
                            <NavLink 
                                to={`/`} 
                                className={({ isActive }) => (
                                    isActive ? "mobile-menu__link mobile-menu__link--active" : "mobile-menu__link"
                                )} 
                            >
                                Playground
                            </NavLink>
                            <NavLink 
                                to={`/verticalcarousel`} 
                                className={({ isActive }) => (
                                    isActive ? "mobile-menu__link mobile-menu__link--active" : "mobile-menu__link"
                                )} 
                                >
                                    Vertical Infinite Carousel
                                </NavLink>
                                <NavLink 
                                    to={`/horizontalcarousel`} 
                                    className={({ isActive }) => (
                                        isActive ? "mobile-menu__link mobile-menu__link--active" : "mobile-menu__link"
                                    )} 
                                >
                                    Horizontal Zoom Carousel
                                </NavLink>
                        </nav>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
};