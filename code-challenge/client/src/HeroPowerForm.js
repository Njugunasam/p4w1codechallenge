// HeroPowerForm.js
import React, { useState, useEffect } from 'react';

function HeroPowerForm({ heroId }) {
  const [powers, setPowers] = useState([]);
  const [selectedPower, setSelectedPower] = useState('');
  const [strength, setStrength] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch powers from the backend when the component mounts
    fetch('/powers')
      .then(response => response.json())
      .then(data => setPowers(data))
      .catch(error => console.error('Error fetching powers:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the strength is valid
    if (!['strong', 'weak', 'average'].includes(strength.toLowerCase())) {
      setErrorMessage('Strength must be either "strong", "weak", or "average".');
      return;
    }

    // Submit form data to create hero power relationship
    fetch('/hero_powers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        strength,
        power_id: selectedPower,
        hero_id: heroId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle success
        console.log('Hero Power Relationship Created:', data);
        // You can add additional logic here, such as updating the UI or navigating to a different page.
        setErrorMessage('');
        setStrength(''); // Clear the strength input after successful submission
      })
      .catch(error => console.error('Error creating hero power relationship:', error));
  };

  return (
    <div>
      <h2>Create Hero Power Relationship</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Select Power:
          <select value={selectedPower} onChange={(e) => setSelectedPower(e.target.value)}>
            <option value="">Select a Power</option>
            {powers.map(power => (
              <option key={power.id} value={power.id}>{power.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Strength:
          <input type="text" value={strength} onChange={(e) => setStrength(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HeroPowerForm;
