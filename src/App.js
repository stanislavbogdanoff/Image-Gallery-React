import React from 'react';
import { imagesList } from './components/imagesList';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <Gallery images={imagesList} />
  );
}

export default App;
