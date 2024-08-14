import React from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../recoil/TodoState';
import "../css/TodoItem.css";

const TodoItem = ({ todo, onEditClick, onDetailClick }) => {
  const [todoList, setTodoList] = useRecoilState(todoState);

  const toggleComplete = () => {
    const updatedList = todoList.map(t =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
    setTodoList(updatedList);
  };

  const deleteTodo = () => {
    const userConfirmed = window.confirm('Are you sure you want to delete this item?');
    
    if (userConfirmed) {
      const updatedList = todoList.filter(t => t.id !== todo.id);
      setTodoList(updatedList);
      alert('Delete completed');
    } else {
      alert('Delete canceled');
    }
  };

  return (
    <div className={`TodoItem ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <div onClick={() => onDetailClick(todo.id)} style={{ cursor: 'pointer' }}>{todo.text}</div>
      <button className="update" onClick={() => onEditClick(todo.id)}>✏️</button>
      <button className="delete" onClick={deleteTodo}>🗑️</button>
    </div>
  );
};

export default TodoItem;
