import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddCategory } from '../../../store/ui-slice';
import { useState } from 'react';
import useAddDoc from '../../../hooks/useAddDoc';

const AddCategory = () => {
  const [title, setTitle] = useState('');
  const [percentage, setPercentage] = useState(0);

  const { isVisible, category } = useSelector((state) => state.ui.addCategory);
  const dispatch = useDispatch();

  const addCategoryHandler = useAddDoc();

  const addCategory = (e) => {
    e.preventDefault();

    if (!title || !percentage) return;

    addCategoryHandler('categorias', {
      title,
      percentage: Number(percentage),
      amount: 0,
    });

    dispatch(toggleAddCategory(null));
    setTitle('');
    setPercentage(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddCategory(null))}
      title='Nova Categoria'>
      <div>
        <form onSubmit={addCategory}>
          <div className={styles['label-input']}>
            <label htmlFor='title' className='p'>
              Título
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Essencial'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles['label-input']}>
            <label htmlFor='porcentagem' className='p'>
              Porcentagem alocada
            </label>
            <input
              type='text'
              id='porcentagem'
              name='porcentagem'
              placeholder='%'
              className='max-width'
              onChange={(e) => setPercentage(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <button type='submit' className='btn btn-primary'>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCategory;
