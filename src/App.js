import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserId from './pages/UserId/UserId';
import UserAddress from './pages/UserAddress/UserAddress';
import UserAbout from './pages/UserAbout/UserAbout';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user-id" element={<UserId />} />
          <Route exact path="/" element={<Navigate to="/user-id" replace />} />
          <Route path="/user-address" element={<UserAddress />} />
          <Route path="/user-about" element={<UserAbout />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
