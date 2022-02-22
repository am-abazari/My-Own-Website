import React, { useState } from 'react';
import styles from "./Services.module.css"
import Navbar from './Navbar';
import Title from './Title';
import SerivceItem from './SerivceItem';
import Footer from "./Footer"
import MediumNavbar from './MediumNavbar';

const Services = () => {
    window.scrollTo(0,0);
    document.title="Amirhossein Abazari | Services"
    const [activeTab, setActiveTab] = useState({
        home: false,
        about: false,
        services: true,
        contact: false,
    })
    return (
        <section id={styles.main}>
            <MediumNavbar home="0" about="0" services="4" contact="0" />
            <Navbar active={activeTab} />
            <div className="container body" id={styles.myService}>
                <Title content="SERVICES" titile="MY SERVICES" />
                <div id={styles.items}>
                    <SerivceItem src="fas fa-laptop-code">Programming</SerivceItem>
                    <SerivceItem src="far fa-copy"> Front-End Web Develop</SerivceItem>
                    <SerivceItem src="far fa-copy"> Back-End Web Develop</SerivceItem>
                    <SerivceItem src="fas fa-code">Web Design</SerivceItem>
                    <SerivceItem src="fas fa-mobile-alt">Responsive Design</SerivceItem>
                    <SerivceItem src="fas fa-window-restore">PWA</SerivceItem>
                    <SerivceItem src="far fa-file">SPA</SerivceItem>
                    <SerivceItem src="fas fa-paint-brush">UI / UX</SerivceItem>
                    <SerivceItem src="fas fa-code">OOP</SerivceItem>
                    <SerivceItem src="fas fa-server">GRPC / REST</SerivceItem>
                    <SerivceItem src="fas fa-database">DataBase</SerivceItem>
                    <SerivceItem src="fa-brands fa-linux">Linux</SerivceItem>
                </div>
            </div>
            <Footer />
        </section >
    );
};

export default Services;