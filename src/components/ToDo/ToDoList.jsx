import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import todo from '../todo.json';
import './ToDo.css';

import { ToDo } from './ToDo';
import { FormToDo } from 'components/FormToDo/FormToDo';

export class ToDoList extends Component {
  state = {
    todoList: '',
    isDelete: false,
    isCreate: false,
  };

  componentDidMount() {
    // localStorage.setItem('todo', JSON.stringify(todo));
    if (localStorage.getItem('todo')) {
      this.setState({ todoList: JSON.parse(localStorage.getItem('todo')) });
    } 
  }

  componentDidUpdate = (_, prevState) => {
    if (prevState.todoList.length > this.state.todoList.length) {
      localStorage.setItem('todo', JSON.stringify(this.state.todoList));
      this.setState({
        isDelete: true,
        // todo: localStorage.getItem('todo'),
      });
      setTimeout(() => {
        this.setState({
          isDelete: false,
        });
      }, 2000);
    }

    if (prevState.todoList.length < this.state.todoList.length) {
      localStorage.setItem('todo', JSON.stringify(this.state.todoList));
      this.setState({
        isCreate: true,
        // todo: localStorage.getItem('todo'),
      });
      setTimeout(() => {
        this.setState({
          isCreate: false,
        });
      }, 2000);
    }
  };

  handleCheckCompleted = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addToDo = value => {
    this.setState(prevState => ({
      todoList: [
        ...prevState.todoList,
        {
          id: uuidv4(),
          title: value,
          completed: false,
        },
      ],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id),
    }));
  };

  render() {
    return (
      this.state.todoList && (
        <>
          <h2>Мой ToDo List</h2>
          {this.state.isDelete && (
            <div className="alert alert-danger" role="alert">
              ToDo deleted successfully!
            </div>
          )}
          {this.state.isCreate && (
            <div className="alert alert-info" role="alert">
              New Todo Created!
            </div>
          )}
          <FormToDo addToDo={this.addToDo} />
          <ul className="list-group list-group-flush">
            {this.state.todoList.map(todo => (
              <ToDo
                key={todo.id}
                todo={todo}
                handleCheckCompleted={this.handleCheckCompleted}
                handleDelete={this.handleDelete}
              />
            ))}
          </ul>
        </>
      )
    );
  }
}
