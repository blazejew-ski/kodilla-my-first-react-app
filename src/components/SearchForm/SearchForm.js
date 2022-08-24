import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringReducer';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchString, setSearch] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString({ searchString }));
    };

    useEffect(() => {
        dispatch(updateSearchString({ searchString }));
        }, []
    );

  return (
      <form onSubmit={handleSubmit} className={styles.searchForm}>
          <TextInput placeholder="Search..." value={searchString} onChange={e => setSearch(e.target.value)}/>
          <Button>
              <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;