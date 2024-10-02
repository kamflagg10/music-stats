const Song = ({ name, artist }) => {
  // console.log(name, artist);
  return (
    <div>
      <p>Song: {name}</p>
      <p>Artist: {artist}</p>
    </div>
  );
};

export default Song;
