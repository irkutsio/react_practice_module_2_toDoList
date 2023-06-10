import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Modal } from './Modal/Modal';
import { ToDoList } from './ToDo/ToDoList';
import { Header } from './Header/Header';
import { FormToDo } from 'components/FormToDo/FormToDo';



export class App extends Component {
  state = {
    isShowModal: false,
  };

  onShowModal = () => {
    this.setState({
      isShowModal: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      isShowModal: false,
    });
  };


  createUser = (data) => {
    const UserId = uuidv4();
    const User = {
      ...data,
      id: UserId,
    }
    console.log(User);
  }

  render() {
    return (
      <div>
        <Header showModal={this.onShowModal} />
        <ToDoList />

        {this.state.isShowModal && (
          <Modal closeModal={this.onCloseModal}>
            <FormToDo createUser={this.createUser} closeModal={this.onCloseModal}/>
          </Modal>
        )}
      </div>
    );
  }
}
