import React from 'react'
import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div id={styles.footer}>
            <span id={styles.creadit}>Copyright © Amirhossein Abazari 2021-2022 /  Designed by <Link to="/">self</Link></span>

        </div>
    )
}
