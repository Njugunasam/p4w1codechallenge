import React, { useState, useEffect } from 'react';

function HeroDetails({ heroId }) {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    if (heroId) {
      fetch(`/heroes/${heroId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => setHero(data))
        .catch(error => console.error('Error fetching hero details:', error));
    }
  }, [heroId]);

  return (
    <div>
      {hero ? (
        <div>
          <h2>{hero.name}</h2>
          <p>{hero.super_name}</p>
          <h3>Powers:</h3>
          <ul>
            {hero.powers.map(power => (
              <li key={power.id}>{power.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading hero details...</p>
      )}
    </div>
  );
}

export default HeroDetails;
