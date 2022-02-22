import React , {useState} from 'react';
import styles from "./Notfound.module.css"
import Navbar from './Navbar';
import MediumNavbar from './MediumNavbar';
import notFoundImg from "../assets/img/notFound.png"

import Footer from './Footer';
const Notfound = () => {
    window.scrollTo(0,0);
    const [activeTab, setActiveTab] = useState({
        home: false,
        about: false,
        services: false,
        contact: false,
        notActive:true,
    })

    document.title="#404 Page Not Found"
    return (
        <section>
            <Navbar active={activeTab} />
            <MediumNavbar active={activeTab} />
            <div className="container body" id={styles.notFound}>
                <p>&lt;/<span> #404</span>  Page Not Found ! &gt;</p>
                <img src={notFoundImg} alt="" />
            </div>
            <Footer />
        </section>
    );
};

export default Notfound;