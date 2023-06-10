import React, { Component } from 'react';


export class Modal extends Component {  
  render () {
    const {children, closeModal} = this.props
    return (
      <div className="modal show"  style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn-close" onClick={closeModal} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          {children}
          </div>
         
          <div className="modal-footer">
           
            <button type="button"  className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    );
  }

 }  
  




// {/* <ModalContainer>
// <div>
//   <h5>Modal</h5>
//   <FormToDo/>
//   <button onClick={closeModal}>Closed modal</button>
//   <div>{children}</div>
// </div>
// </ModalContainer> */}