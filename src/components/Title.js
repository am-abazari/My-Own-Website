import React from 'react';
import styles from "./Title.module.css";


const Title = (props) => {
    return (
        <div className={`${styles.mainTitle}`}>
            <h2>{props.content}</h2>
            <p>{props.titile}</p>
        </div>
    );
};

export default Title;