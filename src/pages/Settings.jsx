import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const Settings = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Settings</h2>
        <p>User settings and preferences go here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;