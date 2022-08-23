import styles from './PageTitle.module.scss';

const PageTitle = props => {
  return (<h1 className={styles.pageTitle}>{props.children}</h1>);
};

export default PageTitle;
