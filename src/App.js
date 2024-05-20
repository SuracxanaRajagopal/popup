import React from 'react';
import './App.css';

const App = () => {
  const handleContextMenu = (e) => {
    e.preventDefault();
    const menu = document.querySelector('.context-menu');
    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
    menu.classList.add('show');
  };

  const handleMenuItemClick = (action) => {
    console.log('Action:', action);
    const menu = document.querySelector('.context-menu');
    menu.classList.remove('show');
  };

  return (
    <div className="container">
      <div className="box" onContextMenu={handleContextMenu}>
        Apple
        <div className="context-menu">
          <ul>
            <li onClick={() => handleMenuItemClick('Delete')}>Delete</li>
            <li onClick={() => handleMenuItemClick('Update')}>Update</li>
            <li onClick={() => handleMenuItemClick('Show')}>Show</li>
          </ul>
        </div>
      </div>
      <div className="box" onContextMenu={handleContextMenu}>
        Orange
        <div className="context-menu">
          <ul>
            <li onClick={() => handleMenuItemClick('Delete')}>Delete</li>
            <li onClick={() => handleMenuItemClick('Update')}>Update</li>
            <li onClick={() => handleMenuItemClick('Show')}>Show</li>
          </ul>
        </div>
      </div>
      <div className="box" onContextMenu={handleContextMenu}>
        Grape
        <div className="context-menu">
          <ul>
            <li onClick={() => handleMenuItemClick('Delete')}>Delete</li>
            <li onClick={() => handleMenuItemClick('Update')}>Update</li>
            <li onClick={() => handleMenuItemClick('Show')}>Show</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
