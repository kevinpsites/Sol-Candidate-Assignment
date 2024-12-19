import React from "react";

interface SortComponentProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SortComponent: React.FC<SortComponentProps> = ({ onChange }) => {
  return (
    <label htmlFor="sort">
      <div className=" border-b-2"> Sort By</div>
      <select id="sort" name="sort" onChange={onChange} className="h-11">
        <option value="az">Name (A-Z)</option>
        <option value="za">Name (Z-A)</option>
        <option value="degreeAz">Degree (A-Z)</option>
        <option value="yearsOfExperienceHl">
          Years of Experience (High - Low)
        </option>
        <option value="yearsOfExperienceLh">
          Years of Experience (Low - High)
        </option>
      </select>
    </label>
  );
};

export default SortComponent;
