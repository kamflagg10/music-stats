import { useEffect, useState } from 'react';
import Song from './Song';
import './SongList.css';

const SongList = ({ songClicked }) => {
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
    return (
      <Song
        key={song._id}
        name={song.master_metadata_track_name}
        artist={song.master_metadata_album_artist_name}
        onSongClick={songClicked}
      />
    );
  });
  return <div className="songList">{!!songsMap.length && songsMap}</div>;
};

export default SongList;
