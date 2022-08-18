import styles from './Column.module.scss'
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';

const Column = props => {
  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id && card.title.toString().toLowerCase().includes(state.searchString.searchString.toString().toLowerCase())));

  return (
    <article className={styles.column}>
      <h3 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h3>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;

