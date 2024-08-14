import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';
import { useRecoilState } from 'recoil';
import { todoState } from '../recoil/TodoState';
import TodoDetail from './TodoDetail';
import AddUpdate from './AddUpdate';
import "../css/TodoItem.css";

const ListItem = () => {
  const [todoList, setTodoList] = useRecoilState(todoState);
  const [filter, setFilter] = useState('all');
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showAddUpdate, setShowAddUpdate] = useState(false);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  const getFilterClass = () => {
    switch (filter) {
      case 'completed':
        return 'filter-completed';
      case 'notCompleted':
        return 'filter-notCompleted';
      case 'all':
      default:
        return 'filter-all';
    }
  };

  const filteredTodos = todoList.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'notCompleted') return !todo.completed;
    return true;
  });

  const handleDetailClick = (id) => {
    const todo = todoList.find(t => t.id === id);
    setSelectedTodo(todo);
  };

  const handleEditClick = (todoId) => {
    const todo = todoList.find(t => t.id === todoId);
    setSelectedTodo(todo);
    setShowAddUpdate(true);
  };

  const handleCloseDetail = () => {
    setSelectedTodo(null);
  };

  const handleCloseAddUpdate = () => {
    setShowAddUpdate(false);
    setSelectedTodo(null);
  };

  return (
    <div>
      <div className='ListTitle'>
        <h3>Todo List🎶</h3>
        <label htmlFor="filter" className={getFilterClass()}>
            {filter === 'all' ? 'All' : filter === 'completed' ? 'Completed' : 'notCompleted'}
          </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">완료</option>
          <option value="notCompleted">미완료</option>
        </select>
      </div>
      {showAddUpdate ? (
        <AddUpdate onClose={handleCloseAddUpdate} todo={selectedTodo} />
      ) : selectedTodo ? (
        <TodoDetail todo={selectedTodo} onClose={handleCloseDetail} />
      ) : (
        <div>
          {filteredTodos.length > 0 ? (
            <div className='todos_wrapper'>
              {filteredTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onEditClick={handleEditClick}
                  onDetailClick={handleDetailClick}
                />
              ))}
            </div>
          ) : (
            <div className="no-todos">등록된 todo가 없습니다</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ListItem;
