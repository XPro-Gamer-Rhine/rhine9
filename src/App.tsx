/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Index from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upload from './components/upload';
import Post from './post/[id]';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
