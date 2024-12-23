// src/App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import SummarizerForm from './Components/SummerizedForm';
import SummaryResult from './Components/SummeryResult';
import axios from 'axios';
import './App.css';

const App = () => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const summarizeArticle = async (url) => {
    setLoading(true);
    setError('');
    try {
      const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: { url, lang: 'en', engine: '2' },
        headers: {
          'x-rapidapi-key': 'd360c348f9msha1422818ac72229p12f112jsn185754e8fa5c',
          'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com',
        },
      };
      const response = await axios.request(options);
      setSummary(response.data.summary);
    } catch (err) {
      setError('Failed to fetch summary. Please check the URL and try again.');
    }
    setLoading(false);
  };

  return (
    <div className='main'>
      <div className="app">
      <Header />
      <SummarizerForm onSummarize={summarizeArticle} />
      <SummaryResult summary={summary} loading={loading} error={error} />
    </div>
    </div>
    
  );
};

export default App;
