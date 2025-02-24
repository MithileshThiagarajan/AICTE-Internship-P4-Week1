import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome to BudgetBuddy</h1>
        <p>Manage your finances efficiently with our tools.</p>
      </div>
    </div>
  );
};

export default LandingPage;