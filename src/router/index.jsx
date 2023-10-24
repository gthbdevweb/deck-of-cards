import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DeckOfCards from '../pages/DeckOfCards';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deck-of-cards" element={<DeckOfCards />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
