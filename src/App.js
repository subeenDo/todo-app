import React, { useState } from 'react';
import Home from './components/Home';
import AddUpdate from './components/AddUpdate';
import Delete from './components/Delete';
import AppBar from './components/AppBar';
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='App'>
    
      <AppBar onPageChange={handlePageChange} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'addEdit' && <AddUpdate onClose={() => handlePageChange('home')} />}
      {currentPage === 'delete' && <Delete onClose={() => handlePageChange('home')} />}
    </div>
  );
}


export default App;
