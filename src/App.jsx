import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Settings from './components/Settings';

const Product = () => {
  const { id } = useParams();
  return <h2>Product Details {id}</h2>;
}

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<h1>❌ Сторінку не знайдено</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
