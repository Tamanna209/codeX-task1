// src/components/SummarizerForm.js
import React, { useState } from 'react';
import './SummarizerForm.css';

const SummerizedForm = ({ onSummarize }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) onSummarize(url);
  };

  return (
    <form className="summarizer-form" onSubmit={handleSubmit}>
      <p style={{textAlign:'start', fontSize:"large", fontWeight:"bold"}}>Enter the URL :</p>
      <input
        type="url"
        placeholder="Enter article URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="url-input"
        required
      />
      <button type="submit" className="submit-button">Summarize</button>
    </form>
  );
};

export default SummerizedForm;
