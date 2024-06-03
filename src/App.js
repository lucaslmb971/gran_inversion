import React, { useState } from 'react';
import './App.css';
import { db } from './data/db.js';
import Card from './components/Card.jsx';

function App() {
  const [personData, setPersonData] = useState(db);

  const increaseAge = (index) => {
    const updatedPersonData = [...personData];
    updatedPersonData[index].age += 1;
    setPersonData(updatedPersonData);
  };

  return (
    <div className='container'>
      {personData.map((person, index) => (
        <Card
          key={personData.id}
          firstName={person.firstName}
          lastName={person.lastName}
          age={person.age}
          hairColor={person.hairColor}
          increaseAge={() => increaseAge(index)}
        />
      ))}
    </div>
  );
}

export default App;
