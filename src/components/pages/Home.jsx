import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Home</h1>
      <div className="d-flex gap-3">
        <Link to="/products" className="btn btn-success">Product</Link>
        <Link to="/users" className="btn btn-success">Users</Link>
        <Link to="/comments" className="btn btn-success">Comments</Link>
      </div>
    </div>
  );
};

export default Home;