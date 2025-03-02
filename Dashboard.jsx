import React, { useEffect, useState } from 'react';
import { getAllTransactions } from '../api';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getAllTransactions('userId', { type: 'all', frequency: '7' });
        setTransactions(response.transactions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.title} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;