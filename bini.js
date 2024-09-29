const express = require('express');
const app = express();

// Sample data for BINI's discography
const discography = {
  albums: [
    {
      id: 1,
      title: 'Born to Win',
      release_year: 2021,
      songs: [
        { id: 1, title: 'Born to Win', duration: '3:45' },
        { id: 2, title: 'Golden Arrow', duration: '4:01' }
      ]
    },
    {
      id: 2,
      title: 'Feel Good',
      release_year: 2022,
      songs: [
        { id: 3, title: 'Feel Good', duration: '3:50' },
        { id: 4, title: 'Kapit Lang', duration: '3:57' }
      ]
    }
  ],
  members: [
    { id: 1, name: 'Aiah', role: 'Main Vocalist' },
    { id: 2, name: 'Colet', role: 'Main Rapper' },
    { id: 3, name: 'Maloi', role: 'Lead Vocalist' },
    { id: 4, name: 'Gwen', role: 'Lead Dancer' },
    { id: 5, name: 'Stacey', role: 'Sub Vocalist' },
    { id: 6, name: 'Jhoanna', role: 'Leader, Sub Rapper' },
    { id: 7, name: 'Mikha', role: 'Visual, Sub Vocalist' },
    { id: 8, name: 'Sheena', role: 'Main Dancer' }
  ]
};

// Endpoints

// Get all albums
app.get('/albums', (req, res) => {
  res.json(discography.albums);
});

// Get a specific album by id
app.get('/albums/:id', (req, res) => {
  const album = discography.albums.find(album => album.id == req.params.id);
  if (album) {
    res.json(album);
  } else {
    res.status(404).json({ message: 'Album not found' });
  }
});

// Get all songs
app.get('/songs', (req, res) => {
  const songs = discography.albums.flatMap(album => album.songs);
  res.json(songs);
});