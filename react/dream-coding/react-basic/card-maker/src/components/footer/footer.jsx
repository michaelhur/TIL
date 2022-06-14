import React, {memo} from 'react';
import styles from './footer.module.css'

const Footer = memo(() => {
    return(
        <footer className={styles.footer}>
            <p className={styles.title}>Yeah~</p>
        </footer>
    );
});
export default Footer;