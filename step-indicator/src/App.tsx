import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import MainContent from './components/MainContent';

export const data = [
  {
    id: 1,
    title: 'First Step',
  },
  {
    id: 2,
    title: 'Second Step',
  },
  {
    id: 3,
    title: 'Third Step',
  },
  {
    id: 4,
    title: 'Fourth Step',
  },
];

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='sign-up'>
            <Route path='step/:stepId' element={<MainContent />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
