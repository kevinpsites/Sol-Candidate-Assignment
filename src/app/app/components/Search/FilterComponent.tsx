import React, { useState } from "react";

interface FilterComponentProps {
  optionTitle: string;
  options: string[];
  onSelectionChange: (selectedOptions: string[]) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  optionTitle,
  options,
  onSelectionChange,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const handleCheckboxChange = (option: string) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selectedOption) => selectedOption !== option)
      : [...selectedOptions, option];

    setSelectedOptions(newSelectedOptions);
    onSelectionChange(newSelectedOptions);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative inline-block">
      <button
        className={`px-3 py-2 cursor-pointer rounded  border border-transparent${
          isDropdownVisible ? "border border-gray-300 " : ""
        }`}
        onClick={toggleDropdown}
      >
        {optionTitle}{" "}
        {selectedOptions.length ? `(${selectedOptions.length})` : ""}
      </button>
      {isDropdownVisible && (
        <div className="absolute bg-white shadow-lg z-10 min-w-52 max-h-[320px] overflow-y-auto pt-4">
          <div className="p-2 h-11">
            <button
              className="text-blue-500 underline"
              onClick={() => {
                if (selectedOptions.length === options.length) {
                  setSelectedOptions([]);
                  onSelectionChange([]);
                } else {
                  setSelectedOptions(options);
                  onSelectionChange(options);
                }
              }}
            >
              {selectedOptions.length === options.length
                ? "Deselect All"
                : "Select All"}
            </button>
          </div>
          {options.map((option) => (
            <div key={option} className="p-2">
              <label htmlFor={option}>
                <input
                  id={option}
                  type="checkbox"
                  className="mr-2"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
