import React, { ChangeEvent, useState } from "react";

interface SearchBarProps {
  children?: React.ReactNode;
  onSubmit: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const onFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    onSubmit(formData.get("search") as string);
  };

  return (
    <form
      className="border border-gray-300 rounded-md mt-3 p-1"
      onSubmit={onFormSubmit}
    >
      <input
        id="search"
        name="search"
        type="text"
        className="p-2  min-w-96 max-w-2xl"
        placeholder="Search by name, specialty, city, degree, or experience"
      />
      <button
        className=" ms-2 p-2 border border-gray-300 rounded-full "
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
