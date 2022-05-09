import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import App from './App';

const Albums = lazy(() => import('./routes/Albums/Albums'));
const Detail = lazy(() => import('./routes/Detail/Detail'));
const Facts = lazy(() => import('./routes/Facts/Facts'));
const About = lazy(() => import('./routes/About/About'));
const Search = lazy(() => import('./routes/Search/Search'));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="albums" element={<Suspense fallback={<Loading />}><Albums /></Suspense>} />
        <Route path="albums/:albumId" element={<Suspense fallback={<Loading />}><Detail /></Suspense>} />
        <Route path="facts" element={<Suspense fallback={<Loading />}><Facts /></Suspense>} />
        <Route path="about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
        <Route path="search" element={<Suspense fallback={<Loading />}><Search /></Suspense>} />
        <Route path="*" element={<main><p>Error: no page found!</p></main>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
