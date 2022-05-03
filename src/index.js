import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './routes/About/About';
import Albums from './routes/Albums/Albums';
import Facts from './routes/Facts/Facts';
import Detail from './routes/Detail/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="albums" element={<Albums />}>
          <Route path=":albumId" element={<Detail />} />
        </Route>
        <Route path="facts" element={<Facts />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<main><p>Error: no page found!</p></main>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
