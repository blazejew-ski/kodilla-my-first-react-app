import styles from './Column.module.scss'


const Column = props => {
  return (
    <article className={styles.column}>
      <h3 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h3>
    </article>
  );
};

export default Column;