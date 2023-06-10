export const ToDo = ({ todo, handleCheckCompleted,handleDelete }) => {
  return (
    <li className="list_group_item">
      <div>
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={()=>{handleCheckCompleted(todo.id)}}
          />
          {todo.title}
        </div>
        <div>
          <button disabled={!todo.completed} type="button" onClick={()=>{handleDelete(todo.id)}}>Close</button>
        </div>
      </div>
    </li>
  );
};
