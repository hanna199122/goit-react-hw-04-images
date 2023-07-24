import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#root-modal');

const Modal = ({ showModal, children }) => {
  console.log(showModal);

  useEffect(() => {
    const onEscape = e => {
      if (e.code === 'Escape') {
        showModal();
      }
    };
    window.addEventListener('keydown', onEscape);
    return () => {
      window.removeEventListener('keydown', onEscape);
    };
  }, [showModal]);

  return createPortal(
    <div className={css.overlay} onClick={showModal}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  showModal: PropTypes.func,
};
