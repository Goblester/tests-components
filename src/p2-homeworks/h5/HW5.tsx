import React from 'react'
import Header from './Header'
import Routes from './Routes'
import styles from './HW5.module.css';

function HW5() {
    return (
        <div className={styles.container}>
            {/*в gh-pages лучше работает HashRouter*/}


            <Header/>

            <Routes/>

        </div>
    )
}

export default HW5
