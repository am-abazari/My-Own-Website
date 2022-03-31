import React, { useState } from 'react';
import styles from "./Services.module.css"
import Navbar from './Navbar';
import Title from './Title';
import ServiceItem from './ServiceItem';
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
                    <ServiceItem src="fas fa-laptop-code">Programming</ServiceItem>
                    <ServiceItem src="far fa-copy"> Front-End Web Develop</ServiceItem>
                    <ServiceItem src="far fa-copy"> Back-End Web Develop</ServiceItem>
                    <ServiceItem src="fas fa-code">Web Design</ServiceItem>
                    <ServiceItem src="fas fa-mobile-alt">Responsive Design</ServiceItem>
                    <ServiceItem src="fas fa-window-restore">PWA</ServiceItem>
                    <ServiceItem src="far fa-file">SPA</ServiceItem>
                    <ServiceItem src="fas fa-paint-brush">UI / UX</ServiceItem>
                    <ServiceItem src="fas fa-code">OOP</ServiceItem>
                    <ServiceItem src="fas fa-server">GRPC / REST</ServiceItem>
                    <ServiceItem src="fas fa-database">DataBase</ServiceItem>
                    <ServiceItem src="fa-brands fa-linux">Linux</ServiceItem>
                </div>
            </div>
            <Footer />
        </section >
    );
};

export default Services;