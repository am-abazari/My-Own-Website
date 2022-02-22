import React from 'react';
import styles from "./Data.module.css";
const Data = (props) => {
    return (
        <div className={styles.dataItems}>
            <i class="fas fa-chevron-right"></i>
            <strong> {props.title} : </strong>
            <p><a href={props.href}> {props.link} </a> {props.children} </p>
        </div>
    );
};

export default Data;