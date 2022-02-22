import React from 'react';
import styles from "./Skills.module.css";


const Skills = (props) => {
    return (
        <div className={styles.skillItem}>
            <div className={styles.texts}>
                <p className={styles.content}>{props.content}</p>
                <p className={styles.percent}>{props.percent}</p>
            </div>
            <div className={styles.back}>
                <div className={styles.front} style={{width:props.percent}}></div>
            </div>
        </div>
    );
};

export default Skills;