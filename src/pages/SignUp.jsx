import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Sign Up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;