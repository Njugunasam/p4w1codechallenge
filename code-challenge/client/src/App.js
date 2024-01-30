import React, { useState } from 'react';
import HeroList from './HeroList';
import HeroDetails from './HeroDetails';
import HeroPowerForm from './HeroPowerForm';
import PowerList from './PowerList';

const appStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
};

function App() {
  const [selectedHeroId, setSelectedHeroId] = useState(null);
  const [showPowerList, setShowPowerList] = useState(false);

  const handleHeroSelect = (heroId) => {
    setSelectedHeroId(heroId);
    setShowPowerList(false); // Hide PowerList when a hero is selected
  };

  const handleShowPowerList = () => {
    setSelectedHeroId(null); // Deselect any hero when showing PowerList
    setShowPowerList(true);
  };

  return (
    <div style={appStyle}>
      {selectedHeroId ? (
        <>
          <HeroDetails heroId={selectedHeroId} />
          <hr />
          <HeroPowerForm heroId={selectedHeroId} />
        </>
      ) : showPowerList ? (
        <PowerList />
      ) : (
        <HeroList onSelectHero={handleHeroSelect} />
      )}
      {!showPowerList && (
        <button onClick={handleShowPowerList}>Show Power List</button>
      )}
    </div>
  );
}

export default App;
