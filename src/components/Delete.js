import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../recoil/TodoState';
import "../css/TodoCRUD.css";

function DeleteTodo({ onClose }) {
  const [todoList, setTodoList] = useRecoilState(todoState);
  const [idToDelete, setIdToDelete] = useState('');

  const deleteItem = () => {
    if (idToDelete) {
      const userConfirmed = window.confirm('Are you sure you want to delete this item?');
      
      if (userConfirmed) {
        setTodoList(todoList.filter(todo => todo.id !== idToDelete));
        setIdToDelete('');
        alert('Delete completed');
        onClose();
      } else {
        alert('Delete canceled');
      }
    } else {
      alert('Delete failed');
    }
  };

  return (
    <div className='AddUpdate'>
      <h3>TodoDelete🗑️</h3>
      <div className='input'>
        <select onChange={(e) => setIdToDelete(e.target.value)} value={idToDelete}>
          <option value="">항목을 선택해주세요.</option>
          {todoList.map((todo) => (
            <option key={todo.id} value={todo.id}>
              {todo.text}
            </option>
          ))}
        </select>
      <button className="Delete" onClick={deleteItem}>Delete</button>
      <button className="Back" onClick={onClose}>Back</button>
      </div>
    </div>
  );
}

export default DeleteTodo;