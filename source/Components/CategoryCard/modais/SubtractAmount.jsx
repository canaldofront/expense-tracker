import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubtractAmount } from '../../../store/ui-slice';
import { useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import useAddDoc from '../../../hooks/useAddDoc';
import { serverTimestamp } from '@firebase/firestore';

const SubtractAmount = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const { isVisible, category } = useSelector(
    (state) => state.ui.subtractAmount
  );
  const dispatch = useDispatch();

  const subtractAmountHandler = useUpdateDoc();
  const addTransactionHandler = useAddDoc();

  const subtractAmount = (e) => {
    e.preventDefault();

    if (!title || !amount) return;

    subtractAmountHandler('categorias', category.id, {
      amount: category.amount - Number(amount),
    });

    addTransactionHandler('transactions', {
      amount: Number(amount),
      title,
      type: 'expense',
      date: serverTimestamp(),
    });

    dispatch(toggleSubtractAmount(null))
    setTitle('');
    setAmount(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleSubtractAmount(null))}
      title='Descontar'>
      <div>
        <form onSubmit={subtractAmount}>
          <div className={styles['label-input']}>
            <label htmlFor='title' className='p'>
              Título
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Ex: gasolina do carro'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles['label-input']}>
            <label htmlFor='amount' className='p'>
              Valor
            </label>
            <input
              type='text'
              id='amount'
              name='amount'
              placeholder='R$'
              className='max-width'
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <button type='submit' className='btn btn-primary'>
              Descontar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SubtractAmount;
