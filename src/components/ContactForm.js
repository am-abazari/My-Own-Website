import React, { useState, useEffect } from 'react';
import styles from "./ContactForm.module.css"
import emailjs from "emailjs-com";
import { validate } from './validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactForm = () => {
    // Sending Email
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    // Error Managment
    const [errors, setErrors] = useState({});
    // Showing Data on Focus
    const [focus, setFocus] = useState({});

    function sendEmail(e) {
        e.preventDefault();
        if (errors.name == true && errors.email ==   true && errors.subject == true && errors.message == true) {
            emailjs.sendForm('service_3xrjgt9', 'template_7laqf18', e.target, 'user_Cw1MLl6DCSUTccHH21Go7')
                .then((result) => {
                    console.log(result.status);
                    if (result.status == 200) {
                        toast.success("The Email has sent successfully !");
                        setData({
                            name: "",
                            email: "",
                            subject: "",
                            message: "",
                        })
                        setFocus({
                            name: false,
                            email: false,
                            subject: false,
                            message: false,

                        })
                    }
                }, (error) => {
                    toast.error("Something went wrong , please try again later !");
                });
            e.target.reset();
        } else {
            setFocus({
                name: true,
                email: true,
                subject: true,
                message: true,

            })
        }

    }

    // Showing Errors on Focus
    const focusHandeler = (event) => {
        setFocus({ ...focus, [event.target.name]: true })
    }

    // Updator
    const updator = (event) => {
        setData({ ...data, [event.target.name]: [event.target.value] })
    }
    useEffect(() => {
        setErrors(validate(data));
    }, [data], [focus]); // ** On change data & focus

    return (
        <form id={styles.contactFields} onSubmit={sendEmail}>
            <div className={styles.flexsetter}>
                <div>
                    <input autoComplete="off" value={data.name} className={`${styles.contatcField} ${styles.widthSet}`} type="text" placeholder="Your Name" name="name" onFocus={focusHandeler} onChange={updator} />
                    <p className={`${styles.errorName} ${styles.chandHeight} `}>{focus.name && errors.name} &nbsp;</p>
                </div>
                <div>
                    <input autoComplete="off" value={data.email} className={`${styles.contatcField} ${styles.widthSet}`} type="email" placeholder="Email" name="email" onFocus={focusHandeler} onChange={updator} />
                    <p className={styles.errorEmail}>{focus.email && errors.email} &nbsp;</p>
                </div>
            </div>

            <input autoComplete="off" value={data.subject} className={`${styles.contatcField} ${styles.fullWidthSet}`} type="text" placeholder="Subject" name="subject" onFocus={focusHandeler} onChange={updator} />
            <p className={styles.errorSubject}>{focus.subject && errors.subject} &nbsp;</p>
            <textarea autoComplete="off" value={data.message} placeholder="Message " className={`${styles.contatcField} `} name="message" onFocus={focusHandeler} onChange={updator} />
            <p className={styles.errorMessage}>{focus.message && errors.message} &nbsp;</p>
            <input autoComplete="off" id={styles.button} type="submit" value="Send Message" />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />

        </form>
    );
};

export default ContactForm;