// src/components/SummaryResult.js
import React from 'react';
import './SummeryResult.css';

const SummeryResult = ({ summary, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="summary-result">
      <h2>Summary</h2>
      <p>{summary || "No summary available."}</p>
    </div>
  );
};

export default SummeryResult;
