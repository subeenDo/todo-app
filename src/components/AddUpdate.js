import React, { useState, useEffect } from 'react';
import "../css/TodoCRUD.css";
import { useRecoilState } from 'recoil';
import { todoState } from '../recoil/TodoState';
import { v4 as uuidv4 } from 'uuid';

function AddUpdate({ onClose, todo }) {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoState);

  useEffect(() => {
    if (todo) {
      setInputValue(todo.text);
    }else {
      setInputValue('');
    }
  }, [todo]);

  const saveItem = () => {
    if (inputValue.trim()) {
      if (todo) {
        // 기존 todo 항목 업데이트
        const updatedList = todoList.map(t =>
          t.id === todo.id ? { ...t, text: inputValue.trim() } : t
        );
        setTodoList(updatedList);
        alert('Todo 항목이 성공적으로 업데이트되었습니다.');
      } else {
        // 새로운 todo 항목 추가
        const isDuplicate = todoList.some(t => t.text === inputValue.trim());

        if (isDuplicate) {
          alert('이미 존재하는 todo 항목입니다.');
        } else {
          setTodoList([
            ...todoList,
            { id: uuidv4(), text: inputValue.trim(), completed: false },
          ]);
          alert('Todo 항목이 성공적으로 추가되었습니다.');
        }
      }
      setInputValue('');
      onClose();
    } else {
      alert('유효한 todo 항목을 입력해주세요.');
    }
  };

  return (
    <div className='AddUpdate'>
      <h3>{todo ? 'Todo 수정 ✏️' : 'Todo 추가 ➕'}</h3>
      <div className='input'>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="Save" onClick={saveItem}>저장</button>
        <button className="Back" onClick={onClose}>뒤로가기</button>
      </div>
    </div>
  );
}

export default AddUpdate;
