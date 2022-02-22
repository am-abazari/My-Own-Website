import React from 'react';
import styles from "./ContactItem.module.css"
const ContactItem = (props) => {
    return (
        <div className={styles.item}>
            <i class={`${props.src} ${styles.titleIcon}`}></i>
            <div className={styles.texts}>
                <h3>{props.titile}</h3>
                <p>{props.children}</p>
                {
                    Boolean(props.checkType) &&
                    <div className={styles.socialMedia}>
                        <a target="_blank" href={props.mediaHref1}><i class={props.mediaSRC1}></i></a>
                        <a target="_blank" href={props.mediaHref2}><i class={props.mediaSRC2}></i></a>
                        <a target="_blank" href={props.mediaHref3}><i class={props.mediaSRC3}></i></a>
                        <a target="_blank" href={props.mediaHref4}><i class={props.mediaSRC4}></i></a>
                        <a target="_blank" href={props.mediaHref5}><i class={props.mediaSRC5}></i></a>
                    </div>
                }
                <a className={styles.mails} href={props.href}>{props.webLink}</a>
                <a className={styles.mails} href={props.href2}>{props.webLink2}</a>
            </div>
        </div>
    );
};

export default ContactItem;