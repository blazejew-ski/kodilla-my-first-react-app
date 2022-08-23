import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <PageTitle>error 404</PageTitle>
      <p className={styles.subtitle}>Better turn back traveler, it seems that you are lost...</p>
    </div>
  );
};

export default NotFound;