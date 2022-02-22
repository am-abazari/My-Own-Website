import React from 'react';
import styles from "./Box.module.css"
import CountUp from 'react-countup';

const Box = (props) => {
    return (
        <div className={styles.box}>
            <i className={styles.hole}><i class={props.src}></i></i>
            <p className={styles.counter}>{<CountUp end={!window.pageYOffset && (props.count)} duration={props.duration} />}</p>
            <p className={styles.content}>{props.children}</p>
        </div>
    );
};
export default Box;