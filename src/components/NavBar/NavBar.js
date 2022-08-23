import styles from './NavBar.module.scss';
import Container from '../Container/Container.js';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Container>
        <div className={styles.homeIconWrapper}>
          <Link to="/"  className={styles.homeIcon}><span className='fa fa-home'></span></Link>
        </div>
        <ul className={styles.linksListWrapper}>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
        </ul>
      </Container>
    </nav>
  );
};

  export default NavBar;