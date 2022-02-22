import React from 'react'
import SocialLinks from './SocialLinks'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import MediumNavbar from './MediumNavbar'
// Styles
import styles from "./MainPage.module.css"
export default function MainPage() {
    window.scrollTo(0, 0);
    document.title = "Amirhossein Abazari | Home Page"
    return (
        <>
            <MediumNavbar home="1" about="0" services="0" contact="0" />
            <section id={styles.mainSection} className="container">
                <h1><a href="#">Amirhossein Abazari</a></h1>
                <p className={styles.specialist}>Full-Stack <span>Web</span> Developer</p>
                <nav id={styles.navbarLarge}>
                    <ul>
                        <li><Link to="/home" className={` ${styles.navItems} ${styles.active}`}>Home</Link></li>
                        <li><Link to="/about" className={styles.navItems}>About</Link></li>
                        <li><Link to="/services" className={styles.navItems}>Services</Link></li>
                        <li><Link to="/contact" className={styles.navItems}>Contact</Link></li>
                    </ul>
                </nav>

                {/* Social Media */}
                <section id={styles.socialMedia}>
                    <SocialLinks link="https://twitter.com/am_abazari" src={"fab fa-twitter"} />
                    <SocialLinks link="https://github.com/am-abazari" src={"fab fa-github"} />
                    <SocialLinks link="https://www.instagram.com/amirhossein._.abazari/" src={"fab fa-instagram"} />
                    <SocialLinks link="mailto:amirhossein.abazari@yahoo.com" src={"far fa-envelope"} />
                    <SocialLinks link="https://www.linkedin.com/in/amirhossein-abazari-388943224/" src={"fab fa-linkedin"} />
                </section>
            </section>
            <Footer />
        </>
    )
}