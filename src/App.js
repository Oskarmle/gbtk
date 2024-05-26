import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hjem from './pages/hjem';
import Information from './pages/information';
import Kalender from './pages/kalender';
import Tilmelding from './pages/tilmelding';
import Bestyrelse from './pages/bestyrelse/index';
import Upload from './pages/bestyrelse/upload'; // Protected Route
import Shop from './pages/shop';
import Errorsite from './pages/errorsite';
import ProtectedRoute from './components/HOC/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="information" element={<Information />} />
        <Route path="kalender" element={<Kalender />} />
        <Route path="tilmelding" element={<Tilmelding />} />
        <Route path="bestyrelse" element={<Bestyrelse />} />
        <Route
          path="bestyrelse/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />
        <Route path="shop" element={<Shop />} />
        <Route path="errorsite" element={<Errorsite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;