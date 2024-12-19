import React from "react";

interface SpecialityChipProps {
  specialty: string;
}

const SpecialityChip: React.FC<SpecialityChipProps> = ({ specialty }) => {
  return (
    <li className="inline-block bg-blue-200 text-blue-800 text-xs px-4 py-1 my-1 mx-1 rounded-full">
      {specialty}
    </li>
  );
};

export default SpecialityChip;
