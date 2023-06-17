import React, { useEffect } from 'react';

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handlePressKey = e => {
      if (e.code === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handlePressKey);
    return () => {
      window.removeEventListener('keydown', handlePressKey);
    };
  }, [closeModal]);

  return (
    <div
      className="modal show"
      style={{ display: 'block', backdropFilter: 'blur(3px)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
