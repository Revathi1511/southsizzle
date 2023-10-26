import React from 'react';

export default function SearchResults() {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    const searchURL = `https://www.google.com/search?client=firefox-b-d&q=${encodeURIComponent(searchTerm)}`;
    window.location.href = searchURL; // Redirect the user to the Google search URL
  };

  return (
    <div>
      <h2>Search Results</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="search" placeholder="Search on Google" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
