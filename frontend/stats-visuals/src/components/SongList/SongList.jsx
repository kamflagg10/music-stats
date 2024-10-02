import { useEffect, useState } from 'react';
import Song from './Song';

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function getSongs() {
      const res = await fetch('http://localhost:3000/');
      const jsonRes = await res.json();
      setSongs(jsonRes['results']);
    }
    getSongs();
  }, []);

  const songsMap = songs.map((song) => {
    console.log(song);
    return (
      <Song key={song._id} name={song.trackName} artist={song.artistName} />
    );
  });
  return <div>{!!songsMap.length && songsMap}</div>;
};

export default SongList;
