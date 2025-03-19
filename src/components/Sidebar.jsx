import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ playlists }) => {
  return (
    <div className="sidebar">
      <h3>Mis Playlists</h3>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
