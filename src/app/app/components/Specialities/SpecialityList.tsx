import { Advocate } from "../../types";
import SpecialityChip from "./SpecialityChip";

interface SpecialityListProps {
  id: Advocate["id"];
  specialties: Advocate["specialties"];
  toggleModal: () => void;
  condensed?: boolean;
}

const SpecialityList: React.FC<SpecialityListProps> = ({
  id,
  specialties,
  toggleModal,
  condensed,
}) => {
  return (
    <ul className="mt-4">
      {specialties.slice(0, condensed ? 4 : undefined).map((specialty) => (
        <SpecialityChip key={`${id}-${specialty}`} specialty={specialty} />
      ))}

      {condensed && specialties.length > 4 && (
        <li className="text-xs text-center">
          <button onClick={toggleModal}>
            +{specialties.length - 4} more specialties
          </button>
        </li>
      )}
    </ul>
  );
};

export default SpecialityList;
