// components/Search.tsx
import React from "react";

interface SearchProps {
  handleSearch: (searchTerm: string) => void;
}

const Search = ({ handleSearch }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
      <h1 className="text-center text-2xl font-bold">Search Items</h1>
      <input className="outline-none border border-gray-400 rounded-lg px-3 py-1" type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default Search;
