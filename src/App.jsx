import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Users from './components/Users';
import Product from './components/Product';
import Comments from './components/Comments';
import CommentId from './components/CommentId';

const App = () => {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Product />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/comments/:id" element={<CommentId />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
