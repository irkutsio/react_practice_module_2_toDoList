import React, { Component, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Modal } from './Modal/Modal';
import { ToDoList } from './ToDo/ToDoList';
import { Header } from './Header/Header';
import { Registration } from 'components/RegistrationForm/RegistrationForm';

export const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const onShowModal = () => setIsShowModal(true);

  const onCloseModal = () => setIsShowModal(false);

  const createUser = data => {
    const UserId = uuidv4();
    const User = {
      ...data,
      id: UserId,
    };
    console.log(User);
  };

  
  return (
    <div>
      <Header showModal={onShowModal} />
      <ToDoList />
      {!isShowModal && (
        <Modal closeModal={onCloseModal}>
          <Registration createUser={createUser} closeModal={onCloseModal} />
        </Modal>
      )}
    </div>
  );
};

// export class App extends Component {
//   state = {
//     isShowModal: false,
//   };

// onShowModal = () => {
//   this.setState({
//     isShowModal: true,
//   });
// };

// onCloseModal = () => {
//   this.setState({
//     isShowModal: false,
//   });
// };

// createUser = (data) => {
//   const UserId = uuidv4();
//   const User = {
//     ...data,
//     id: UserId,
//   }
//   console.log(User);
// }

//   render() {
//     return (
//       <div>
//         <Header showModal={this.onShowModal} />
//         <ToDoList />

//         {this.state.isShowModal && (
//           <Modal closeModal={this.onCloseModal}>
//             <Registration createUser={this.createUser} closeModal={this.onCloseModal}/>
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }
