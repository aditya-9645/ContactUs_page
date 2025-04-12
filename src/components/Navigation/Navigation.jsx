import styles from './Navigation.module.css';

const Navigation =  () => {
    return (
        <>
        <nav className={`${styles.navigation} container`}>
            <div className={styles.logo}>
                <img className={styles.logo_image} src="/images/GaMMa_logo.png" alt="gamma's_logo" />
            </div>
            <ul>
                <li href="#">Home</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
        </nav>
        </>
    )
};

export default Navigation;