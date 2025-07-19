import React, { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = async () => {
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  // Fetch joke when app loads
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={styles.container}>
      <h1>😂 Random Joke Generator</h1>
      {joke ? (
        <div style={styles.jokeBox}>
          <p><strong>{joke.setup}</strong></p>
          <p>{joke.punchline}</p>
        </div>
      ) : (
        <p>Loading joke...</p>
      )}
      <button onClick={fetchJoke} style={styles.button}>Get Another Joke</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Arial'
  },
  jokeBox: {
    marginBottom: '1rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    background: '#f9f9f9'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default App;
