import React, { useState } from 'react';
import './Cards.css';
import Card from './Card';

const Cards = () => {
  const [tasks, setTasks] = useState({
    Backlog: [],
    'To Do': [],
    Ongoing: [],
    Done: [],
  });

  const [taskName, setTaskName] = useState('');
  const [selectedCard, setSelectedCard] = useState('Backlog');

  const handleAddTask = () => {
    if (taskName.trim() === '') return;

    setTasks(prevTasks => ({
      ...prevTasks,
      [selectedCard]: [...prevTasks[selectedCard], taskName],
    }));

    setTaskName('');
  };

  const handleMoveTask = (task, currentCard, direction) => {
    const cardOrder = ['Backlog', 'To Do', 'Ongoing', 'Done'];
    const currentIndex = cardOrder.indexOf(currentCard);
    const newIndex = direction === 'forward' ? currentIndex + 1 : currentIndex - 1 ;

    if (newIndex >= 0 && newIndex < cardOrder.length) {
      const newCard = cardOrder[newIndex];

      setTasks(prevTasks => ({
        ...prevTasks,
        [currentCard]: prevTasks[currentCard].filter(t => t !== task),
        [newCard]: [...prevTasks[newCard], task],
      }));
    }
  };

  return (
    <div>
      <div className="cards-container">
        <Card title="Backlog" tasks={tasks.Backlog} onMoveTask={handleMoveTask} />
        <Card title="To Do" tasks={tasks['To Do']} onMoveTask={handleMoveTask} />
        <Card title="Ongoing" tasks={tasks.Ongoing} onMoveTask={handleMoveTask} />
        <Card title="Done" tasks={tasks.Done} onMoveTask={handleMoveTask} />
      </div>
      <div className="add-task-form">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
        <select value={selectedCard} onChange={(e) => setSelectedCard(e.target.value)}>
          <option value="Backlog">Backlog</option>
          <option value="To Do">To Do</option>
          <option value="Ongoing">Ongoing</option>
          <option value="Done">Done</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default Cards;
