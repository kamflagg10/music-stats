import './App.css';
import SongList from './components/SongList/SongList';
import NavBar from './components/NavBar/NavBar';

function App() {
  const handleCurrentSummaryClick = () => {
    console.log('you picked current');
  };

  const handleHistoricalSummaryClick = () => {
    console.log('you picked the historical summary. good choice.');
  };
  return (
    <div className="App">
      <NavBar />
      <h1>Show me</h1>
      <div>
        <button onClick={handleCurrentSummaryClick}>Current Summary</button>
        <button onClick={handleHistoricalSummaryClick}>
          Historical Summary
        </button>
      </div>
      <SongList />
    </div>
  );
}

export default App;
