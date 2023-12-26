import { useEffect } from 'react';

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const onPressESC = (evt) => {
      if (evt.code === 'Escape') {
        console.log('object :>> ', Date.now());
        closeModal();
      }
    };

    window.addEventListener('keydown', onPressESC);

    return () => {
      window.removeEventListener('keydown', onPressESC);
    };
  }, [closeModal]);

  return (
    <div className="modal fade show" style={{ display: 'block', backdropFilter: 'blur(5px)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Modal</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
