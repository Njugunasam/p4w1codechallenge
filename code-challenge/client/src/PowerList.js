import React, { useState, useEffect } from 'react';

function PowerList() {
  const [powers, setPowers] = useState([]);

  useEffect(() => {
    fetch('/powers')
      .then(response => response.json())
      .then(data => setPowers(data))
      .catch(error => console.error('Error fetching powers:', error));
  }, []);

  return (
    <div>
      <h2>Powers List</h2>
      <ul>
        {powers.map(power => (
          <li key={power.id}>
            <h3>{power.name}</h3>
            <p>{power.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PowerList;
