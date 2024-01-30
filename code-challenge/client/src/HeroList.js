import React, { useState, useEffect } from 'react';

function HeroList({ onSelectHero }) {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch('/heroes')
      .then(response => response.json())
      .then(data => setHeroes(data))
      .catch(error => console.error('Error fetching heroes:', error));
  }, []);

  return (
    <div>
      <h2>Heroes List</h2>
      {heroes.map(hero => (
        <div key={hero.id} onClick={() => onSelectHero(hero.id)}>
          <h3>{hero.name}</h3>
          <p>{hero.super_name}</p>
        </div>
      ))}
    </div>
  );
}

export default HeroList;