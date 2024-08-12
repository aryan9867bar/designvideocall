import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainVideo from './components/MainVideo';
import Photos from './components/Photos';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainVideo/>}></Route>
        <Route exact path="/photos" element={<Photos/>}></Route>
      </Routes>
    </>
  );
}

export default App;