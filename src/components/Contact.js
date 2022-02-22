import React, { useState } from 'react';
import styles from "./Contact.module.css"
import Footer from "./Footer"
import Title from './Title';
import Navbar from './Navbar';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';
import MediumNavbar from './MediumNavbar';

const Contact = () => {
    document.title = "Amirhossein Abazari | Contact"
    window.scrollTo(0,0);
    const [activeTab, setActiveTab] = useState({
        home: false,
        about: false,
        services: false,
        contact: true,
    })
    return (
        <section id={styles.main}>
            <MediumNavbar home="0" about="0" services="0" contact="1" />
            <Navbar active={activeTab} />
            <div className="container body" id={styles.contactMe}>
                <Title content="CONTACT" titile="CONTACT ME" />
                <p className={styles.notice}>PLEASE DO NOT HESITATE TO CONTACT ME IF YOU REQUIRE FURTHER INFORMATION.</p>
                <div id={styles.contactItems}>
                    <ContactItem src="fas fa-map-marker-alt" titile="My Address">Tehran, Iran</ContactItem>
                    <ContactItem src="fas fa-share-alt" titile="Social Profiles" checkType="true"
                        mediaHref1="https://twitter.com/am_abazari" mediaSRC1="fab fa-twitter" mediaHref2="https://github.com/AmirhosseinAbazari" mediaSRC2="fab fa-github" mediaHref3="https://www.instagram.com/amirhossein._.abazari/" mediaSRC3="fab fa-instagram" mediaHref4="mailto:amirhossein.abazari@yahoo.com" mediaSRC4="far fa-envelope" mediaHref5="https://www.linkedin.com/in/amirhossein-abazari-388943224" mediaSRC5="fab fa-linkedin-in" //Socail Links
                    ></ContactItem>
                    <ContactItem src="far fa-envelope" titile="Email Me" href="mailto:amirhossein.abazari@yahoo.com" webLink={<strong>Yahoo Mail</strong>}  href2="mailto:amirhossein.abazari80@gmail.com" webLink2={<strong>Gmail</strong>}></ContactItem>
                    <ContactItem src="fas fa-phone-alt" titile="Call Me" href="tel:09015489894" webLink="09015489894"></ContactItem>
                </div>
                <Title content="Form" titile="" />
                <ContactForm />
            </div>
            <Footer />
        </section>
    );
};

export default Contact;