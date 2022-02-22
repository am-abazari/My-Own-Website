import React from 'react';

// styles
import styles from "./SocialLink.module.css"

const SocialLinks = (props) => {
    return (
        <a href={props.link} target="_blank">
            <div className={styles.socialItem}>
                <i className={`${props.src} ${styles.item}`}></i>
            </div>
        </a>
    );
};

export default SocialLinks;