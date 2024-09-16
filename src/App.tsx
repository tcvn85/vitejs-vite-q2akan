import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from 'react';
import { Layout } from './pages/layout/default';
import './app.scss';

const Home = lazy(() => import('./pages/home'));
const NoPage = lazy(() => import('./pages/404'));
const IndieGame = lazy(() => import('./pages/indie-game'));
const EntryGame = lazy(() => import('./pages/entry-game'));
const Community = lazy(() => import('./pages/community'));

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="indie-game" element={<IndieGame />} />
            <Route path="entry-game" element={<EntryGame />} />
            <Route path="Community" element={<Community />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
