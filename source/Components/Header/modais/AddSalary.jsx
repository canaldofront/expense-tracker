import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddSalary } from '../../../store/ui-slice';
import { useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';
import { serverTimestamp } from '@firebase/firestore';
import useAddDoc from '../../../hooks/useAddDoc';

const AddSalary = () => {
  const [amount, setAmount] = useState(0);

  const { isVisible } = useSelector((state) => state.ui.addSalary);
  const { categories } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const addSalaryHandler = useUpdateDoc();
  const addTransactionHandler = useAddDoc();

  const addSalary = (e) => {
    e.preventDefault();

    if (!amount) return;

    categories.forEach((category) => {
      const totalAmount = (Number(amount) * category.percentage) / 100;

      addSalaryHandler('categorias', category.id, {
        amount: category.amount + totalAmount,
      });

      addTransactionHandler('transactions', {
        amount: totalAmount,
        title: `Salário em ${category.title}`,
        type: 'income',
        date: serverTimestamp(),
      });
    });

    dispatch(toggleAddSalary(null));
    setAmount(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleAddSalary(null))}
      title='Adicionar Salário'>
      <div>
        <form onSubmit={addSalary}>
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
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddSalary;
