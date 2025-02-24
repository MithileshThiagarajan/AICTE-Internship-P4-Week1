import React, { useState } from 'react';
import { Download, Filter, Search } from 'lucide-react';
import Layout from '../components/Layout';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

// Mock data for reports
const initialReports = [
  { id: 1, name: 'Shirts Adidas', amount: 150, date: '20/04/2024', category: 'Shopping' },
  { id: 2, name: 'Garden Tools', amount: 80, date: '19/04/2024', category: 'Garden' },
  { id: 3, name: 'Car Wash', amount: 30, date: '18/04/2024', category: 'Car' },
  { id: 4, name: 'Groceries', amount: 120, date: '17/04/2024', category: 'Food' },
  { id: 5, name: 'Netflix Subscription', amount: 15, date: '16/04/2024', category: 'Entertainment' },
];

const Reports = () => {
  const [reports, setReports] = useState(initialReports);
  const [filter, setFilter] = useState('');

  // Handle filtering by category or search term
  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(filter.toLowerCase()) ||
    report.category.toLowerCase().includes(filter.toLowerCase())
  );

  // Handle exporting data as CSV
  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," +
      "ID,Name,Amount,Date,Category\n" +
      filteredReports.map(report => 
        `${report.id},${report.name},${report.amount},${report.date},${report.category}`
      ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "reports.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Reports</h1>
          <div className="flex gap-4">
            <button
              onClick={handleExport}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by name or category..."
                className="w-full p-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
            <button className="p-2 bg-white border rounded-lg hover:bg-gray-100">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 text-sm text-gray-900">{report.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">${report.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{report.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{report.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No Results Message */}
        {filteredReports.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No matching records found.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Reports;