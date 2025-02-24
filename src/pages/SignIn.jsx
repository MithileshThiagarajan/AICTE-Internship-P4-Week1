import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const SignIn = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Sign In</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;