import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    // Navigate to the SearchResults page with the search query
    navigate(`/search-results?q=${searchQuery}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
