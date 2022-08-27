import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsReducer';

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state, true));

  return (

    <div className={styles.favorite}>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.subtitle}>I like it:</p>
      <Container>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
        </ul>
      </Container>
    </div>
  );
};

export default Favorite;