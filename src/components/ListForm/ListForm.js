import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const listId = props.listId;
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description, listId }));
    setTitle('');
    setDescription('');
  };

  const dispatch = useDispatch();

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