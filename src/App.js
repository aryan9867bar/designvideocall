import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainVideo from './components/MainVideo';
import Photos from './components/Photos';
import Video from './components1/Video';
import Video1 from './components1/Video1';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainVideo/>}></Route>
        <Route exact path="/photos" element={<Photos/>}></Route>
        <Route exact path="/video" element={<Video/>}></Route>
        <Route exact path="/video1" element={<Video1/>}></Route>
      </Routes>
    </>
  );
}

export default App;