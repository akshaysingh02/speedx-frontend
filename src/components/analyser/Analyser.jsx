import React, { useState } from 'react';
import axios from 'axios';
import styles from './Analyser.module.css';
import Results from '../Results/Results';

export default function Analyser() {
  const [url, setUrl] = useState('');
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);

  const formatUrl = (inputUrl) => {
    let formattedUrl = inputUrl.trim();

    if (formattedUrl.startsWith('www.')) {
      formattedUrl = formattedUrl.replace('www.', '');
    }

    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl;
    }

    return formattedUrl;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!url) {
      setError('URL field cannot be empty');
      return;
    }

    const formattedUrl = formatUrl(url);

    setUrl(formattedUrl);

    try {
      setIsLoading(true);
      setShowResults(true);
      setError(null);
      const response = await axios.post('http://localhost:3001/api/metrics/analyse', { url: formattedUrl });
      setMetrics(response.data);
      setIsLoading(false);
    } catch (err) {
      setError('An error occurred while analyzing the URL');
      setShowResults(false);
      setMetrics(null);
    }
  };

  return (
    <div className={styles.analyserWrapper}>
      <h1>speedX Website<br/>Performance Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
        />
        <button type="submit">Analyze</button>
      </form>
      {error && <p className={styles.errors}>{error}</p>}
      {showResults && (
        <Results metrics={metrics} isLoading={isLoading} />
      )}
    </div>
  );
}
