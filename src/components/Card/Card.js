import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleIsFavorite, removeCard } from '../../redux/cardsReducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Card = ({title, id, isFavorite}) => {
  const dispatch = useDispatch();
  const [isFavoriteCard, setIsFavorite] = useState(isFavorite);
  console.log(isFavoriteCard, title, id);

  const handleToggle = e => {
      e.preventDefault();
      if (!isFavoriteCard) {
          setIsFavorite(true);
          dispatch(toggleIsFavorite(id));
      } else {
          setIsFavorite(false);
          dispatch(toggleIsFavorite(id));
      }
    };
  const handleRemove = e => {
    e.preventDefault();
        dispatch(removeCard(id));
    }

  return (
      <li className={styles.card}>
        {title}
        <div className={styles.cardIcons}>
          <span onClick={handleToggle} className={`fa fa-star-o ${clsx({[styles.cardActive]: isFavoriteCard})}`}></span>
          <span onClick={handleRemove} className={'fa fa-trash-o'}></span>
        </div>
      </li>
  );
};

export default Card;