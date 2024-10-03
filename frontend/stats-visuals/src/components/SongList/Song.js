import './Song.css';

const Song = ({ name, artist }) => {
  // console.log(name, artist);
  const imgAltText = `Album artwork for ${name} by ${artist}`;
  return (
    <div className="song">
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
