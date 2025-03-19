import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PlaylistDetail from './pages/PlaylistDetail';
import './App.css';

const App = () => {
  const [playlists] = useState([
    { id: 1, name: 'Playlist 1' },
    { id: 2, name: 'Playlist 2' },
    { id: 3, name: 'Playlist 3' },
  ]);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Sidebar playlists={playlists} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playlist/:id" element={<PlaylistDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
