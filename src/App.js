import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserId from './pages/UserId/UserId';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/userId" element={<UserId />} />
          <Route exact path="/" element={<Navigate to="/userId" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
