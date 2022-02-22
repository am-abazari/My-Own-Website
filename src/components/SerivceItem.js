import React from 'react';
import styles from "./SerivceItem.module.css";


const SerivceItem = (props) => {
    return (
        <div className={styles.item}>
            <i class={props.src}></i>
            <p className={styles.content}>{props.children}</p>
        </div>
    );
};

export default SerivceItem;