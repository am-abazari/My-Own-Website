import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./MediumNavbar.module.css"

const MediumNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [active, setActive] = useState({
        home: Number(props.home),
        about: Number(props.about),
        services: Number(props.services),
        contact: Number(props.contact),

    })
    return (
        <nav id={styles.navbar}>
            {
                isOpen ? <i class="fas fa-bars" onClick={() => setIsOpen(false)}></i>
                    : <i class="fas fa-times" onClick={() => setIsOpen(true)}></i>
            }
            <div id={styles.navContainer} className={isOpen ? styles.open : styles.close}>
                <Link className={active.home && styles.active} to="/">Home</Link>
                <Link className={active.about && styles.active} to="/About">About</Link>
                <Link className={active.services && styles.active} to="/Services">Services</Link>
                <Link className={active.contact && styles.active} to="/Contact">Contact</Link>
            </div>
        </nav >
    );
};

export default MediumNavbar;