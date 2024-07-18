import React, { useEffect, useState } from 'react';

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes')
      .then(response => response.json())
      .then(data => {
        console.log('All quotes data:', data);
        setQuotes(getRandomQuotes(data, 10));
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  const getRandomQuotes = (quotesArray, num) => {
    const shuffled = quotesArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  return (
    <div>
      <h1>Quotes</h1>
      <ul className="quotes-list">
        {quotes.map((quote, index) => (
          <li key={index}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuotesPage;

