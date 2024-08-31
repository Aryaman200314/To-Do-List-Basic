import React from 'react';
import './Cards.css';

const Card = ({ title, tasks, onMoveTask }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <hr/>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <span>{task}</span>
            <div className="task-controls">
              <button  onClick={() => onMoveTask(task, title, 'backward')}>{'<'}</button>
              <button onClick={() => onMoveTask(task, title, 'forward')}>{'>'}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
