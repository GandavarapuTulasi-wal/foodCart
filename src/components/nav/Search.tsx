import React, { useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <div className="ml-[120px] mt-[120px] mr-[120px]">
      <h1 className="text-3xl font-bold mb-4">Search</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for food or restaurants..."
          className="p-2 border rounded-md"
        />
      </form>

      <div className="mt-8">
        {query && <p>Showing results for "{query}"</p>}
      </div>
    </div>
  );
};

export default SearchPage;
