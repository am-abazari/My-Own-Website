import React from 'react';
import styles from "./ServiceItem.module.css";


const ServiceItem = (props) => {
    return (
        <div className={styles.item}>
            <i class={props.src}></i>
            <p className={styles.content}>{props.children}</p>
        </div>
    );
};

export default ServiceItem;