import styles from './Column.module.scss'
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsReducer';

const Column = ({title, icon, id}) => {
  const cards = useSelector(state => getFilteredCards(state, id));

  return (
    <article className={styles.column}>
      <h3 className={styles.title}><span className={`${styles.icon} fa fa-${icon}`} />{title}</h3>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
};

export default Column;

