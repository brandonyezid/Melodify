import React from 'react';
import { useParams } from 'react-router-dom';

const PlaylistDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalles de la Playlist {id}</h2>
      {/* Aquí mostrarías canciones o detalles de la playlist */}
    </div>
  );
};

export default PlaylistDetail;
