import Modal from '../../UI/Modal';
import styles from '../../../Components/UI/Modal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTransferAmount } from '../../../store/ui-slice';
import { useEffect, useState } from 'react';
import useUpdateDoc from '../../../hooks/useUpdateDoc';

const TransferAmount = () => {
  const [options, setOptions] = useState([]);
  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState(0);

  const { categories } = useSelector((state) => state.app);

  const { isVisible, category } = useSelector(
    (state) => state.ui.transferAmount
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const options = categories
      .map((category) => category.title)
      .filter((title) => title !== category?.title);

    setOptions(options);
    setDestination(options[0]);
  }, [categories, category?.title]);

  const transferAmountHandler = useUpdateDoc();

  const transferAmount = (e) => {
    e.preventDefault();

    if (!amount || !destination) return;

    const destinationCategory = categories.find(
      (category) => category.title === destination
    );

    transferAmountHandler('categorias', category.id, {
      amount: category.amount - Number(amount),
    });

    transferAmountHandler('categorias', destinationCategory.id, {
      amount: destinationCategory.amount + Number(amount),
    });

    dispatch(toggleTransferAmount(null));
    setAmount(0);
  };

  return (
    <Modal
      isOpen={isVisible}
      onClose={() => dispatch(toggleTransferAmount(null))}
      title='Transferir'>
      <div>
        <form onSubmit={transferAmount}>
          <div className={styles['label-input']}>
            <p>De</p>
            <p className='caption'>{category?.title ?? 'não encontrado'}</p>
          </div>
          <div className={styles['label-input']}>
            <label htmlFor='destination'>Para</label>
            <select
              name='destination'
              id='destination'
              className='max-width'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}>
              {options.map((option, i) => {
                return (
                  <option key={i} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
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
              Transferir
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default TransferAmount;
