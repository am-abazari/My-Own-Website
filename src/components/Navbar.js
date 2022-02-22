import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Navbar.module.css"
const Navbar = (props) => {
    return (
        <header>
            <div className={`${styles.centerCet} container`} >
                <h1><Link to="/">Amirhossein Abazari</Link></h1>
                <nav>
                    <ul>
                        <li><Link to="/" className={` ${styles.navItems} ${props.active.home && styles.active}`}>Home</Link></li>
                        <li><Link to="/about" className={`${styles.navItems} ${props.active.about && styles.active}`}>About</Link></li>
                        <li><Link to="/services" className={`${styles.navItems} ${props.active.services && styles.active}`}>Services</Link></li>
                        <li><Link to="/contact" className={`${styles.navItems} ${props.active.contact && styles.active}`}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;