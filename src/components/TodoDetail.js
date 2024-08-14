import React from 'react';
import "../css/TodoDetail.css"; 

const TodoDetail = ({ todo, onClose }) => {
    return (
      <div className="todo-detail">
        <div className="todo-detail-content">
          <h3>Todo Details</h3>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Text:</strong> {todo.text}</p>
          <p><strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}</p>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    );
};

export default TodoDetail;
