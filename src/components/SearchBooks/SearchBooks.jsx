import React, { useState } from 'react';

export default function SearchBooks({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleClick = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      alert('AAAAAA');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" onChange={handleClick} value={query} />
        </label>
        <button type="submit">please</button>
      </form>
    </>
  );
}
