import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleIsFavorite } from '../../redux/cardsReducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Card = props => {
    const [isFavorite, setIsFavorite] = useState(props.isFavorite);
    const title = props.title;
    const id = props.id;
    console.log(isFavorite, title, id);
    const dispatch = useDispatch();

    const prepareColorClassNameActive = isFavorite => {
        if (isFavorite){
          return styles.cardActive;
        }
        else {return ''};
      }

    const handleSubmit = e => {
        e.preventDefault();
        if (!isFavorite) {
            setIsFavorite(true);
            dispatch(toggleIsFavorite(id));
        } else {
            setIsFavorite(false);
            dispatch(toggleIsFavorite(id));
        }
      };

    return (
        <li className={styles.card}>{props.title} <span onClick={handleSubmit} className={'fa fa-star-o ' + clsx(prepareColorClassNameActive(isFavorite))}></span></li>
    );
};

export default Card;