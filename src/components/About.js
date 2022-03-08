import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Title from './Title';
import Data from './Data';
import Box from './Box';
import Interested from './Interested';
import MediumNavbar from './MediumNavbar';
// ME
import me from "../assets/profile.png"

import styles from "./About.module.css"
import Skills from './Skills';
const About = () => {
    document.title = "Amirhossein Abazari | About Me";
    window.scrollTo(0, 0);

    const time = new Date();
    const [activeTab, setActiveTab] = useState({
        home: false,
        about: true,
        services: false,
        contact: false,
    })
    return (
        <div>
            <Navbar active={activeTab} />
            <MediumNavbar home="0" about="1" services="0" contact="0" />
            <section id="aboutMe" className="container body">
                <Title content="About" titile="LEARN MORE ABOUT ME" />
                <div id={styles.moreAboutMe}>
                    <img className={styles.photoMe} src={me} alt="Amirhossein" />
                    <div className={styles.info}>
                        {/* Notes */}
                        <h3>You can trust me by I am Full-Stack  Web Developer</h3>
                        <p style={{ wordBreak: "break-all" }} className={`fontItalic ${styles.life}`}>
                            I have full lifecycle capabilities to transform and assist you to run your business.
                        </p>
                        <p className={`fontItalic ${styles.cover}`}>
                            This is covering all aspects of all IT solutions  which can help our clients to maximise their IT investment with these skills
                        </p>
                        {/* Sata About Me */}
                        <div className={styles.data}>
                            <Data title="Birthday" href="" link="">20 December</Data>
                            <Data title="Age" href="" link="">{time.getFullYear() - time.getFullYear() - 1}</Data>
                            <Data title="Website" href="http://www.amabazari.ir" link="www.amabazari.ir"></Data>
                            <Data title="Degree" href="" link="">{/*BSc Computer Engineering*/} -1</Data>
                            <Data title="Phone" href="tel:09015489894" link="09015489894"></Data>
                            <Data title="PhEmailone" href="mailto:amirhossein.abazari@yahoo.com" link={<i>Yahoo Mail</i>}></Data>
                            <Data title="City" href="" link="">Tehran, Iran</Data>
                            <Data title="Freelance" href="" link="">Available</Data>
                        </div>
                        {/* Goals */}
                        <div id={styles.goals}>
                            <p>I am a professional Full-Stack Web developer who executes an intelligent strategy to any medium company and large enterprise.</p>
                            <p>The milestones of me is not only web development but I provide TRUSTED and INNOVATION.</ p>
                            <p>We shift towards digitalization along with new innovation technologies to upturn your business performance.</p>
                            <p>We never stop on technology and move forward to brighten our future.</p>
                        </div>
                    </div>
                </div>
                {/* Boxes */}
                <div className={styles.coutBox}>
                    <Box src="far fa-smile-beam" count="232" duration="2.9">Happy Clients</Box>
                    <Box src="fas fa-briefcase" count="521" duration="3.5">Projects</Box>
                    <Box src="far fa-question-circle" count="1463" duration="4.5">Hours Of Support</Box>
                    <Box src="fas fa-code" count="15" duration="1.9">Hard Workers</Box>
                </div>
                {/* Skills */}
                <Title content="SKILLS" titile="" />
                <section id={styles.skills}>
                    <Skills content="HTML 5" percent="90%" />
                    <Skills content="CSS 3" percent="85%" />
                    <Skills content="JavaScript" percent="85%" />
                    <Skills content="React JS" percent="80%" />
                    <Skills content="PWA" percent="85%" />
                    <Skills content="Redux" percent="65%" />
                    <Skills content="OOP" percent="75%" />
                    <Skills content="MVC" percent="75%" />
                    <Skills content="PHP" percent="90%" />
                    <Skills content="Linux" percent="90%" />
                </section>

                {/* INTERESTS */}
                <Title content="INTERESTS" titile="" />
                <section id={styles.Interested}>
                    <Interested color="#DD4B25" className="fab fa-html5" >HTML 5</Interested>
                    <Interested color="#2449D8" className="fab fa-css3-alt" >CSS 3</Interested>
                    <Interested color="#EAD41C" className="fab fa-js-square" >JavaScript</Interested>
                    <Interested color="#29CC61" className="fas fa-code" >Web Design</Interested>
                    <Interested color="#2D70A3" className="fa-solid fa-cube" >Material Design</Interested>
                    <Interested color="#6C10ED" className="fab fa-bootstrap" >Bootstrap</Interested>
                    <Interested color="#C76494" className="fab fa-sass" >SASS</Interested>
                    <Interested color="#35B3EB" className="fa-solid fa-paintbrush" >Tailwind</Interested>
                    <Interested color="#5CCFEE" className="fab fa-react" >React JS</Interested>
                    <Interested color="#7248B6" className="far fa-registered" >Redux</Interested>
                    <Interested color="#169160" className="far fa-file-alt" >SPA Programming</Interested>
                    <Interested color="#3A3A3A" className="fas fa-window-restore" >PWA</Interested>
                    <Interested color="#2D70A3" className="fab fa-python" >Python</Interested>
                    <Interested color="#454684" className="fas fa-desktop" >Machine learning</Interested>
                    <Interested color="#E44D30" className="fab fa-git-alt" >Git</Interested>
                    <Interested color="#F2C400" className="fa-solid fa-language" >German</Interested>
                    <Interested color="#F2C200" className="fa fa-linux" >Linux</Interested>
                    <Interested color="#808BB6" className="fa-brands fa-php" >PHP</Interested>
                    <Interested color="#F7291B" className="fa-brands fa-laravel" >Laravel</Interested>
                    <Interested color="#F2CAE9" className="fa-solid fa-sitemap" >MVC</Interested>
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default About;