import './App.css';
import SongList from './components/SongList/SongList';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
  const [view, setView] = useState({ button: 'historical', song: null });

  const handleCurrentSummaryClick = () => {
    if (view.button !== 'current') {
      setView({ button: 'current', song: null });
    }
  };

  const handleHistoricalSummaryClick = () => {
    if (view.button !== 'historical') {
      setView({ button: 'historical', song: null });
    }
  };

  const handleSongClicked = (songName) => {
    console.log('show the song page for: ', songName);
    setView({ button: null, song: songName });
  };

  const buttonViewHandler =
    view.button === 'historical' ? (
      <SongList songClicked={handleSongClicked} />
    ) : (
      <div>Current Summary Coming Soon!</div>
    );

  return (
    <div className="App">
      <NavBar />
      <h1>Show me</h1>
      <div>
        <button className="option" onClick={handleCurrentSummaryClick}>
          Current Summary
        </button>
        <button className="option" onClick={handleHistoricalSummaryClick}>
          Historical Summary
        </button>
      </div>
      <div className="songsContainer">
        {!!view.button ? buttonViewHandler : view.song}
      </div>
    </div>
  );
}

export default App;
