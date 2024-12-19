import { ReactNode } from "react";

interface FilterSectionProps {
  children: ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ children }) => {
  return (
    <div className="ms-4">
      <div className="border-b-2">Filter</div>
      <div>{children}</div>
    </div>
  );
};

export default FilterSection;
