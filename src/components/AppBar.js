import React from 'react';
import "../css/AppBar.css";

function AppBar({ onPageChange }) {
  return (
    <div className='AppBar'>
      <div className='Header'>
        <h1>오늘의 TODO✨</h1>
        <div>{new Date().toDateString()}</div>
      </div>
      <div className='buttons'>
        <button onClick={() => onPageChange('home')}>🏠</button>
        <button onClick={() => onPageChange('addEdit')}>➕</button>
        <button onClick={() => onPageChange('delete')}>🗑️</button>
      </div>
    </div>
  
  );
}

export default AppBar;
