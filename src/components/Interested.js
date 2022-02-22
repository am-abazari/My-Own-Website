import React from 'react';
import styles from "./Interested.module.css"
const Interested = (props) => {
    return (
        <div className={styles.Interested}>
            <i style={{color:props.color}} class={props.className}></i>
            <h3>{props.children}</h3>
        </div>
    );
};

export default Interested;