import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import todo from '../todo.json';
import './ToDo.css';

import { ToDo } from './ToDo';
import { FormToDo } from 'components/FormToDo/FormToDo';

export const ToDoList = () => {
  const [todoList, setTodoList] = useState('');
  const [isDelete, setIsDelete] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('todo'))
      setTodoList(() => JSON.parse(localStorage.getItem('todo')));
  }, []);

  useEffect(() => {
    todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  const handleCheckCompleted = id => {
    setTodoList(prevState => {
      return prevState.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDelete = id => {
    setTodoList(prevState => {
      return prevState.filter(todo => todo.id !== id);
    });
    setIsDelete(true);
    setTimeout(() => {
      setIsDelete(false);
    }, 2000);
  };

  const addToDo = value => {
    setTodoList(prevState => {
      return [
        ...prevState,
        {
          id: uuidv4(),
          title: value,
          completed: false,
        },
      ];
    });
    setIsCreate(true);
    setTimeout(() => {
      setIsCreate(false);
    }, 2000);
  };

  return (
    <>
      <h2>Мой ToDo List</h2>
      {isDelete && (
        <div className="alert alert-danger" role="alert">
          ToDo deleted successfully!
        </div>
      )}
      {isCreate && (
        <div className="alert alert-info" role="alert">
          New Todo Created!
        </div>
      )}
      <FormToDo addToDo={addToDo} />
      {todoList && (
        <ul className="list-group list-group-flush">
          {todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

// export class ToDoList extends Component {
//   state = {
//     todoList: '',
//     isDelete: false,
//     isCreate: false,
//   };

//   componentDidMount() {
//     localStorage.setItem('todo', JSON.stringify(todo));
//     if (localStorage.getItem('todo')) {
//       setState({ todoList: JSON.parse(localStorage.getItem('todo')) });
//     }
//   }

//   componentDidUpdate = (_, prevState) => {
//     if (prevState.todoList.length > todoList.length) {
//       localStorage.setItem('todo', JSON.stringify(todoList));
//       setState({
//         isDelete: true,
//         todo: localStorage.getItem('todo'),
//       });
//       setTimeout(() => {
//         setState({
//           isDelete: false,
//         });
//       }, 2000);
//     }

//     if (prevState.todoList.length < todoList.length) {
//       localStorage.setItem('todo', JSON.stringify(todoList));
//       setState({
//         isCreate: true,
//         todo: localStorage.getItem('todo'),
//       });
//       setTimeout(() => {
//         setState({
//           isCreate: false,
//         });
//       }, 2000);
//     }
//   };

//   handleCheckCompleted = id => {
//     setState(prevState => ({
//       todoList: prevState.todoList.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   addToDo = value => {
//     setState(prevState => ({
//       todoList: [
//         ...prevState.todoList,
//         {
//           id: uuidv4(),
//           title: value,
//           completed: false,
//         },
//       ],
//     }));
//   };

//   handleDelete = id => {
//     setState(prevState => ({
//       todoList: prevState.todoList.filter(todo => todo.id !== id),
//     }));
//   };

//   render() {
//     return (
//       todoList && (
//         <>
//           <h2>Мой ToDo List</h2>
//           {isDelete && (
//             <div className="alert alert-danger" role="alert">
//               ToDo deleted successfully!
//             </div>
//           )}
//           {isCreate && (
//             <div className="alert alert-info" role="alert">
//               New Todo Created!
//             </div>
//           )}
//           <FormToDo addToDo={addToDo} />
//           <ul className="list-group list-group-flush">
//             {todoList.map(todo => (
//               <ToDo
//                 key={todo.id}
//                 todo={todo}
//                 handleCheckCompleted={handleCheckCompleted}
//                 handleDelete={handleDelete}
//               />
//             ))}
//           </ul>
//         </>
//       )
//     );
//   }
// }
