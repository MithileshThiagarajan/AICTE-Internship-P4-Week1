import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const Budgets = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Budgets</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="income" className="form-label">Add Income</label>
            <input type="number" className="form-control" id="income" />
          </div>
          <div className="mb-3">
            <label htmlFor="expense" className="form-label">Add Expense</label>
            <input type="number" className="form-control" id="expense" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Budgets;