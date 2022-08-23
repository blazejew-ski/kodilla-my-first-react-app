import styles from './NavBar.module.scss';
import Container from '../Container/Container.js';



const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.homeIconWrapper}>
          <a href="/" className={styles.homeIcon}><span className='fa fa-home'></span></a>
        </div>
        <ul className={styles.linksListWrapper}>
          <li className={styles.link}><a href="/">Home</a></li>
          <li className={styles.link}><a href="/favorite">Favorite</a></li>
          <li className={styles.link}><a href="/about">About</a></li>
        </ul>
      </Container>
    </nav>
  );
};

  export default NavBar;