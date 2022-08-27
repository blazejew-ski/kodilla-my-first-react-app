import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsReducer';

const ListForm = ({listId}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description, listId }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <div className={styles.columnInputs}>
        <span className={styles.inputTitle}>Title:</span> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className={styles.columnInputs}>
        <span className={styles.inputTitle}>Description:</span> <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      </div>
        <Button>
              Add list
        </Button>
    </form>
  );
};

export default ListForm;