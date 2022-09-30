import styles from './Modal.module.scss';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';

const Modal = ({isOpen = false, onClose, title, children}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalWrapper = isOpen ? (
    <>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h2>{title}</h2>
          <button onClick={onClose}>
            <MdClose className='icon hover'/>
          </button>
        </div>
        {children}
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalWrapper,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
};

export default Modal;
