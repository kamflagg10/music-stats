import './Song.css';

const Song = ({ name, artist, onSongClick }) => {
  const imgAltText = `Album artwork for ${name} by ${artist}`;

  const handleSongClicked = () => {
    onSongClick('burn');
  };

  return (
    <div className="song" onClick={handleSongClicked}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/f/f6/Journey_Departure.jpg"
        alt={imgAltText}
      />
      <div className="songInfo">
        <p className="songTitle">Song: {name}</p>
        <p className="songArtist">Artist: {artist}</p>
      </div>
    </div>
  );
};

export default Song;
