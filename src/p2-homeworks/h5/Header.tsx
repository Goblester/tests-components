import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.navLinks}>
                <NavLink className={styles.navLink} to={'/pre-junior'}>pre-junior</NavLink>
                <NavLink className={styles.navLink} to={'/junior'}>junior</NavLink>
                <NavLink className={styles.navLink} to={'/junior-plus'}>junior+</NavLink>
                <div className={styles.point}></div>
            </div>
        </div>
    )
}

export default Header
